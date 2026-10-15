import { Utf8Stream } from "fs";
import fs from "fs/promises";

async function buscarComSeguranca(caminho: string): Promise<string | null> { //esta com erro de undefined mas funcionou
    try {
        const arquivo = await fs.readFile(caminho, "utf-8");
        console.log(arquivo);
    } catch (naoEncontrado) {
    return null;
  }
}

buscarComSeguranca("app.log"); //aqui printou o arquivo no terminal

buscarComSeguranca("Adasda.asdas") //aqui não printa nada no terminal