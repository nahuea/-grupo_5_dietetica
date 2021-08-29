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

const upload = multer({ storage:storage });


router.get('/',controller.register) 

router.get('/create' , controller.create)
router.post('/' , upload.single('imagen-de-usuario'), controller.store)


module.exports = router
