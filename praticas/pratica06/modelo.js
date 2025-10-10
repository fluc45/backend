const conectarDB = require("./database");

class Tarefa {
  collection = conectarDB();
  constructor(nome, concluida) {
    this.db = null;
    this.collection = null;
    this.nome = nome;
    this.concluida = concluida;
    this.id = null;
  }
  async init() {
    this.db = await conectarDB();
    this.collection = db.collection("tarefas");
  }
  async inserir() {
    const collection = await collection.insertOne({
      nome: this.nome,
      concluida: this.concluida,
    });
    this.id = resultado.insertedId;
    resultado = collection;
  }

  async alterar() {
    collection.updateOne(
      { _id: this.id },
      { $set: { nome: this.nome, concluida: this.concluida } }
    );
  }
  async deletar() {
    collection.deleteOne({ nome: this.nome });
  }

  async buscar() {
    const resultado = collection.findOne({ nome: this.nome });
    this.nome = resultado.nome;
    this.concluida = resultado.concluida;
  }
}

module.exports = Tarefa;
