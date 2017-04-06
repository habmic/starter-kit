module.exports = function (req, res, next) {
  if (req.query.isAuth === "1") {
     next();
  } else {
    // res.status(401).end();
    res.sendStatus(401);
  }
}