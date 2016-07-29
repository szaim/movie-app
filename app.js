$('#search-term').submit(function(e) {
	e.preventDefault();
	var userInput = $('#user-input').val();
	getVideos(userInput);
});

function getVideos(searchedFilm){
	var link = "https://www.tastekid.com/api/similar?callback=?";
	var params = {
		type: 'movie',
		k: '233921-Movieapp-160TW6HV',
		q: searchedFilm		
	};
	$.getJSON(link,params, function (data) {
		console.log(data);
		showResults(data.Similar.Results)

	})
};


  function showResults(movies){
    
    var thumbnail = "";
    console.log(movies);
   
    	for (var i = 0; i < movies.length; i++){
    		var listNames = movies[i].Name;
    		thumbnail += '<li>' + listNames + '</li>';
    	}

    $('#results').html(thumbnail);
    $('#results').append(thumbnail);
  };



