$(document).ready(function(){
	var slider = $('.carousel4 .carousel-slider4');
	var item = $('.carousel4 .catousel-item4');
	var total = item.length;
	var width = item.width();
	var index = 0;
	var speed = 500;

	slider.width( total * width );

	function carouselSlide(index) {
	  slider.stop().animate({top: -index * width +'px'}, speed);
	};

	$('.carousel-prev4').on('click', function() {
  index -= 1;
  carouselSlide( index = (index > total - 1) ? 0 : index );
});

$('.carousel-next4').on('click', function() {
  index += 1;
  carouselSlide( index = (index > total - 1) ? 0 : index );
});
	
	

	
	
	
	
});