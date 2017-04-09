const Sequelize = require('sequelize');

const rolesModel = sequelize.define('roles', {
  id: Sequelize.INTEGER,
  type: Sequelize.INTEGER
}, {
  tableName: 'roles'
});

module.exports = rolesModel;