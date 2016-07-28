

function getVideos(){
	var link = "https://www.tastekid.com/api/similar?callback=?";
	var params = {
		type: 'movie',
		k: '233921-Movieapp-160TW6HV',
		q: "The Shining"		
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

getVideos();
///
// create random video channels
// 	function display(random) {
// 		var html = '';

// 		$.each(random, function (index, video) {
// 			console.log(video);
// 			html = html + "<li><p>" + video.snippet.title + "</p>"
// 				+"<a class='image' href='https://www.youtube.com/watch?v="+video.id.videoId+ "'>"
// 					+"<img src='" +  video.snippet.thumbnails.high.url + "' height=300px/></a></li>" ;

// 		});
// 		$("#content").html(html);
// 	}

// 	getResults(random());

// function random() {
// 	var searches = ['cats', 'dogs', 'mice','pokemon', 'monga', 'game', 'music', 'pop'];
// 		var randomN = Math.floor(Math.random() * searches.length);
// 		return searches[randomN];		

// }