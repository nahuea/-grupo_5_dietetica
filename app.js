const express = require('express')
const app = express()
const routes = require('./routers/register')
const multer = require('multer');
const port = 3000;
const path = require('path')
var logMiddelware = require('./Middlewares/logMiddelwares')
const session = require('express-session')


app.use(routes)
app.use(logMiddelware)
app.use(session({secret:"algo"}))

const controller = require('../controllers/registerController');
app.set('view engine' , 'ejs');
app.set('views' , _dirname  + '/views');
app.get('/', function(req, res) {
    res.render(path.join(__dirname, 'views/index.ejs'))
})
app.get('/register', function(req,res){
    res.render(path.join(__dirname,'views/register.html'))
})
app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname,'views/login.html'))
})
app.get('/productDetail', function(req, res){
    res.sendFile(path.join(__dirname,'views/productDetail.html'))
})
app.get('/productCart', function(req,res){
    rese.sendFile(path.join(__dirname,'views/productCart.html'))
})
app.get('/seccion', function(req,res){
    res.sendFile(path.join(__dirname,'views/seccion.html'))
})
app.use(express.static('public'))
app.use(express.static('views'))
app.get('*', function(request, response) {
    response.send('NOT FOUND', 404)
})
app.listen(port, ()=> {
    console.log('Servidor corriendo en http://localhost:' + port);
})