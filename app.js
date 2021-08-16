const express = require('express')
const app = express()
const port = 3000;
const path = require('path')
app.set('view engine' , 'ejs');
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/register', function(request,response){
    response.sendFile(path.join(__dirname,'views/register.html'))
})
app.get('/login', function(request,response){
    response.sendFile(path.join(__dirname,'views/login.html'))
})
app.get('/productDetail', function(request,response){
    response.sendFile(path.join(__dirname,'views/productDetail.html'))
})
app.get('/productCart', function(request,response){
    response.sendFile(path.join(__dirname,'views/productCart.html'))
})
app.get('/seccion', function(request,response){
    response.sendFile(path.join(__dirname,'views/seccion.ejs'))
})
app.use(express.static('public'))
app.use(express.static('views'))
app.get('*', function(request, response) {
    response.send('NOT FOUND', 404)
})
app.listen(port, ()=> {
    console.log('Servidor corriendo en http://localhost:' + port);
})