// Importación módulos

// Path

const path = require('path')

// Express

const express = require('express')
const router = express.Router()

// Multer

  // Requerir módulo
const multer = require('multer')

//   Configurar filename y destination
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images'))
    },
    filename: ((req, file, callback) => {
        console.log(file)
        newFileName = Date.now() + path.extname(file.originalname)
        callback(null, newFileName)
    })
})

const upload = multer({storage})

// Base de datos

const db = require('../../database/models')


// Controlador productos

const canciones = require('../controllers/cancionControllers')

// router.get('/', products.productsLanding)
// router.get('/:id', products.productsId)
// router.get('/:id/:precio', products.productsPrecio)
// router.get('/:id/:precio/resena?', products.productsResena)
// router.get('/detalle', products.productsDetalle)
router.get('/create', canciones.cancionesCreateForm)
router.post('/create', canciones.cancionesCreate)
// router.post('/create', upload.single('imagenUsuario'), products.productsCreate)
// router.get('/detallesingle/:id', products.productsDetallesingle)
// router.get('/edit/:id', products.productsVistaEdit)
// router.put('/edit/:id', products.pr)
// router.delete('/delete/:id', products.productsDelete)


module.exports = router