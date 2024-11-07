import { Imagem } from "@prisma/client";
import prismaClient from "../prisma";

class CreateServiceClass {
    async add(imagem: Imagem){
        
        await prismaClient.imagem.create({
            data: imagem
        })

        return {ok: true}
    }
}

export { CreateServiceClass }