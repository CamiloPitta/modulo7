const express = require('express')
const { Model } = require('sequelize')
const router = express.Router()

const APIs = require('../controllers/externalAPIController')

router.get('/countries', APIs.ver)

module.exports = router