import { ValidateService } from "./validateService";

class ConverterBase64Service {
  constructor(){}

  imageToString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  }

  stringToImage(base64: string, filename: string, mimeType: string){
    // Decodifica a string base64 para binário
    const byteCharacters = atob(base64);

    // Converte cada caractere para o seu valor em bytes
    const byteNumbers = Array.from(byteCharacters, (char) =>
      char.charCodeAt(0)
    );
    const byteArray = new Uint8Array(byteNumbers);

    // Cria um objeto File a partir do array de bytes
    return new File([byteArray], filename, { type: mimeType });
  }
}

export { ConverterBase64Service };