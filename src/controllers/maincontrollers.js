const path = require('path')
const fs = require('fs')

const { validationResult } = require('express-validator')
const { userInfo } = require('os')  // Qués es esto?.

// Modelo user

const user = require('../../models/Users')

// Bcryptjs

const bcryptjs = require('bcryptjs')

//

let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/usuarios.json')))

const main = {
    mainLanding: (req, res) => {
        // res.render('home')
        // res.cookie('testing', 'p', {maxAge: 1000*10})
        // console.log(req.cookies.testing)
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
            // usuarios.push(nuevoUsuario)
            // fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios, null, 4))
            // console.log('usuarios2', usuarios)

            // Buscar si el usuario ya está en la base de datos

            let userInDb = user.findByField('email', req.body.email)

            if (userInDb) { 
             
                let oldData = req.body
                // console.log(oldData)
                return res.render('registro', {errores: { email: { msg: 'Este email ya está registardo'}}, oldData: oldData})
            }
            


            // Uso modelo user

            let userToCreate = {
                ...req.body,
                contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
                imagenUsuario: req.file.filename 
            }

            user.createUser(userToCreate)


            res.render('bienvenida', {usuario: usuario})
        }
    },
    mainLogin: (req, res)  => {
        // console.log(req.session)
        res.render('login')
    }, 

    mainProcessLogin: (req, res) => {
        // Buscar si ya está registrado
        oldData = req.body
        let buscado = user.findByField('email', req.body.email)
        if (!buscado) {
            return res.render('login', {errores: { email: { msg: 'Este email no está registrado'}}, oldData: oldData})
        }
        else{
            let passCompare = bcryptjs.compareSync(req.body.contrasena, buscado.contrasena)
            if (passCompare){
                req.session.loggedUser = buscado
                // console.log(req.session)
                // console.log(req.body)

                // Cookie de email
                console.log(req.body)

                if (req.body.recordar){
                    console.log('entró')
                    res.cookie('email', req.body.email, {maxAge: 1000 * 30})
                    // res.cookie('email', 'p')
                }
                
                res.redirect('/usuario')
                // res.render('vistaUsuario', {dataUsuario: req.session.loggedUser})

            }
            else{
                return res.render('login', {errores: { contrasena: { msg: 'Contraseña incorrecta'}}, oldData: oldData})
            }
        }
    },

    mainUsuarioVista: (req, res) => {
        // console.log(req.cookies.userEmail)
        console.log(req.cookies.email)
        res.render('vistaUsuario', {dataUsuario: req.session.loggedUser})
    },

    mainLogout: (req, res) => {
        res.clearCookie('email')
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = main