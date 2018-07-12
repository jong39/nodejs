// callback function

function placeAnOrder(orderNumber) {

	console.log("Customer order: ", orderNumber);

	cookAndDeliverFood(function(){
		console.log("Dilivered food order: ", orderNumber);
	});
}

// Simulate a 4dsecond operation
function cookAndDeliverFood(callback){
	setTimeout(callback, 4000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

// this

var Johnny = {
	printName: function() {
		console.log("My name is Johnny");
		console.log(this === Johnny);
	}
};

Johnny.printName();

function doSomething() {
	console.log("\n Do something!");
	console.log(this === global);  // When no object to call, default context is global
}

doSomething();

// Module

var movies = require('./movies');
//movies.avatar();


movies.printCappie();
console.log(movies.favMovie);













