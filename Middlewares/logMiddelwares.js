const fs = require ("fs")


function logMiddelware(req,res,next){
fs.writeFileSync("log.txt" , "se ingreso en la pagina" + req.url)
next()
}

module.exports = logMiddelware