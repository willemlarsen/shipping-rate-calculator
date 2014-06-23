describe('shippingRateCalculator', function() {
	it('returns a cost of 25 cents per oz of letter-size mail', function() {
		shippingRateCalculator(letter, 10).should.equal("$2.50");
	})
	it('returns a cost of 50 cents per oz of large-envelope-size mail', function () {
		shippingRateCalculator(largeEnvelope, 8).should.equal("$4.00");
	})
});