const User = require('../models/User');             // IMPORTANDO MODELO DO USER

module.exports = class UserController {
    static async showUsers(req, res) {                      // REQUISIÇÃO E RESPOSTA DO MÉTODO
        const users = await User.getUsers();                // USERS ESPERA A CONSULTA AO BANCO
        res.render('users/all', {users});                   // RENDERIZAR PASSANDO DADOS DE USERS PARA VIEW
    };

    static addUser(req, res) {
        res.render('users/add');                            // RENDERIZAR PÁGINA DE ADIÇÃO DOS BOOKS
    };

    static addUserPost(req, res) {
        const name = req.body.name;                         // PEGANDO DADOS DO BODY PARA ESCREVER NO BANCO
        const cpf = req.body.cpf;
        const address = req.body.address;                       // PRÂMETROS PELO POST
        
        const user = new User(name, cpf, address);    // INSTÂNCIA DE USER COM OS DADOS NA ORDEM DO CONSTRUTOR

        user.save();                                        // SALVAR OS DADOS DO USER NO BANCO PELO MÉTODO SAVE

        res.redirect('/users');                             // REDIRECIONA PARA PÁGINA DE TODOS OS LIVROS
    };

    static async getUser(req, res) {
        const id = req.params.id;                            // PARÂMETROS PELA URL
        const user = await User.getUserById(id);
        res.render('users/user', {user});
    };

    static async removeUser(req, res) {
        const id = req.params.id;
        User.removeUserById(id);
        res.redirect('/users');
    }

    static async editUser(req, res) {
        const id = req.params.id;
        const user = await User.getUserById(id);
        res.render('users/edit', {user});
    };

    static async editUserPost(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const cpf = req.body.cpf;
        const address = req.body.address;
        
        const user = new User(name, cpf, address);

        await user.updateUser(id);

        res.redirect('/users');
    };
};