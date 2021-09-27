const { Router } = require('express');
const productController = require ('../controllers/productController');

router.get('/', productController.index);
router.get('/:idProducto', productController.detail);
router.get()

