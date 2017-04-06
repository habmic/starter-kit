const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const sql = require('seriate');

initDB();


app.get('/health-check', (req, res) => {
  res.status(200).json({status: "I am alive!"});
});

const router = express.Router();
router.use(bodyParse.json());
app.use('/api/v1', router);

require('./src/users/user.router')(router);

app.listen(8081, (err) => {
  if (err) {
    console.error(err);
    throw new err;
  } else {
    console.info('server is up');
  }
});

function initDB() {
  sql.setDefault({
    default: "default",
    user: "1",
    password: "1",
    host: "1",
    database: "1"
  });
}
