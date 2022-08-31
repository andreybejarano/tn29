module.exports = (sequelize, dataTypes) => {
    const alias = 'Movie';

    const cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: dataTypes.STRING,
        rating: dataTypes.DECIMAL(3, 1),
        awards: dataTypes.INTEGER,
        length: dataTypes.INTEGER,
        genre_id: dataTypes.INTEGER,
        release_date: dataTypes.DATE
    };

    const config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias, cols, config);
    return Movie;
};