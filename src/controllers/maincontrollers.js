const main = {
    mainLanding: (req, res) => {
        res.send('home por controllers')
    },
    mainNosotros: (req, res) => {
        res.send('nosotros por controllers')
    },
    mainContacto: (req, res) => {
        res.send('contacto por controllers')
    }
}

module.exports = main