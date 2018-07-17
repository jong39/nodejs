// fs ***********************************

var fs = require('fs');
//fs.writeFileSync("Corn.txt", "This is a test. Please ignore...");
console.log(fs.readFileSync("Corn.txt").toString());


// path **********************************

var path = require('path');
var websiteHome = "Desktop/jchoi//vancouver/index.html";
var websiteAbout = "Desktop/jchoi//vancouver/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

