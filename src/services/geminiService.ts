import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { ImagemBody } from "../interfaces/imageInterface";
import { ConverterBase64Service } from "./converterBase64Service";


class GeminiServiceClass {
  genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
  fileManager = new GoogleAIFileManager(process.env.API_KEY || "");
  model = this.genAI.getGenerativeModel({ model: "gemini-1.5" });
  conversor = new ConverterBase64Service();

  async extrairValImagem(imagem: ImagemBody) {
    let file = this.conversor.stringToImage(imagem.image, "teste", "image/jpeg");
    
    //ta certo isso?
    const uploadResponse = await this.fileManager.uploadFile(file.name,{
        mimeType: "image/jpeg",
        displayName: "jetpack drawing",
    })
   
    // const getResponse = await this.fileManager.getFile(
    //   uploadResponse.file.name
    // );

    const result = await this.model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri,
        },
      },
      { text: "Extract the values in this picture" },
    ]);

    return result;
  }
}

export { GeminiServiceClass };