import fs from "fs/promises";

async function log(message: string): Promise<void>{
    const date = new Date();
    await fs.appendFile("app.log", message + date + "\n", "utf-8");
  
}


async function lerLogs(): Promise<string[]> {
    const conteudo = await fs.readFile("app.log", "utf-8");

    return conteudo.split("\n");
    
}

async function logger() {
    await log("[INFO]Usuário Rubens testou a função log()");
    const logs = await lerLogs();
    console.log(logs);
}

logger();