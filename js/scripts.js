
var ounces = 0;
var Package = {
	calculateCost: function (ounces) {
		var cost = this.price * ounces;
		cost = "$" + cost.toFixed(2).toString();
		return cost;
	}
};

var letter = Object.create(Package); 
letter.price = 0.25; 

 var largeEnvelope = Object.create(Package);  
largeEnvelope.price = 0.50; 

 var smallBox = Object.create(Package); 
smallBox.price = 0.75; 

 var largeBox = Object.create(Package); 
largeBox.price = 1; 


var shippingRateCalculator = function(type, weight) {
	ounces = weight;
	return type.calculateCost(ounces);
};

var packageType = "";

$(document).ready(function() {
	$('form#shipping-rate-calculator').submit(function(event) {
		event.preventDefault();

		packageType = $('input#package-type').val();

		ounces = parseInt($('input#package-weight').val(), 10);

		$('#result').text(shippingRateCalculator(packageType, ounces));

		$('#result-column').show();

	});
});


	