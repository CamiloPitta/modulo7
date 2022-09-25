const fs = require('fs')
const path = require('path')
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'))) 

const products = {
    productsLanding : (req, res) => {
        // res.send('productos por controller')
        res.render('products')
    },
    productsId: (req, res) => {
        res.send('producto ' + req.params.id + ' por controllers')
    },
    productsPrecio: (req, res) => {
        res.send('producto ' + req.params.id + 'con precio ' + req.params.precio + ' por controllers')
    },
    productsResena: (req, res) => {
        res.send('producto ' + req.params.id + 'con precio ' + req.params.precio + ' y con reseña por controllers')
    },   
    productsDetalle: (req, res) => {
        let idProducto = req.params.id
        // console.log(idProducto)
        // res.render('productsDetalle', {'productos': productos[idProducto-1].id})
        res.render('productsDetalle', {productos: productos})
    }
}

module.exports = products