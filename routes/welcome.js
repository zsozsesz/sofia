var express = require('express');
var router = express.Router();
var users = require('../others/users');
/* GET home page. */
router.get('/', function(req, res, next) {
    if(!users.username){
        res.render('index', { message: 'Be kell jelentkezned',title: 'Csodas chat cseveges' ,rooms: users.rooms});
    }
    else {
        res.render('welcome', {title: 'Csodas Chat Csevegés'});
    }
});

module.exports = router;
