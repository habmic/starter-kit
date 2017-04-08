const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const sql = require('seriate');


initDB();


app.get('/health-check', (req, res) => {
  res.status(200).json({status: "I am alive! 2"});
});


const router = express.Router();

app.use(express.static('./public'));

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
    user: "node4ever",
    password: "pb-node123",
    host: "node-course.chtl0xl7h64i.us-east-1.rds.amazonaws.com",
    database: "course"
  });
}
