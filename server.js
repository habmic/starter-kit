const express = require('express');
const bodyParse = require('body-parser');
const app = express();


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
