$(document).ready(function(){
			// Get the modal
		var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		//var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		//btn.onclick = function() {
		 //   modal.style.display = "block";
		//}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
		
		$('.search').on('input', function(event){
	    event.preventDefault();
	    	console.log('pjpjpjp')
		    var search = $('#search').val();
		    var sendData = {
			    	'search':search
			  	}
			  	console.log(sendData)
			    $.ajax({
			      type: "GET",
			      url: '/gogo',
			      data: sendData,
			      contentType: 'application/json',
			      // success: function (data){
			      //   $('.info').text(data)
			      //  console.log('pjpjpjpjpjpjpjpjpj',data)
			      // }
			     })
			    .then(function(resp){
			    	console.log(resp)
			    	$('.movies').empty();
			    	$('.movies2').empty();
					$('.movies').append('<h4>Matches</h4>')
					for (var i = 0 ; i < 5 ; i++){
						if (resp.Search[i].Poster === 'N/A'){
							resp.Search[i].Poster = 'https://res.cloudinary.com/cinebee/image/upload/v1452103746/edg9gkd0sawkc34siol1.jpg'
						}
						$('.movies').append('<div class = "col-md-2 info'+i+'" data-imdb="'+resp.Search[i].imdbID+'">'+
								'<div>'+
								'</div>'+'<div><br> <img src="'+resp.Search[i].Poster+'" width = "100%"></div>'+
								'<div>'+resp.Search[i].Title+' </div>'+
								'<div>Year: '+resp.Search[i].Year+' </div>'+
			    				'<div>'+'</div>'+

							'</div>')
						$('.info'+i).on('click', function(event){
							event.preventDefault();
							console.log(event)
							var val = i
							console.log('poster click working'+event.currentTarget.dataset.imdb)
							var imdbData = {
								'imdb':event.currentTarget.dataset.imdb
							}
							$.ajax({
						      type: "GET",
						      url: '/imdb',
						      data: imdbData,
						      contentType: 'application/json',
						      // success: function (data){
						      //   $('.info').text(data)
						      //  console.log('pjpjpjpjpjpjpjpjpj',data)
						      // }
						     }).then(function(resp){
						     	if (resp.Poster === 'N/A'){
									resp.Poster = 'https://res.cloudinary.com/cinebee/image/upload/v1452103746/edg9gkd0sawkc34siol1.jpg'
								}
						     	modal.style.display = 'block'
						     	$('.modal-info').empty();
						     	$('.modal-info').append(
						     		
						     		'<div class = "col-md-5">'+
						     		'<h4>'+resp.Title+'</h4>'+
						     		'<div> <b>Year:</b> '+resp.Year+'</div>'+
						     		'<div> <b>Rated:</b> '+resp.Rated+'</div>'+
						     		'<div> <b>Release Date:</b> '+resp.Released+'</div>'+
						     		'<div> <b>Runtime:</b> '+resp.Runtime+'</div>'+
						     		'<div> <b>Genre:</b> '+resp.Genre+'</div>'+
						     		'<div> <b>Actors:</b> '+resp.Actors+'</div>'+
						     		'<div> <b>Director:</b> '+resp.Director+'</div>'+
						     		'<div> <b>IMDB Rating:</b> '+resp.imdbRating+'</div>'+
						     		'<div> <b>Plot:</b> '+resp.Plot+'</div>'+
						     		'</div>'+
						     		'<div class = "col-md-4"> <img src="'+resp.Poster+'" width = "100%"></div>'
						     		)

						     })
						})

					}
					for (var i = 5 ; i < 10 ; i++){
						if (resp.Search[i].Poster === 'N/A'){
							resp.Search[i].Poster = 'https://res.cloudinary.com/cinebee/image/upload/v1452103746/edg9gkd0sawkc34siol1.jpg'
						}
						$('.movies2').append('<div class = "col-md-2 info'+i+'" data-imdb="'+resp.Search[i].imdbID+'">'+
								'<div>'+
								'</div>'+'<div><br> <img src="'+resp.Search[i].Poster+'" width = "100%"></div>'+
								'<div>'+resp.Search[i].Title+' </div>'+
								'<div>Year: '+resp.Search[i].Year+' </div>'+		
			    				'<div>'+'</div>'+

							'</div>')
						$('.info'+i).on('click', function(event){
							event.preventDefault();
							console.log(event)
							var val = i
							console.log('poster click working'+event.currentTarget.dataset.imdb)
							var imdbData = {
								'imdb':event.currentTarget.dataset.imdb
							}
							$.ajax({
						      type: "GET",
						      url: '/imdb',
						      data: imdbData,
						      contentType: 'application/json',
						      // success: function (data){
						      //   $('.info').text(data)
						      //  console.log('pjpjpjpjpjpjpjpjpj',data)
						      // }
						     }).then(function(resp){
						     	if (resp.Poster === 'N/A'){
									resp.Poster = 'https://res.cloudinary.com/cinebee/image/upload/v1452103746/edg9gkd0sawkc34siol1.jpg'
								}
						     	modal.style.display = 'block'
						     	$('.modal-info').empty();
						     	$('.modal-info').append(
						     		
						     		'<div class = "col-md-5">'+
						     		'<h4>'+resp.Title+'</h4>'+
						     		'<div> <b>Year:</b> '+resp.Year+'</div>'+
						     		'<div> <b>Rated:</b> '+resp.Rated+'</div>'+
						     		'<div> <b>Release Date:</b> '+resp.Released+'</div>'+
						     		'<div> <b>Runtime:</b> '+resp.Runtime+'</div>'+
						     		'<div> <b>Genre:</b> '+resp.Genre+'</div>'+
						     		'<div> <b>Actors:</b> '+resp.Actors+'</div>'+
						     		'<div> <b>Director:</b> '+resp.Director+'</div>'+
						     		'<div> <b>IMDB Rating:</b> '+resp.imdbRating+'</div>'+
						     		'<div> <b>Plot:</b> '+resp.Plot+'</div>'+
						     		'</div>'+
						     		'<div class = "col-md-4"> <img src="'+resp.Poster+'" width = "100%"></div>'
						     		)

						     })
						})

					}

			    })
			
		})


	})