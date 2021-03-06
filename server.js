//Packages needed for server
let express = require("express");
let exphbs = require("express-handlebars");
let mysql = require("mysql");
//port for server, heroku or local
let PORT = process.env.PORT || 3000;
//creanting instance of express for server
let app = express();
//middleware so static files, css and js will work
app.use(express.static("public"));

//middleware to parse data as json between html and database
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets up handlebars, what engine is used
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give server access to them
let routes = require("./controllers/burgerController.js");
app.use(routes);

//Prepare server to listen for requests
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
}); 