
var ounces = 0;
var Package = {
	calculateCost: function (ounces) {
		var cost = this.price * ounces;
		cost = "$" + cost.toFixed(2).toString();
		return cost;
	}
}

var letter = Object.create(Package);
letter.price = .25;

var largeEnvelope = Object.create(Package); 
largeEnvelope.price = .50;

var smallBox = Object.create(Package);
smallBox.price = .75;

var largeBox = Object.create(Package);
largeBox.price = 1;


var shippingRateCalculator = function(type, weight) {
	ounces = weight;
	return type.calculateCost(ounces);
};
