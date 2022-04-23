const {sequelize} = require('../../models/index')
const {User} = require('../getModels')

function getAllUsers() {
  return User.findAll();
}

module.exports = {getAllUsers};