function NumberRandomizer(){
}

NumberRandomizer.prototype.randomNumberGen = function(digitRange) {
	var decPlaces = parseInt("1" + (Array(digitRange).join("0")));
	return (Math.floor(Math.random() * decPlaces) + 1);
}

var numberRandomizer = new NumberRandomizer();