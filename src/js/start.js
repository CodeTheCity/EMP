/**
*  jQuery listen for clicks and interaction	
* 
*/	
$(document).ready(function(){
	
	/*
	*
	* Need to retrieve JSON date from remote Aberdeen City open data store
	*
	*/
	(function() {
		var AberdeenCityAPIgps = "http://opendata.aberdeencity.gov.uk/dataset/7a548fae-9720-4498-bcc1-5e42db32129b/resource/80d8011c-79ce-439c-b5d0-e5556b500deb/download/GPsData.json";
		$.getJSON( AberdeenCityAPIgps, {
		
		})
		.done(function(data) {

		});
	})();	
	
	/*
	*
	* Need to retrieve JSON date from remote Aberdeen City open data store  Location GP practices
	*
	*/
	(function() {
		var AberdeenCityAPIgpLocation = "http://opendata.aberdeencity.gov.uk/dataset/37d0d251-441c-429f-b070-e1d17a00576c/resource/b3b76f69-cdd6-485c-b555-4ddbccbf3faa/download/CityCHPGPPractices.geojson";
		$.getJSON(AberdeenCityAPIgpLocation, {
		
		})
		.done(function(data) {
			
		});
	})();		
	
	
	/*
	* Capture Click from UI
	*
	*/
	$("a").click(function(e) {
		e.preventDefault(e);			
		
	});
	
});