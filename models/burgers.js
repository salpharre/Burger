//Import orm module to create functions that will interact with database
let orm = require("../config/orm.js");

/*Are a methods to be used in routes in burgerController.js*/
let burger = {
    /*is a method with a function that calls the "all" function from orm.js and passes table "burgers" 
    into function as an argument while cb argument will call back this method in burgerController.js
    function(res){cb(res)} calls the function in orm.js*/
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    /*Is a method holding a function that calls the create method from orm.js,
    passing database "burgers" table as an argument for table argument from orm.js function.
    function's arguments cols and vals are to be filled in with values passed via routes in burgerController.js
    when create method is called. cb argument will call back this method in burgerController.js
    function(res){cb(res)} calls the function in orm.js*/
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        })
    },
    /*Is a method holding a function that calls the update method from orm.js,
    passing database "burgers" table as an argument for the table argument from orm.js function.
    Function's arguments objColVals and condition are to be filled in with values passed via routes in burgerController.js
    cb argument will call back this method in burgerController.js
    function(res){cb(res)} calls the function in orm.js*/
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
}

//Export burger object containing database functions to controller, burgerController.js
module.exports = burger;