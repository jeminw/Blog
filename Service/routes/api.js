var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('api');
});

router.get('/post', function(req, res, next) {
  res.send('api-post');
});

router.get('/get', function(req, res, next) {
  res.send('api-get');
});

module.exports = router;
