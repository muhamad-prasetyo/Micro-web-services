
const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (Sequelize, DataTypes) => {
    const Media = Sequelize.define('Media', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updateAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'media'
    });

    return Media;
}