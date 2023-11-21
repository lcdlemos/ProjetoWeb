const conn = require('../db/conn');                         // ADICIONA MÓDULO CONEXÃO EM MONGODB

const mongo = require('mongodb');                           // IMPORTAR PARA USAR O OBJECT ID DO MONGO

class Book {                                                // CRIANDO CLASSE BOOK
    constructor(name, author, image, price, description) {                 // CONSTRUTOR COM PROPRIEDADES PREENCHIDAS
        this.name = name;
        this.author = author;
        this.image = image;
        this.price = price;
        this.description = description;
    };

    save() {                                                            // MÉTODO PARA OPERAR COM O BANCO DE DADOS
        const book = conn.db().collection('bookstore').insertOne({      // INFORMA BANCO E COLLECTION PARA INSERÇÃO
            name: this.name,                                            // SE NÃO EXISTIR, SERÁ CRIADO
            author: this.author,
            image: this.image,
            price: this.price,
            description: this.description
        });
    
        return book;
    };

    static getBooks() {
        const books = conn.db().collection('bookstore').find().toArray();      // ACESSA O BANCO E CONVERTE O DADO PARA ARRAY
        return books;
    };

    static async getBookById(id) {
        const book = await conn.db().collection('bookstore').findOne({ _id: new mongo.ObjectId(id) });
        return book;
    };

    static async removeBookById(id) {
        await conn.db().collection('bookstore').deleteOne({ _id: new mongo.ObjectId(id) });
        return;
    }

    updateBook(id) {
        conn.db().collection('bookstore').updateOne({ _id: new mongo.ObjectId(id) }, {$set: this});     // OPERADOR DE FILTRAGEM SET
        return;
    };
};

module.exports = Book;