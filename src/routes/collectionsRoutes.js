const express = require('express')
const router = express.Router()

const collections = require('../controllers/collectionsControllers.js')

router.get('/', collections.collectionsLanding)

module.exports = router