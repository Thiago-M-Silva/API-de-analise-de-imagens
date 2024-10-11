import { FastifyRequest, FastifyReply } from "fastify";
import { CreateServiceClass } from "../services/createService";


class CreateController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        //reajustar de acordo com o desafio
        const {} = request.body as {};
        
        const createService = new CreateServiceClass()
        //renomear essa variavel 
        const imagem = await createService.execute( );

        reply.send(imagem);
    }
}

export { CreateController }