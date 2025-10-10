const readline = require("readline-sync"); //npm install readline-sync
const controlador = require("./controlador");

async function menu() {
  console.log("1- Adicionar contato");
  console.log("2- Buscar contato");
  console.log("3- Atualizar contato");
  console.log("4- Remover contato");
  console.log("5- Sair");
}

async function escolherOpcao(opcao) {
  switch (parseInt(opcao)) {
    case 1: {
      const nome = readline.question("Informe o nome da tarefa: ");
      await controlador.adicionarTarefa(nome);
      break;
    }
    case 2: {
      const nome = readline.question("Informe o nome da tarefa: ");
      await controlador.buscarTarefa(nome);
      break;
    }
    case 3: {
      const nome0 = readline.question(
        "Informe o nome da tarefa a ser alterada: "
      );
      const nome = readline.question("Informe o novo nome da tarefa: ");
      const concluida = readline.question("Informe o estado da tarefa: ");
      await controlador.atualizarTarefa(nome0, nome, concluida);
      break;
    }
    case 4: {
      const nome = readline.question("Informe o nome da tarefa: ");
      await controlador.removerTarefa(nome);
      break;
    }
    case 5:
      process.exit(0);
  }
}

async function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com sua opcao: ");
    escolherOpcao(opcao);
  }
}

main();

