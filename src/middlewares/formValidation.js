const { body } = require('express-validator')
const path = require('path')

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

module.exports = validations