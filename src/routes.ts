import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify"
import { CreateController } from "./controllers/createController";
import { ListController } from "./controllers/listController";
import { DeleteController } from "./controllers/deleteController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/criar", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateController().handle(request, reply)
    })
    
    fastify.get("/listar", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListController().handle(request, reply)
    })

    fastify.delete("/deleltar", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteController().handle(request, reply)
    })
}