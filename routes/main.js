const express = require('express')
const router = express.Router()

const main = require('../controllers/mainControllers.js')

router.get('/', main.mainLanding)

router.get('/nosotros', main.mainNosotros)

router.get('/contacto', main.mainContacto)

module.exports = router