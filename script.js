console.log('script src');

$(document).ready(onReady);


function onReady() {
  console.log('in onReady');

  // request data from omdb on the jaws
  // when response comes back from the server
  // run success function which will log response
  $.ajax({
    url: 'http://www.omdbapi.com/?t=The+Godfather%3A+Part+II',
    success: function(response) {
      console.log('this is the response ->', response);
      console.log('movie title ->', response.Title);
      // console.log('movie actors ->', response.Actors);
      // put title on the DOM
      $('#movie-holder').append( '<img src="'+ response.Poster +'">')
      $('#movie-holder').append('<div class="movie-title">' + response.Title + '</div>');
      $('#movie-holder').append('<div class="movie-actors">' + response.Actors + '</div>');
      $('#movie-holder').append('<div class="movie-release">' + response.Released + '</div');
      $('#movie-holder').append('<div class="movie-plot">' + response.Plot + '</div>');
      $('#movie-holder').append('<div class="movie-awards">' + response.Awards + '</div>');
      // $('#movie-holder').prepend('<img id="theImg" src="Godfather.png" />');
      // $('#movie-holder').append('<img src="' + response.Poster + '>');

      // code wouldn't work for me.
    }
    // error: function(response) {
    //   console.log('error case: response ->', response);
    // }
  });
}
