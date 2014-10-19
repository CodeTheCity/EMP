/*
* check the default selfengine sections are in order
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: The layout of GP practrice and people");

casper.start(baseUrl, function() {
	this.test.comment('holder for comparision results');
	casper.test.assertExists('.address', 'the element exists');

});

casper.then(function() {
	this.test.comment('holder per medial practice');
	casper.test.assertExists('.distance', 'the element exists');
	
});

casper.run(function() {

	this.test.done();

});