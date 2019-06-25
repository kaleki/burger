var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burger", function(req,res){
    burger.insertOne([req.body.burger_name], function(result){
        res.json({id: result.insertId});
    });
  });

  router.put("/api/burger/:id", function(req,res){
      var devoured = "id = " + req.params.id;
      console.log("devoured", devoured);
      burger.updateOne(req.params.id, function(result){
        res.status(200).end();
      })
  })

module.exports = router;