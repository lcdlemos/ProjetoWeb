const express = require('express');                                 // IMPORTANDO EXPRESS PARA ROTAS
const router = express.Router();                                    // INVOCA O ROUTER DO EXPRESS

const BookController = require('../controllers/BookController');    // IMPORTA O BOOK CONTROLLER

router.get('/books/add', BookController.addBook);                         // ROTA DE ADIÇÃO DOS BOOKS CADASTRADOS
router.post('/books/add', BookController.addBookPost);                    // ROTA DE ADIÇÃO DOS BOOKS CADASTRADOS

router.post('/books/remove/:id', BookController.removeBook);              // ROTA DE REMOÇÃO DO BOOK ÚNICO

router.post('/books/edit', BookController.editBookPost);                    // ROTA DE EDIÇÃO DO BOOK ÚNICO
router.get('/books/edit/:id', BookController.editBook);                    // ROTA DE EDIÇÃO DO BOOK ÚNICO

router.get('/books/:id', BookController.getBook);                         // ROTA DE EXIBIÇÃO DO BOOK ÚNICO

router.get('/books', BookController.showBooks);                          // ROTA DE EXIBIÇÃO DOS BOOKS CADASTRADOS

router.get('/', BookController.homeBooks);


module.exports = router;