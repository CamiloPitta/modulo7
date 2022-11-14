module.exports = function(sequelize, dataTypes){

    let alias = 'Cancion'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        compositor: {
            type: dataTypes.STRING
        },
        milisegundos: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'canciones',
        timestamps: false
    }

    let Cancion = sequelize.define(alias, cols, config)

    Cancion.associate = function(models){
        Cancion.belongsTo(models.Album, {
            as: 'album',
            foreignKey: 'id_album'
        })
    }

    return Cancion
}