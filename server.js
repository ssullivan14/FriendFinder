//npm packages
var express = require("express");
var path = require("path");

// //tells node that we're creating an express server
var app = express();
var PORT = 8080;

// //setting up the express app to handle the data parsing
// app.use(express.urlendcoded({extended: true}));
app.use(express.json());

//points our server to a series of route files
//the routes give the server a "map" of how to respond when users visit or request data
// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

//Code to start server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
