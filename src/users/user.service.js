const users = {};

function addUser(user, isError = false) {
  return new Promise((resolve, reject) => {
    if (isError) {
      reject({error: 'no space'});
    }

    users[user.id] = user;
    resolve();
  })
}

function getUser(id) {

  return new Promise((resolve, reject) => {
    resolve(users[id]);
  })

}

module.exports = {
  addUser,
  getUser
}