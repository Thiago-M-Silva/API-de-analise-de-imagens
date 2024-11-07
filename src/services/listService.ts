import prismaClient from "../prisma";

class ListService{
    async execute(code: string){
        prismaClient.imagem.findFirst({
            where: {
                code: code,
            }
        })
        const imagens = await prismaClient

        return imagens;
    }

    async listAll(){
        return await prismaClient.imagem.findMany()
    }
}

export { ListService }