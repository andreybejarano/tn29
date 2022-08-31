module.exports = (sequelize, dataTypes) => {
    const alias = 'Genre';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
        ranking: dataTypes.INTEGER,
        active: dataTypes.BOOLEAN
    };

    const config = {
        tableName: 'genres',
        timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config);
    return Genre;
};