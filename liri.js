require("dotenv").config();


var Twitter = require('twitter');


//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var wordInput = process.argv;

var operator = wordInput[2];

if (operator == "my tweets"){
    console.log("hola");s


}



var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


