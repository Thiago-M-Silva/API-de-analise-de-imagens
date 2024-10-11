import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteService } from "../services/deleteService";

class DeleteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: string}

        const deleteService = new DeleteService();

        const imagem = await deleteService.execute({id});

        reply.send(imagem);
    }
}

export { DeleteController }