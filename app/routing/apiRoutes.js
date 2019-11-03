//link routes to data sources.
//this data source holds arrays of information on friends-data

// var friendsData = require("../data/friend");



// //routing

module.exports = function(app) {
    
    app.get("/api/home", function(req, res){
        res.json(friendsData);
    });
}