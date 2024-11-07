import { PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";
import { ListService } from "../services/listService";
import { CreateServiceClass } from "../services/createService";
import { ImagemBody } from "../interfaces/imageInterface";


class PatchController {
  private dbClient: PrismaClient;
  listService = new ListService();
  createService = new CreateServiceClass();

  constructor() {
    this.dbClient = new PrismaClient();
  }

  async confirmaMedida(request: FastifyRequest): Promise<{ status: string; message: string }> {
    const { data } = request.params as { data: ImagemBody }

    // Validações de tipo
    if ( typeof data.code !== "string" ) {
      throw new Error(
        "Dados inválidos: 'measure_uuid' deve ser string e 'confirmed_value' deve ser número."
      );
    }

    // Verifica se o código de leitura existe
    const reading = this.listService.listAll();
    if (!reading) {
      throw new Error("Código de leitura não encontrado.");
    }

    // Atualiza o valor confirmado no banco de dados
    const updateResult = await this.createService.add({id: '0', ...data});

    if (!updateResult) {
      throw new Error(
        "Erro ao atualizar o valor confirmado no banco de dados."
      );
    }

    return {
      status: "OK",
      message: "Leitura confirmada com sucesso.",
    };
  }
}

export { PatchController };
