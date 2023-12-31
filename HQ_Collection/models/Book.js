const conn = require('../db/conn');                         // ADICIONA MÓDULO CONEXÃO EM MONGODB

const mongo = require('mongodb');                           // IMPORTAR PARA USAR O OBJECT ID DO MONGO

class Book {                                                // CRIANDO CLASSE BOOK
    constructor(name, publisher, image, price, description) {                 // CONSTRUTOR COM PROPRIEDADES PREENCHIDAS
        this.name = name;
        this.publisher = publisher;
        this.image = image;
        this.price = price;
        this.description = description;
    };

    save() {                                                            // MÉTODO PARA OPERAR COM O BANCO DE DADOS
        const book = conn.db().collection('hq').insertOne({      // INFORMA BANCO E COLLECTION PARA INSERÇÃO
            name: this.name,                                            // SE NÃO EXISTIR, SERÁ CRIADO
            publisher: this.publisher,
            image: this.image,
            price: this.price,
            description: this.description
        });
    
        return book;
    };

    static getBooks() {
        const books = conn.db().collection('hq').find().toArray();      // ACESSA O BANCO E CONVERTE O DADO PARA ARRAY
        return books;
    };

    static async getBookById(id) {
        const book = await conn.db().collection('hq').findOne({ _id: new mongo.ObjectId(id) });
        return book;
    };

    static async removeBookById(id) {
        await conn.db().collection('hq').deleteOne({ _id: new mongo.ObjectId(id) });
        return;
    }

    updateBook(id) {
        conn.db().collection('hq').updateOne({ _id: new mongo.ObjectId(id) }, {$set: this});     // OPERADOR DE FILTRAGEM SET
        return;
    };
};

module.exports = Book;