// Importación módulos

const express = require('express')

const router = express.Router()

const products = require('../controllers/productsControllers')

router.get('/', products.productsLanding)
// router.get('/:id', products.productsId)
// router.get('/:id/:precio', products.productsPrecio)
// router.get('/:id/:precio/resena?', products.productsResena)
router.get('/detalle', products.productsDetalle)
router.get('/create', products.productsVistaCreate)
router.post('/create', products.productsCreate)
router.get('/detallesingle/:id', products.productsDetallesingle)
router.get('/edit/:id', products.productsVistaEdit)
router.put('/edit/:id', products.pr)
// router.put('/delete/:id', products.productsDelete)


module.exports = router