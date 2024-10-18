import { FastifyRequest, FastifyReply } from "fastify";
import { CreateServiceClass } from "../services/createService";
import { ImagemBody } from "../interfaces/imageInterface";
import { ValidateService } from "../services/validateService";

class CreateController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { imagem: ImagemBody } = request.body as { imagem: ImagemBody };
        
        let val = new ValidateService();

        if(val.Validate(ImagemBody) === "valido"){

            //TODO: enviar para o gemini
            
            const createService = new CreateServiceClass();
            const imagem = await createService.execute();

            reply.send(imagem);
        }else if(val.Validate(ImagemBody) === "invalido"){
            reply.code(400);
        }
    }
}

export { CreateController }