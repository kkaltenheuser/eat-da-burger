// REQUIRE express
var express = require("express");

// SET-UP var for router
var router = express.Router();

// IMPORT the models directory to use its database
var burger = require("../models/burger.js");

// CREATA all routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST
router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    // set status for table
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function (result) {
      // Send back Id
      res.json({ id: result.insertId });
    }
  );
});

// PUT
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  // condition of to be consumed or already consumed/devoured
  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID is not "true", so return a 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// DELETE
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID is not "true", so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// EXPORT routes for server
module.exports = router;
