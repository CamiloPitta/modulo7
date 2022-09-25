// Importación módulos

const express = require('express')

const router = express.Router()

const products = require('../controllers/productsControllers')

router.get('/', products.productsLanding)
// router.get('/:id', products.productsId)
// router.get('/:id/:precio', products.productsPrecio)
// router.get('/:id/:precio/resena?', products.productsResena)
router.get('/detalle', products.productsDetalle)



module.exports = router