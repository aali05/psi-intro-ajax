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
      // put movie poster on the DOM
      $('#movie-holder').append( '<img src="'+ response.Poster +'">')
      // put title of the movie on the DOM
      $('#movie-holder').append('<div class="movie-title">' + response.Title + '</div>');
      // put the actors on the DOM
      $('#movie-holder').append('<div class="movie-actors">' + response.Actors + '</div>');
      // put date the movie was released on the DOM
      $('#movie-holder').append('<div class="movie-release">' + response.Released + '</div');
      // put plot of the movie on the DOM
      $('#movie-holder').append('<div class="movie-plot">' + response.Plot + '</div>');
      // put awards movie has won on the DOM
      $('#movie-holder').append('<div class="movie-awards">' + response.Awards + '</div>');
  }
  });
}
