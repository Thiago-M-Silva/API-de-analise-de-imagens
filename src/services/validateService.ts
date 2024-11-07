import { PrismaClient } from "@prisma/client";
import { ImagemBody } from "../interfaces/imageInterface";

class ValidateService{

    constructor(){}

    prisma = new PrismaClient()

    validate(data: ImagemBody){
      if (
        data &&
        typeof data.code === "string" &&
        typeof data.type === "string" &&
        data.datetime
      ) {
        var base64 =
          /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
        if (base64.test(data.image) && data.type === "WATER" || data.type === "GAS" ) {
          return this.verificaObjetoExistente(data);
        }
      } else {
        return "invalido" 
      }
    }

    //TODO: ajustar o bd
    async verificaObjetoExistente(data: ImagemBody) {
      const objeto = await this.prisma.imagem.findUnique({
        where:{
          id: data.code,
        }
      });
      if(objeto){
        return "valido"
      } else {
        return "obj existente"
      }

  
    }
}

export { ValidateService }