

const products = {
    productsLanding : (req, res) => {
        res.send('productos por controller')
    },
    productsId: (req, res) => {
        res.send('producto ' + req.params.id + ' por controllers')
    },
    productsPrecio: (req, res) => {
        res.send('producto ' + req.params.id + 'con precio ' + req.params.precio + ' por controllers')
    },
    productsResena: (req, res) => {
        res.send('producto ' + req.params.id + 'con precio ' + req.params.precio + ' y con reseña por controllers')
    }
}

module.exports = products