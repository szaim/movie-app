

(function getVideos(){
	var link = "https://www.tastekid.com/api/similar?callback=?";
	var params = {
		type: 'movie',
		k: '233921-Movieapp-160TW6HV',
		q: "The Shining"		
	};

	$.getJSON(link,params, function (data) {
		console.log(data);


	})

})();


