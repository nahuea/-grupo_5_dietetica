const controller = {}


controller.register =(req, res) =>{
    res.render(path.join(__dirname, 'views/register.ejs'))
}

module.exports = controller