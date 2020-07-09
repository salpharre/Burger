//Require express package for routes
const express = require("express");

//connects this express with the express instance in server.js
let router = express.Router();

//Import model to use the database functions
let burger = require("../models/burger.js");

//Route for root, index.html, grabs data from burgers table and renders index.handlebars
router.get("/", function(req, res) {
    burger.all(function(data) {
        const brgObject = {
            burgers: data
        };
        console.log(brgObject);
        res.render("index", brgObject);
    });
});

//Route that adds a new burger(name) with devoured as false
router.post("/api/burgers", function(req, res) {
    //array of cols and values are fed into database request
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        //database returns json response of id that was created for new burger when added
        res.json({ id: result.insertId });
    });
});

//Route that updates a burger from devoured (false) to eaten (devoured=true) using the id
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                //if no rows were changed, then the id must not exist, so 404 error
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

//Export routes for server.js to use
module.exports = router;
