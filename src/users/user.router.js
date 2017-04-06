const userController = require('./user.controller');
const authMiddleware = require('./auth.middleware');

module.exports = function (router) {
  router.post('/user',
    authMiddleware,
    userController.createUser);

  router.get('/user/:id', userController.getUser);
}