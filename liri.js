require("dotenv").config();
var request = require('request');
var keys = require('./keys.js');
var Twitter = require('twitter');
console.log("paolita");

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var wordInput = process.argv;

var operator = wordInput[2];

if (operator == "my-tweets"){
    console.log("hola");
    var params = {screen_name: 'Chootan2046', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        var tweetOut = tweets[0].text;
        console.log(tweetOut);
      }
    });

}






