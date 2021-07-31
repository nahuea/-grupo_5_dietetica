const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/register', function(request,response){
    response.sendFile(path.join(__dirname,'views/register.html'))
})
app.get('/login', function(request,response){
    response.sendFile(path.join(__dirname,'views/login.html'))
})
app.get('/producto', function(request,response){
    response.sendFile(path.join(__dirname,'views/producto.html'))
})
app.get('/carrito', function(request,response){
    response.sendFile(path.join(__dirname,'views/carrito.html'))
})
app.get('/seccion', function(request,response){
    response.sendFile(path.join(__dirname,'views/seccion.html'))
})
app.use(express.static('public'))
app.use(express.static('views'))
app.get('*', function(request, response) {
    response.send('NOT FOUND', 404)
})
app.listen(port, function() {
    console.log('Servido corriendo en corriendo en el puerto ' + port  );
})