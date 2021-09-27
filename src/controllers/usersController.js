const {validationResult} = require("express-validator");
const Users = require('../models/users.js');
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs');
const user = require("../database/models/users.js");


const controller = {

    index: (req, res) => {
        const users_copy = Users.getAll()
        res.render('users', {'users': users_copy});
    },
    register: (req,res) =>{
        return res.render("userRegisterForm")
    },
    show: (req, res) =>{
        let userId = req.session.userId;
        let user = Users.findById(userId)
        res.render('user-data',{
            user: user,
        })
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render("userRegisterForm" , {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = user.findByEmail("email", req.body.email)

        if(userInDB){
            return res.render("userRegisterForm" , {
                errors: {
                    email:{
                        msg:"el email que ingreso ya esta registrado"
                    }
                },
                oldData: req.body
            });
        }
        return res.send(userInDB);

        let userToCreate = {
            ...req.body,
            password:bcryptjs.hashSync(req.body.password,10),
            avatar: req.file.filename
        }
        user.create(userToCreate);
        return res.redirect("/user/login");
    },
    store: (req, res)   => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
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
        
       
    }else{
        res.render('register' , {errors:errors.array()});
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


    },
    profile: (req,res) =>{
        return res.render("userProfie")
    },
    logout:(req,res) =>{
        req.session.destroy();
        res.redirect('/');
)
    }


}

module.exports = controller;