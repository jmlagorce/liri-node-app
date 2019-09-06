var axios = require("axios");
var moment = require("moment");
// require(".env").config();

// var spotify = new Spotify(keys.spotify);

// var keys = require("./app.js");


if (process.argv[2] === "concert-this"){
    var artist = "";
    var nodeArgs = process.argv;
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
          artist = artist + "+" + nodeArgs[i];
        } else {
          artist += nodeArgs[i];
      
        }
      }
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(queryUrl).then(
        function(response){

            
            var m = moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm:ss a');
            console.log("Vanue name: " + response.data[0].venue.name);
            console.log("Artist: " + response.data[0].lineup[0]);
            console.log("City: " + response.data[0].venue.city);
            console.log("State: " + response.data[0].venue.region);
            console.log("Date and time: " + m);
        }
    )
};

if (process.argv[2] === "spotify-this-song"){
    var Spotify = require('node-spotify-api');
    var song = "";
    var nodeArgs = process.argv;
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
          song = song + "+" + nodeArgs[i];
        } else {
          song += nodeArgs[i];
      
        }
      }
    var spotify = new Spotify({
        id: "4738ce056b804fae82fe2cb8ae70b126",
        secret: "bba3ced1ca944ed8a0d56cd7dac19aae"
      });

      spotify.search({ type: 'track', query: song, limit: '1' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        console.log(" ");
        console.log("-------------------------------------------------------");
        console.log("Song title: " + data.tracks.items[0].name)
        console.log("Artist:" + data.tracks.items[0].album.artists[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Song Preview: " + data.tracks.items[0].album.external_urls.spotify);
        
        console.log("-------------------------------------------------------");
      });

};

if (process.argv[2] === "movie-this"){
    
    var movieName = "";
    
    var nodeArgs = process.argv;
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
          movieName = movieName + "+" + nodeArgs[i];
        } else {
          movieName += nodeArgs[i];
      
        }
      }

      var queryUrl =  "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
      console.log(queryUrl);
    axios.get(queryUrl).then(
        function(response) {
            
          console.log("---------------------------------------------------");
          console.log("Title: " + response.data.Title);
          console.log("Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.imdbRating);
         
          console.log("Country produced: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
          console.log("---------------------------------------------------");
        }).catch(function(error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("---------------Data---------------");
              console.log(error.response.data);
              console.log("---------------Status---------------");
              console.log(error.response.status);
              console.log("---------------Status---------------");
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
};

if (process.argv[2] === "do-what-it-says") {
  var Spotify = require('node-spotify-api');
  var song = "i want it that way";
  var spotify = new Spotify({
    id: "4738ce056b804fae82fe2cb8ae70b126",
    secret: "bba3ced1ca944ed8a0d56cd7dac19aae"
  });

  spotify.search({ type: 'track', query: song, limit: '1' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(" ");
    console.log("-------------------------------------------------------");
    console.log("Song title: " + data.tracks.items[0].name)
    console.log("Artist:" + data.tracks.items[0].album.artists[0].name);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("Song Preview: " + data.tracks.items[0].album.external_urls.spotify);
    
    console.log("-------------------------------------------------------");

  });

}






