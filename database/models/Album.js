module.exports = function(sequelize, dataTypes){

    let alias = 'Album'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'albumes',
        timestamps: false
    }

    let Album = sequelize.define(alias, cols, config)

    Album.associate = function(models){
        Album.hasMany(models.Cancion, {
            as: 'canciones',
            foreignKey: 'id_album'
        })
    }

    return Album
}