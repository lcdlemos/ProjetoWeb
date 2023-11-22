const conn = require('../db/conn');                         // ADICIONA MÓDULO CONEXÃO EM MONGODB

const mongo = require('mongodb');                           // IMPORTAR PARA USAR O OBJECT ID DO MONGO

class User {                                                // CRIANDO CLASSE BOOK
    constructor(name, login, password) {                 // CONSTRUTOR COM PROPRIEDADES PREENCHIDAS
        this.name = name;
        this.login = login;
        this.password = password;
    };

    save() {                                                            // MÉTODO PARA OPERAR COM O BANCO DE DADOS
        const user = conn.db().collection('user').insertOne({      // INFORMA BANCO E COLLECTION PARA INSERÇÃO
            name: this.name,                                            // SE NÃO EXISTIR, SERÁ CRIADO
            login: this.login,
            password: this.password,
        });
        return user;
    };

    static getUsers() {
        const users = conn.db().collection('user').find().toArray();      // ACESSA O BANCO E CONVERTE O DADO PARA ARRAY
        return users;
    };

    static async getUserById(id) {
        const user = await conn.db().collection('user').findOne({ _id: new mongo.ObjectId(id) });
        return user;
    };

    static async removeUserById(id) {
        await conn.db().collection('user').deleteOne({ _id: new mongo.ObjectId(id) });
        return;
    }

    updateUser(id) {
        conn.db().collection('user').updateOne({ _id: new mongo.ObjectId(id) }, {$set: this});     // OPERADOR DE FILTRAGEM SET
        return;
    };
};

module.exports = User;