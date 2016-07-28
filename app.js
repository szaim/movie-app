

function getVideos(link,data) {
	var link = 'https://www.tastekid.com/api/similar?q=';
	var params = {
		k: '233921-MoviesAp-KQ644TIG',		
		type:,
		q:
	}

		$.getJSON(link), 
			{

			part: "snippet",
			maxResults: 6,
			key: apiKey,
			
	
	}
			, 
			function (data) {
				display(data.items);
				displaySearchResults(data.items);
			}

		);
	}