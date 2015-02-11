function onDecideNextTracks() {

	var URI = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139';
	$.ajax({url:URI,dataType:"jsonp"})
    	  .done(function(object){

    	  		RadioEngine.setNextTracks(
    	  			TunehogOpenAPI.findTracks(
    	  				{ "count":4,
    	  				  "filteBy":
    	  				  	{ 
                      "genre"  : RadioEngine.settings["genre"],
                      "decade" : RadioEngine.settings["decade"],
                      "bpm": {
    	  				  		"min": object.temperature-5,
    	  				  		"max": object.temperature+5 } },
    	  				  ,"sortBy":"random"}));
	    })
   		   .fail(function(){
         	alert("oh no - something went wrong, no weather!");
      	});
}

function onUserScoreItem(item, score) {
} 

function onUserAddSeed(item) {
} 




