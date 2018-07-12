// Using prototype, You can add methods(functions) or properties to classes/objects

function User(){
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

var Johnny = new User();
var Sandy = new User();

Johnny.name = "Johnny";
Sandy.name = "Sandy";

Johnny.giveLife(Sandy);

console.log("Johnny life: " + Johnny.life);
console.log("Sandy life: " + Sandy.life);


// Adding methods(functions) to User object
User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted " + targetPlayer.name);
}

Johnny.uppercut(Sandy);
console.log("Johnny life: " + Johnny.life);
console.log("Sandy life: " + Sandy.life);

// Adding properties to User object
User.prototype.magic = 60;
console.log(Johnny.magic);
console.log(Sandy.magic);

