//var movies = require('./sharedMovies');
//movies.favMovie = "The notebook";
//console.log("Johnny's fav movie is " + movies.favMovie);

var movies = require('./objFactoryMovies');
var johnnyMovies = movies();
johnnyMovies.favMovie = "Titanic 1998";
console.log("Johnny's fav movie is " + johnnyMovies.favMovie);