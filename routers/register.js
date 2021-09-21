const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');
const { dirname } = require('path');
const { body } = require("express-validator")
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,path.join(__dirname, '../public/img/register'))
    },
    filename :(req,file,cb) =>{
        console.log(file)
        const newFilename = "user" + Date.now() + path.extname(file.originalname);
        cb(null,newFilename );

    
    } 
});

const usersController = require('../controllers/usersController');

const upload = multer({ storage:storage });

const validateCreateForm = [
    body("usuario").notEmpty().withMessage("este campo debe de ser completado"),
    body("direccion").isEmail().notEmpty().withMessage("este campo debe de ser completado"),
    body("contraseña").isLength({min:9}).notEmpty().withMessage("este campo debe de ser completado")
];


router.get('/', usersController.index);




router.get('/register/',  usersController.create);
router.post('/register', validateCreateForm, usersController.store)
router.post('/register/', upload.single("imagen-de-usuario"), usersController.store);


router.get('/login/',  usersController.showLogin);
router.post('/login/'  , [
    check("email").isEmail(), 
    check("password").isLength({min:9}).withMessage("la contraseña debe tener al menos 9 caracteres")
],  usersController.login);



router.get('/profile',  usersController.show);


router.get('/create' , usersController.create)
router.post('/' , upload.single('imagen-de-usuario'), usersController.store)


module.exports = router
