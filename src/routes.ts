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

    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
      return reply.send("teste");
    });
    
    fastify.get("/{code}/listar", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListController().handle(request, reply)
    })
    
    fastify.post("/upload", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateController().handle(request, reply)
    })
    
    fastify.patch("/confirm", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteController().handle(request, reply)
    })

    fastify.delete("/deletar", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteController().handle(request, reply)
    })

}