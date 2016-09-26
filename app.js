// var id;
function getVideos(movieType){
	var link = "https://api.themoviedb.org/3/movie/"+movieType+"?api_key=0621fea9c06f69e2792e9f85596f52c8";
    var params = {
      type: 'movie',
  };
  $.getJSON(link,params, function (data) {
		// console.log(data.results);
        movieList.empty();
        data.results.forEach(buildListItem);


    });
};
var url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
var template = $('<li class="scene"><div class="movie"><div class="poster"></div><div class="info"><header><h1></h1><span class="rating"></span></header><p></p></div></div></li>');
var movieList = $('#movie-list');
var videoIds = [];



function buildListItem(options) {
    var current = template.clone();
    var voteAverage = Math.floor(options.vote_average);
    current.find('h1').text(options.title);
    current.find('.rating').text(voteAverage + " " + "\u2605");
    current.find('.poster').css({'background-image': 'url('+ url + options.poster_path +')'});
    current.find('p').text(options.overview);
    movieList.append(current);
    console.log(current);
    current.click(function() {
       var link = "https://api.themoviedb.org/3/movie/" + options.id + "/videos?api_key=0621fea9c06f69e2792e9f85596f52c8";
       $.getJSON(link, {type: 'movie'}, function youtubeIds(ids){
        ids = ids.results;
        if (ids.length){
            // window.open('https://www.youtube.com/watch?v='+ids[0].key, "_blank");
            movieList.html('<div class="videos"><iframe width="500" height="500" align="middle" src="https://www.youtube.com/embed/'+ ids[0].key +'"></iframe></div>');

        }
    });

   })

}          
                // <li class="scene">
                //             <div class="movie" onclick="return true">
                //                 <div class="poster"></div>
                //                 <div class="info">
                //                     <header>
                //                         <h1>It's a Wonderful Life</h1>
                //                         <span class="year">1946</span>
                //                         <span class="rating">PG</span>
                //                         <span class="duration">130 minutes</span>
                //                     </header>
                //                     <p>
                //                         In Bedford Falls, New York on Christmas Eve, George Bailey is deeply troubled. Prayers for his well-being from friends and family reach Heaven. Clarence Odbody, Angel Second Class, is assigned to visit Earth to save George, thereby earning his wings. Franklin and Joseph, the head angels, review George's life with Clarence.
                //                     </p>
                //                 </div>
                //             </div>
                //         </li>










$(function() {
                getVideos('popular');
                $('.form').on('click', 'button.link', function() {
                 getVideos(this.id);
             });

       
});

