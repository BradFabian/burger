var express = require("express");

var router = express.Router();

// Import the model  to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger_name: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;