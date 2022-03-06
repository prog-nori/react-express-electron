var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "Taro"
  }, {
    id: 2,
    name: "Hanako"
  }]);
});

module.exports = router;
