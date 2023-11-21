const { MongoClient } = require('mongodb');         // MONGOCLIENT É UM OBJETO DENTRO DO PACOTE MONGODB PARA CONECTAR AO BANCO

const uri = "mongodb://localhost:27017/bookstore"   // PROTOCOLO DO MONGODB + IP DO SERVIDOR PARA CRIAR AO CONECTAR

const client = new MongoClient(uri);                // CLIENT PASSANDO URI PARA CONEXÃO

async function run() {                              // FUNÇÃO ASSÍNCRONA COM OBJETIVO DE CONECTAR
    try {
        await client.connect();
        console.log("CONECTANDO AO MONGO BD...");
    }   catch(err) {
        console.log(err);
    };
};

run();                                              // RUN EXECUTA PRIMEIRO GARANTINDO UMA CONEXÃO AO CLIENT QUANDO CHAMADO

module.exports = client;                            // EXPORTANDO O MÓDULO PARA SER USADO