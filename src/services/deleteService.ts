import prismaClient from "../prisma";

interface DeleteProps{
    id: string;
}

class DeleteService{
    async execute({id}: DeleteProps){
      if (!id) {
        throw new Error("Manda alguma coisa ae mano");
      }

      const findImage = await prismaClient;
      //prismaClent.imagem.findFirst({where:{id}})

      if (!findImage) {
        throw new Error("isso nao existe");
      }

      await prismaClient;
      //prismaClent.imagem.delete({where:{id}})

      return { message: "Deletado com sucesso!"}
    }
}

export { DeleteService };