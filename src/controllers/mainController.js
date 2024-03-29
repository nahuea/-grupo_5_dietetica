const Products = require('../database/models')

const controller = {
	index: (req, res) => {
		const products = Products.getAll()
		let visited = products.filter(elem => elem.category === 'visited');
		let sales=  products.filter(elem => elem.category === 'in-sale');
		res.render('index', {'visited':visited,'sales':sales});
	},
	search: (req, res) => {
		//No optimizado (Case sensitive)
		let keywords = req.query.keywords
		const products = Products.searchByName(keywords)
		res.render('results',
			{
				keywords: keywords,
				products: products
			})
	},
};

module.exports = controller;
