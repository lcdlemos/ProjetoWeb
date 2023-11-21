const express = require('express');                                 // IMPORTANDO EXPRESS PARA ROTAS
const router = express.Router();                                    // INVOCA O ROUTER DO EXPRESS

const UserController = require('../controllers/UserController');    // IMPORTA O USER CONTROLLER

router.get('/users/add', UserController.addUser);                         // ROTA DE ADIÇÃO DOS USERS CADASTRADOS
router.post('/users/add', UserController.addUserPost);                    // ROTA DE ADIÇÃO DOS USERS CADASTRADOS

router.post('/users/remove/:id', UserController.removeUser);              // ROTA DE REMOÇÃO DO USER ÚNICO

router.post('/users/edit', UserController.editUserPost);                    // ROTA DE EDIÇÃO DO USER ÚNICO
router.get('/users/edit/:id', UserController.editUser);                    // ROTA DE EDIÇÃO DO USER ÚNICO

router.get('/users/:id', UserController.getUser);                         // ROTA DE EXIBIÇÃO DO USER ÚNICO

router.get('/users', UserController.showUsers);                          // ROTA DE EXIBIÇÃO DOS USERS CADASTRADOS

module.exports = router;