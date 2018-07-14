//var movies = require('./sharedMovies');
//movies.favMovie = "The notebook 2";
//console.log("Sandy's fav movie is " + movies.favMovie);

var movies = require('./objFactoryMovies');
var sandyMovies = movies();
console.log("Sandy's fav movie is " + sandyMovies.favMovie);