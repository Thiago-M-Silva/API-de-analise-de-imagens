import prismaClient from "../prisma";

class ListService{
    async execute(){
        //prismaClient.imagens.findMany()
        const imagens = await prismaClient

        return imagens;
    }
}

export { ListService }