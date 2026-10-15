import { read, readFile } from "fs";
import fs from "fs/promises";

interface Tarefa { id: number; titulo: string; concluida: boolean; }

async function lerTarefas(caminho: string): Promise<Tarefa[]> {
  try {
    const dados = await fs.readFile(caminho, "utf-8");
    return JSON.parse(dados);
  } catch {
    return [];   // arquivo ainda não existe
  }
}

async function salvarTarefas(caminho: string, tarefas: Tarefa[]): Promise<void> {
  await fs.writeFile(caminho, JSON.stringify(tarefas, null, 2), "utf-8");
}

async function adicionar(caminho: string, titulo: string): Promise<Tarefa> {
  const tarefas = await lerTarefas(caminho);
  const nova: Tarefa = { id: tarefas.length + 1, titulo, concluida: false };
  tarefas.push(nova);
  await salvarTarefas(caminho, tarefas);
  return nova;
}


async function listar(caminho: string): Promise<Tarefa[]> {
  const tarefas = await lerTarefas(caminho);
  console.log(tarefas);
}


// adicionar("tarefas.json", "Estudar Código Assíncrono em TypeScript");

async function concluir(caminho: string, id: number): Promise<Tarefa[]> {
    const tarefas = await lerTarefas(caminho);
    const tarefaIDD = tarefas.find(t => t.id === id);
        if (tarefaIDD){
            tarefaIDD.concluida = true;
    await salvarTarefas(caminho, tarefas);
    return tarefas;
  }
  
}

//concluir("tarefas.json", 1);

listar("tarefas.json");

async function remover(caminho: string, id: number): Promise<Tarefa[]> {
    const tarefas = await lerTarefas(caminho);
    const tarefaIDD = tarefas.find(t => t.id === id);
        if (tarefaIDD){
            const index = tarefas.indexOf(tarefaIDD);
            tarefas.splice(index, 1);
    await salvarTarefas(caminho, tarefas);
        }
    return tarefas;
}


remover("tarefas.json", 1);


listar("tarefas.json");