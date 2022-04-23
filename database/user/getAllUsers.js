const {sequelize} = require('../../models/index')
const {User} = require('../getModels')

function getAllUsers() {
  console.log(User)
  return User.findAll();
}

module.exports = {getAllUsers};