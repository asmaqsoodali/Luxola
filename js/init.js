(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.modal').modal();
	$('.carousel.carousel-slider').carousel({fullWidth: true});

	$('.has_sub').click(function(e){
		e.preventDefault();
		$('li.has_sub').not($(this)).removeClass('active').find("ul").hide('fast');
		$(this).toggleClass('active').find('ul').slideToggle('fast');
	});



	$('.signin_sub .btn-floating').click(function(e){

		$('.signin_sub').find('ul').show();
	});
	// $('.modal-content').not('.btn-floating').click(function(e){
	// 	$('.signin_sub').find('ul').hide();
	// });
  }); // end of document ready
})(jQuery); // end of jQuery name space