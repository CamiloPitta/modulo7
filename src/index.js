// Importación de módulos

const express = require('express')

const app = express()

// EJS

app.set('view engine', 'ejs')
app.set('views', '../views')

// Carpeta public de rescursos estáticos

app.use(express.static('./public'))

// Rutas

const productos = require('./routes/products.js')
const main = require('./routes/main.js')
const collections = require('./routes/collections.js')


// Levantamiento del servidor

app.listen(3000, () => {
    console.log('3000')
})

// Vistas

app.use('/products', productos)

app.use('/', main)

app.use('/collections', collections)






// let series = [

//     {
//         id: 1,
//         nombre: 'e'
//     },
//     {
//         id: 2,
//         nombre: 'q'
//     }
    
// ]

// function imp(x, numero) {
//     let presente = false
//     x.forEach((w) => {
        
//         if (numero == w.id){
//            presente = w
//         }
//         else{
//             // console.log('paila')
//         }
        
//         return presente
//     })
//     console.log(presente)
//     // console.log(x)
// }

// prueba = 1
// imp(series, prueba)

// // console.log(series[0].id)