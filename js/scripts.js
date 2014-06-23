

var shippingRateCalculator = function(weight) {
	var cost = weight * .25;
	cost = "$" + cost.toFixed(2).toString();
	return cost
}