describe('shippingRateCalculator', function() {
	it('returns a cost of 25 cents per oz of letter-size mail', function() {
		shippingRateCalculator(letter, 10).should.equal("$2.50");
	})
});