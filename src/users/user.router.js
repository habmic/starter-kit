const userController = require('./user.controller');

module.exports = function (router) {
  router.post('/user', userController.createUser);
  router.get('/user/:id', userController.getUser);
}