const conn = require('../db/conn');                         // ADICIONA MÓDULO CONEXÃO EM MONGODB

const mongo = require('mongodb');                           // IMPORTAR PARA USAR O OBJECT ID DO MONGO

class User {                                                // CRIANDO CLASSE BOOK
    constructor(name, cpf, address) {                 // CONSTRUTOR COM PROPRIEDADES PREENCHIDAS
        this.name = name;
        this.cpf = cpf;
        this.address = address;
    };

    save() {                                                            // MÉTODO PARA OPERAR COM O BANCO DE DADOS
        const user = conn.db().collection('userstore').insertOne({      // INFORMA BANCO E COLLECTION PARA INSERÇÃO
            name: this.name,                                            // SE NÃO EXISTIR, SERÁ CRIADO
            cpf: this.cpf,
            address: this.address,
        });
        return user;
    };

    static getUsers() {
        const users = conn.db().collection('userstore').find().toArray();      // ACESSA O BANCO E CONVERTE O DADO PARA ARRAY
        return users;
    };

    static async getUserById(id) {
        const user = await conn.db().collection('userstore').findOne({ _id: new mongo.ObjectId(id) });
        return user;
    };

    static async removeUserById(id) {
        await conn.db().collection('userstore').deleteOne({ _id: new mongo.ObjectId(id) });
        return;
    }

    updateUser(id) {
        conn.db().collection('userstore').updateOne({ _id: new mongo.ObjectId(id) }, {$set: this});     // OPERADOR DE FILTRAGEM SET
        return;
    };
};

module.exports = User;