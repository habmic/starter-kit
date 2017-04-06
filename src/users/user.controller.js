const userService = require('./user.service');

function getUser(req, res) {
  if (req.params.id) {
    userService.getUser(req.params.id)
    .then((user) => {
      res.status(200).json({user: user});
    })

  } else {
    res.status(400).json({err: 'No user id'});
  }
}

function createUser(req, res) {
  let isError = req.query.isError || false;
  userService.addUser(req.body, isError).then(() => {
    res.status(200).json({status: 'created'});
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);

  });
}

module.exports = {
  getUser,
  createUser
};