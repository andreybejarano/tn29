module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        genre_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'movies',
        // esta propiedad tiene q ser true en caso del soft delete
        timestamps: false,
        // Estos campos deben ir para el soft delete y ademas debe estar creado el campo 
        // ```deletedAt TIMESTAMP DEFAULT NULL```
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // paranoid: true,
    };
    const Movie = sequelize.define(alias, cols, config)

    return Movie
}