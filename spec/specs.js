describe('shippingRateCalculator', function() {
	it('returns a cost of 25 cents per oz of letter-size mail', function() {
		shippingRateCalculator(10).should.equal("$2.50");
	})
});