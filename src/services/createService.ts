import prismaClient from "../prisma";

interface CreateProps{
    //ajustar de acordo com o desafio
}

class CreateServiceClass {
    async execute(){
        
        const armazena = await prismaClient

        return {ok: true}
    }
}

export { CreateServiceClass }