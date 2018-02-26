describe("sample test suite", function() {

	beforeEach(function() {});

	it("add ssimple", function() {
		$.import("calc", "calculator");
		var calc = $.calc.calculator;
		var sum= calc.add(1,1);
		expect(sum).toBe(2);
	});
});