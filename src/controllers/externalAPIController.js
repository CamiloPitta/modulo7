const fs = require('fs')
const path = require('path')
const db = require('../../database/models')
// const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'))) 
const Op = db.Sequelize.Op
//
const fetch = require('node-fetch')
const { Model } = require('sequelize')

const consultas = {
    // ver: (req, res) => {
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(respuesta => respuesta.json())
    //     .then(countries => {res.json(countries)})
    // }
    ver: async (req, res) => {
        let countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json())
        res.json(countries)
    }
}

module.exports = consultas