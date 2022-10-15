const express = require('express')
const router = express.Router()
const path = require('path')

const main = require('../controllers/mainControllers.js')

// Requerir Multer
const multer = require('multer')

//   Requerir configuración Multer

const storage = require('../middlewares/multer')
const upload = multer({storage})

// Requerir Express validator

const validations = require('../middlewares/formValidation')

// Requerir guest middleware (redirección si se está logeado)

const guestMiddleware = require('../middlewares/guestMiddleware')

// Requerir authMiddleware para redirigir a login si no se está logeado

const authMiddleware = require('../middlewares/authMiddleware')

// Rutas

router.get('/', main.mainLanding)

router.get('/nosotros', main.mainNosotros)

router.get('/contacto', main.mainContacto)

// Registro
router.get('/registro', guestMiddleware, main.mainRegistro)
router.post('/registro', upload.single('imagenUsuario'), validations, main.mainRegistroCreate)

// Login
router.get('/login', guestMiddleware, main.mainLogin)
router.post('/login', main.mainProcessLogin)

// Logout

router.get('/logout', main.mainLogout)

// Usuario
router.get('/usuario', authMiddleware, main.mainUsuarioVista)

module.exports = router