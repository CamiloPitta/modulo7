const express = require('express')
const router = express.Router()
const path = require('path')

const main = require('../controllers/mainControllers.js')

// Requerir Multer
const multer = require('multer')

//   Configurar Multer
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

// Express validator

const { body } = require('express-validator')

let validations = [
    body('nombre').notEmpty().withMessage('Por favor introduce un nombre'),
    body('email').notEmpty().withMessage('Por favor introduce un email').bail()
                 .isEmail().withMessage('Introduce un formato de correo válido'),
    body('contrasena').notEmpty().withMessage('Por favor introduce una contraseña'),
    body('imagenUsuario').custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif']

        if (!file) {
            throw new Error('Tienes que subir una imagen')
        }
        else{
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones permitidas son .jpg .png .gif')
            } 

        }
        return true
    })
]


// Rutas

router.get('/', main.mainLanding)

router.get('/nosotros', main.mainNosotros)

router.get('/contacto', main.mainContacto)

// Registro
router.get('/registro', main.mainRegistro)
router.post('/registro', upload.single('imagenUsuario'), validations, main.mainRegistroCreate)

// Login
router.get('/login', main.mainLogin)

module.exports = router