import { PrismaClient } from "@prisma/client";
import { ImagemBody } from "../interfaces/imageInterface";

class ValidateService{

    constructor(){}

    prisma = new PrismaClient()

    Validate(data: ImagemBody){
      if (
        data &&
        typeof data.code === "string" &&
        typeof data.type === "string" &&
        data.datetime
      ) {
        var base64 =
          /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
        if (base64.test(data.image) && data.type === "WATER" || data.type === "GAS" ) {
          return this.VerificaObjetoExistente(data);
        }
      } else {
        return "invalido" 
      }
    }

    //ainda nao fiz o bd
    async VerificaObjetoExistente(data: ImagemBody) {
      const objeto = await this.prisma.Imagem.findUnique({
        where:{
          code: data.code,
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