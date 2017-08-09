var express = require('express');
var router = express.Router();
var users = require('../others/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Csodas Chat Csevegés' , message: '', rooms: users.rooms});
});

module.exports = router;
