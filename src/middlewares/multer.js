const path = require('path')

// Requierir Multer

const multer = require('multer')

//   Configurar Multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images'))
    },
    filename: ((req, file, callback) => {
        console.log(file)
        newFileName = Date.now() + path.extname(file.originalname)
        callback(null, newFileName)
    })

})
    module.exports = storage