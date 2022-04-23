const Sequelize = require('sequelize')

const userModel = require('../models/user')

const dotenv = require("dotenv")

dotenv.config()
const env = process.env.NODE_ENV || 'dev';
const config = require(__dirname + '/../config/config.js')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const models = {
    User: userModel(sequelize, Sequelize.DataTypes),
}

module.exports = models;