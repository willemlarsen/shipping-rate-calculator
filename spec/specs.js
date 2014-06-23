describe('shippingRateCalculator', function() {
	it('returns a cost of 25 cents per oz of letter-size mail', function() {
		shippingRateCalculator(letter, 10).should.equal("$2.50");
	})
	it('returns a cost of 50 cents per oz of large-envelope-size mail', function () {
		shippingRateCalculator(largeEnvelope, 8).should.equal("$4.00");
	})
	it('returns a cost of 75 cents per oz of small box', function (){
		shippingRateCalculator(smallBox, 20).should.equal("$15.00");
	})
	it('returns a cost of $1.00 per oz of large box', function () {
		shippingRateCalculator(largeBox, 40).should.equal("$40.00");
	})
});