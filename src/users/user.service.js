const users = {};
const sql = require('seriate');

function addUser(user, isError = false) {
  return new Promise((resolve, reject) => {
    if (isError) {
      reject({error: 'no space'});
    }

    sql.getPlainContext()
    .step("NewUser", {
      query: `insert INTO users (user_name) VALUES ('${user.name}')`
    })
    .end(function (sets) {
      resolve(sets)
    })
    .error(function (err) {
      console.error(err);
      reject(err);
    });
  })
}

function getUser(id) {

  return new Promise((resolve, reject) => {
    sql.getPlainContext()
    .step("getUser", {
      query: `select * from users where user_id=${id}`
    })
    .end(function (sets) {
      resolve(sets.getUser)
    })
    .error(function (err) {
      console.error(err);
      reject(err);
    });  })

}

module.exports = {
  addUser,
  getUser
}