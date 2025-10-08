// objeto cliente do mongodb
const { MongoClient } = require("mongodb");
// string de conexão
const url = "mongodb+srv://usrTarefas:abcd1234@cluster0.gbexn9l.mongodb.net/";


const cliente = new MongoClient(url);

async function conecta() {
    try {
        await cliente.connect();
        return cliente.db("agenda");
    } catch (e) {
        console.log(
            "Erro ao conectar no MongoDB!", 
            e.message);
    }
}

module.exports = conecta;