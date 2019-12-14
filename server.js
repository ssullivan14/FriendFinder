
//npm packages
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

// //tells node that we're creating an express server
var app = express();
var PORT = process.env.PORT || 8080;

// //setting up the express app to handle the data parsing
// app.use(bodyParser.urlendcoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// points our server to a series of route files
// the routes give the server a "map" of how to respond when users visit or request data
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Code to start server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

