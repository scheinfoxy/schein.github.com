$(document).ready(function(){
	var slider = $('.carousel5 .carousel-slider5');
	var item = $('.carousel5 .catousel-item5');
	var total = item.length;
	var width = item.width();
	var index = 0;
	var speed = 500;

	slider.width( total * width );

	function carouselSlide(index) {
	  slider.stop().animate({left: -index * width +'px'}, speed);
	};

$('.carousel-prev5').on('click', function() {
  index -= 1;
  carouselSlide( index = (index < 0) ? total - 1 : index );
});

$('.carousel-next5').on('click', function() {
  index += 1;
  carouselSlide( index = (index > total - 1) ? 0 : index );
});
	
});