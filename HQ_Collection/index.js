const express = require('express');                     // IMPORTANDO EXPRESS PARA USAR ROTAS
const exphbs = require('express-handlebars');           // IMPOTANDO HANDLEBARS PARA TEMPLATES DO FRONT

const booksRoutes = require('./routes/booksRoutes');    // IMPORTANDO AS ROTAS
const usersRoutes = require('./routes/usersRoutes');    // IMPORTANDO AS ROTAS

const conn = require('./db/conn');                      // IMPORTANDO CONN DA PASTA DB/CONN

const app = express();                                  // INICIALIZANDO EXPRESS

app.engine('handlebars', exphbs.engine());              // CONFIGURAR HANDLEBARS COM ENGINE
app.set('view engine', 'handlebars');                   // ATRIBUTO DE VIEW ENGINE FEITO PELO HANDLEBARS

app.use( express.urlencoded({ extended: true }) );      // MIDDLEWARE PARA LER O BODY

app.use(express.json());                                // LER FORMATO JSON

app.use(express.static('public'));                      // DEFINIÇÃO DOS ASSETS COM MIDDLEWARE

app.use('/', booksRoutes);                         // CHAMA A ROTA DOS BOOKS EM /
app.use('/', usersRoutes);                         // CHAMA A ROTA DOS USERS EM /

app.listen(3000);                                       // INICIANDO EXPRESS NA PORTA 3000 PARA ACESSAR PELO NAVEGADOR