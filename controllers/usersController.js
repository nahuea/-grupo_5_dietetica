const Users = require('../models/users.js');
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs');


const controller = {

    index: (req, res) => {
        const users_copy = Users.getAll()
        res.render('users', {'users': products_copy});
    },
    show: (req, res) =>{
        let userId = req.session.userId;
        let user = Users.findById(userId)
        res.render('user-data',{
            user: user,
        })
    },
    create: (req, res) => {
        res.render('register');
    },
    store: (req, res)   => {
        if(req.file) {let users_copy = Users.getAll().map(product => product);
            let UserId = uuidv4();
            user.image = req.file.filename
        
            const encrypt_pass = bcryptjs.hashSync(req.body.password, 10)
            const user = {
                id: UserId,
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                password: encrypt_pass,
            }
            users_copy.push(user)
            Users.modifiedAll(users_copy);
            res.redirect('/');
        } else {
            res.render('register');
        }
        
       
    },
    showLogin: (req, res)=>{
        res.render('login');
    },
    login: (req, res)=>{
        let user_email = req.body.email;
        const user = Users.findByEmail(user_email);
        console.log(user)
        if(user){
            if(bcryptjs.compareSync(req.body.password, user.password)){
                req.session.userId = user.id;
                res.render('exitoso');
            }else{
                res.render('login',{"errors": 'La combinacion de email y contraseña no es valido'});
            }
        }else{
            res.render('login',{"errors": 'El email no existe.'});
        }


    }


}

module.exports = controller;