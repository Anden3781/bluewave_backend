const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Contact = sequelize.define('contact', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail:true
        }
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Contact;