//link routes to data sources.
//this data source holds arrays of information on friends-data

// var friendsData = require("../data/friend");



// //routing

var friendsArray = require('../data/friend.js');

module.exports = function(app){
    //GET route that displays JSON of all possible friends
    app.get('api/friend', function(req,res){
        res.json(friendList);
    });

    app.post('/api/friend', function(req,res){
        //grabs new friend scores to compare with friend in friendsArray
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        //run through all current friends in list
        for(var i = 0; i < friendsArray.length; i++){
            var scoresDiff = 0;
            //run through scores to compare friends
            for(var j = 0; j < newFriendScores.length; j++){
                scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            //push results into a scoresArray
            scoresArray.push(scoresDiff);
        }

        //after comparing friends, find the best match
        for(var i = 0; i < scoresArray.length; i++){
            if(socresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }

        //return the best match
        var bestFriend = friendsArray[bestMatch];
        res.json(bestfriend);

        //put the new submission into the friendsArray
        friendsArray.push(req.body);
    });
};