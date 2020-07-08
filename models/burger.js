//Import orm module to create functions that will interact with database
const orm = require("../config/orm.js");

const burger = {
    //
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {

    },
    update: function(objColVals, condition, cb) {

    }
}

//Export burger object containing database functions to controller, burgerController.js
module.exports = burger;