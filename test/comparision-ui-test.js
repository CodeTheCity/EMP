/*
* check the default selfengine sections are in order
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: The layout of GP practrice and people");

casper.start(baseUrl, function() {
	this.test.comment('holder for comparision results');
	casper.test.assertExists('.comparecontainer', 'the element exists');

});

casper.then(function() {
	this.test.comment('holder per medial practice');
	casper.test.assertExists('.medicalpractice', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('comparebutton location');
	casper.test.assertExists('#comparebutton', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('footer info.');
	casper.test.assertExists('.footer', 'the element exists');
	
});

casper.run(function() {

	this.test.done();

});