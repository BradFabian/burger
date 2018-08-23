var express = require('express');
var router = express.Router();
var burger = require('../models/burger');


// <========= Create routes  =========>
router.get('/', function (req, res) {
    res.redirect('/');
});

// <========= Index page =========>
router.get('/', function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// <========= Create new burger =========>
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
});

// <========= Devour a burger =========>
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});



module.exports = router;