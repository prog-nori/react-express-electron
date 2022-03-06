var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    msg: "Hello"
  }, {
    id: 2,
    msg: "World"
  }]);
});

module.exports = router;
