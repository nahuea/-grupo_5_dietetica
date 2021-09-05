const express = require('express')
const router = express.Router()
const multer = require('multer');
const controller = require('../controllers/registerController');
const path = require('path');
const { dirname } = require('path');
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,path.join(__dirname, '../public/img/register'))
    },
    filename :(req,file,cb) =>{
        const newFilename = "";
        cb(null,newFilename );

    
    } 
});

const usersController = require('../controllers/userController');

const upload = multer({ storage:storage });



router.get('/', usersController.index);


router.get('/register/',  usersController.create);
router.post('/register/', usersController.store);


router.get('/login/',  usersController.showLogin);
router.post('/login/', usersController.login);


router.get('/profile',  usersController.show);


router.get('/create' , controller.create)
router.post('/' , upload.single('imagen-de-usuario'), controller.store)


module.exports = router
