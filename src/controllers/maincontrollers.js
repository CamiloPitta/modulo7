const path = require('path')
const fs = require('fs')

const { validationResult } = require('express-validator')

let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/usuarios.json')))

const main = {
    mainLanding: (req, res) => {
        // res.render('home')
        res.render('home')
    },
    mainNosotros: (req, res) => {
        res.send('nosotros por controllers')
    },
    mainContacto: (req, res) => {
        res.send('contacto por controllers')
    },
    mainRegistro: (req, res) => {
        res.render('registro')
    },
    mainRegistroCreate: (req, res) => {
        // console.log('usuarios1', usuarios)
        let usuario = req.body.nombre
        // console.log(usuario)
        let nuevoUsuario = req.body

        const resultValidation = validationResult(req)
        // res.send(resultValidation)
        console.log(resultValidation.errors.length)
        if (resultValidation.errors.length > 0){

            console.log('errores')
            console.log(resultValidation)
            let errores = resultValidation.mapped()
            console.log(errores)
            let oldData = req.body
            // console.log(oldData)
            res.render('registro', {errores: errores, oldData: oldData})
        }
        else{
            console.log('no errores')
            usuarios.push(nuevoUsuario)
            fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios, null, 4))
            console.log('usuarios2', usuarios)

            res.render('bienvenida', {usuario: usuario})
        }
    },
    mainLogin: (req, res)  => {
        res.render('login')
    }
}

module.exports = main