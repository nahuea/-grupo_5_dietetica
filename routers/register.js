const express = require('express')
const router = express.Router()
const multer = require('multer');
const controller = require('../controllers/registerController');
const storage = multer.diskStorage


router.get('/', function(req, res) {
    res.render(path.join(__dirname, 'views/register.ejs'))
})

router.get('/create' , controller.create)
router.post('/' , controller.store)


module.exports = router
