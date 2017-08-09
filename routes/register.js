var express = require('express');
var users = require('../others/users');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var username = req.body.username;
    var szoba = req.body.szoba;
    users.username=username;
    users.joinroom=szoba;
    var a= users.rooms.indexOf(szoba);
    if(a==-1) {
        users.rooms.push(szoba);
    }
    res.redirect('/welcome');
});

module.exports = router;
