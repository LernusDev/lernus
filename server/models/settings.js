'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Settings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Settings.init({
        hydrus_ip: {
            type: DataTypes.STRING,
            defaultValue: "http://localhost"
        },
        hydrus_port: {type:DataTypes.INTEGER, defaultValue: 45869},
        hydrus_api_key: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Settings',
        timestamps: false
    });
    return Settings;
};