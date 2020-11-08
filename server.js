// dependencies

// designate use of dotenv
require("dotenv").config();

// designate use of express
var express = require("express");

// Set-up + initiate PORT
var PORT = process.env.PORT || 3000;

// Initiate express
var app = express();

// static content for the app from the "public" directory
app.use(express.static("public"));

// Parse request as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars - express
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import and give the server access to routes
var routes = require("./controllers/burgerControllers");

// use all routes
app.use(routes);

// listen to port and respond
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
