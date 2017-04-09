const Sequelize = require('sequelize');

const usersModel = Sequelize.define('users', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING
}, {
  tableName: 'roles'
});

module.exports = usersModel;