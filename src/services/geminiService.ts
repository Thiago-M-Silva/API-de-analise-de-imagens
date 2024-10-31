import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";


class GeminiServiceClass {
  genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
  fileManager = new GoogleAIFileManager(process.env.API_KEY || "");

  //TODO: alterar aqui para que receba um objeto
  async execute() {
    const uploadResponse = await this.fileManager.uploadFile("jetpack.jpg",{
        mimeType: "image/jpeg",
        displayName: "jetpack drawing",
    })
    
  }
}

export { GeminiServiceClass };