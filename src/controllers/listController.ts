import { FastifyRequest, FastifyReply } from "fastify";
import { ListService } from "../services/listService";

class ListController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listService = new ListService();

        const imagens = await listService.execute();

        reply.send(imagens);
    }
}

export { ListController }