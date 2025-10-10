const { MongoClient } = require("mongodb");
const url = "mongodb+srv://usrTarefas:abcd1234@cluster0.gbexn9l.mongodb.net/";

const cliente = new MongoClient(url);

async function conectarDB() {
  try {
    await cliente.connect();
    return cliente.db("agenda");
  } catch (e) {
    console.log("Erro ao conectar no MongoDB!", e.message);
  }
}

module.exports =  conectarDB ;
