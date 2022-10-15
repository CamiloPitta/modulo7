const fs = require ('fs')
const path = require ('path')

let prueba = fs.readFileSync(path.join(__dirname, '../src/database/usuarios.json'), 'utf-8')
// console.log(prueba)

const User = {
     
    fileName: path.join(__dirname, '../src/database/usuarios.json'),

    getData: function () {
        console.log(this.fileName)
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll: function () {
        return this.getData()
    },

    createId: function () {
        let allUsers = this.findAll()
        let lastUser = allUsers.pop()

        if (lastUser) {
            return lastUser.id + 1
        }
        else{
            return 1
        }        
    },

    findByName: function (name) {
        let allUsers = this.findAll()
        let foundUser = allUsers.find(oneUser => oneUser.nombre === name)
        return foundUser
    },

    findByField: function (field, text) {
        let allUsers = this.findAll()
        let foundUser = allUsers.find(oneUser => oneUser[field] === text)
        return foundUser
    },
    createUser: function (newUser) {
        let allUsers = this.findAll()
        newUser.id = this.createId()
        console.log(newUser)
        allUsers.push(newUser)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 4))
        return newUser
    },
    deleteUser: function (userIdToDelete) {
        let allUsers = this.findAll()
        let deleted = allUsers.filter((elemento) => {
            return elemento.id != userIdToDelete
        })
        fs.writeFileSync(this.fileName, JSON.stringify(deleted, null, 4))
        return true

    }

}

// let userPrueba = {
//     nombre: 'Holi',
//     email: 'holi@holi.com',
//     contrasena: 'chai'
// }

// console.log(User.deleteUser(10))

module.exports = User