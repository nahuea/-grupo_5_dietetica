const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');
const { dirname } = require('path');
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



router.get('/', usersController.index);


router.get('/register/',  usersController.create);
router.post('/register/', upload.single("imagen-de-usuario"), usersController.store);


router.get('/login/',  usersController.showLogin);
router.post('/login/', usersController.login);


router.get('/profile',  usersController.show);


router.get('/create' , usersController.create)
router.post('/' , upload.single('imagen-de-usuario'), controller.store)


module.exports = router
