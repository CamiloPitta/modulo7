// Importación de módulos

const express = require('express')
const path = require('path')
const session = require('express-session')
const cookies = require('cookie-parser')

// Definición app

const app = express()

// EJS

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

// Carpeta public de rescursos estáticos

app.use(express.static('./public'))

// Para que funcione el método POST

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Para que funcione PUT y DELETE
// Hay que instalar method-override --> npm install method-override --save
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Session

app.use(session ({secret: 'Secreto', resave: false, saveUninitialized: false}))

// Cookies

app.use(cookies())

// Cookie middleware

const loggedCookie = require('./middlewares/loggedCookie')
app.use(loggedCookie)

// Rutas

const productos = require('./routes/productsRoutes.js')
const main = require('./routes/mainRoutes.js')
const collections = require('./routes/collectionsRoutes.js')



// Levantamiento del servidor

app.listen(3001, () => {
    console.log('3001')
})

// Vistas

app.use('/products', productos)

app.use('/', main)
// app.use('/', (req, res) =>{
//     res.send('prueba')
// })

app.use('/collections', collections)





