const fs = require('fs')
const path = require('path')
const db = require('../../database/models')
// const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'))) 

//

const canciones = {
    // productsLanding : (req, res) => {
    //     // res.send('productos por controller')
    //     res.render('products')
    // },
    // productsId: (req, res) => {
    //     res.send('producto ' + req.params.id + ' por controllers')
    // },
    // productsPrecio: (req, res) => {
    //     res.send('producto ' + req.params.id + 'con precio ' + req.params.precio + ' por controllers')
    // },
    // productsResena: (req, res) => {
    //     res.send('producto ' + req.params.id + 'con precio ' + req.params.precio + ' y con reseña por controllers')
    // },   
    // productsDetalle: (req, res) => {
    //     const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'))) 
    //     // let idProducto = req.params.id
    //     // console.log(idProducto)
    //     // res.render('productsDetalle', {'productos': productos[idProducto-1].id})
    //     res.render('productsDetalle', {productos: productos})
    //     // console.log(productos.length)
    // },
    cancionesCreateForm: (req, res) => {
        res.render('crearCancion.ejs')
    },
    cancionesCreate: (req, res) => {
        console.log('prueba ------------------------------------   ')
        console.log(req.body.nombre)
        console.log(req.body.compositor)
        console.log(req.body.duracion)
        db.Cancion.create({
            nombre: req.body.nombre,
            compositor: req.body.compositor,
            milisegundos: req.body.duracion
        })
        res.send('Recibido')
    },
    // productsCreate: (req, res) => {
    //    if (req.file){
  
    //         let datosProducto = req.body
    //         datosProducto.imagen = req.file.filename
    //         console.log(datosProducto)
    //         productos.push(datosProducto)
    //         // Sobreescritura del json
    //         fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productos, null, 4))

    //    }
    //    else{
    //        res.render('productsVistaCreate')
    //    }

    //     // Redirección
    //     res.redirect('/products/detalle')
    // },
    // productsDetallesingle: (req, res) => {
    //     let detalle = req.params.id
    //     console.log(detalle)
    //     res.render('productsDetallesingle', {productos: productos[detalle - 1]})
    // },
    // productsVistaEdit: (req, res) => {
    //     console.log('vista')
    //     let detalle = req.params.id
    //     console.log(detalle + 'vista edit')
    //     res.render('productsEdit', {productos: productos[detalle - 1]})
    
    // },
    // pr: (req, res) => {
    //     // res.send('prueba')
    //     let detalle = req.params.id
    //     console.log(detalle)
    //     // console.log(req.params)
    //     let edicion = req.body
    //     console.log(edicion)

    //     let encontrado = []
    //     console.log('preentró')
    //     for (i = 0; i < productos.length; i++){
            
    //         if (detalle == productos[i].id ){
    //             console.log('entró')
    //             productos[i].id = detalle
    //             productos[i].nombre = edicion.name
    //             productos[i].precio = edicion.price
    //             productos[i].cantidad = edicion.quantity
    //             // console.log(productos[i])
    //             break
    //         }
    //     }

    //     fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productos, null, 4))
    //     res.redirect('/products/detalle')

    
    // },
    // productsDelete: (req, res) => {
    //     // res.send('delete')
    //     console.log('delete')
    //     let detalle = req.params.id
    //     console.log(detalle)
    //     let productosModificado = []
    //     for (i = 0; i < productos.length; i++){
            
    //         if (detalle == productos[i].id ){
    //             console.log('entró')

    //             productosModificado = productos.filter((elemento) => {
    //                 return elemento.id != detalle
    //             })

    //             break
    //         }
    //     }
    //     console.log(productosModificado)
    //     fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productosModificado, null, 4))
        
    //     res.redirect('/products/detalle')
    //     }
}

module.exports = canciones