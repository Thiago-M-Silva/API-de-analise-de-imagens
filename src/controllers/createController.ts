import { FastifyRequest, FastifyReply } from "fastify";
import { CreateServiceClass } from "../services/createService";
import { ImagemBody } from "../interfaces/imageInterface";
import { ValidateService } from "../services/validateService";
import { GeminiServiceClass } from "../services/geminiService";

class CreateController {
    gemini = new GeminiServiceClass();

    async handle(request: FastifyRequest, reply: FastifyReply){
        const { imagem: ImagemBody } = request.body as { imagem: ImagemBody };
        
        let val = new ValidateService();

        if(await val.validate(ImagemBody) === "valido"){
            let resultado = this.gemini.extrairValImagem(ImagemBody);
            
            const createService = new CreateServiceClass();
            const imagem = await createService.execute();

            let leitura = {imagem, resultado}

            reply.send(leitura);
        }else if(val.validate(ImagemBody) === "invalido"){
            reply.code(400);
        }
    }
}

export { CreateController }