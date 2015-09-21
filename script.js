$(document).ready(function(){
	var slider = $('.carousel .carousel-slider');
	var item = $('.carousel .catousel-item');
	var total = item.length;
	var width = item.width();
	var index = 0;
	var speed = 500;

	slider.width( total * width );

	function carouselSlide(index) {
	  slider.stop().animate({left: -index * width +'px'}, speed);
	};

	$('.carousel_nav a').on('click', function(e) {
	e.preventDefault();
	$(this).addClass('active');
	$(this).siblings('a').removeClass('active');
	   index += 1;
	  carouselSlide( index = (index < 0) ? total - 1 : index );
	});
	
	
	var slider2 = $('.carousel2 .carousel-slider2');
	var item2 = $('.carousel2 .catousel-item2');
	var total2 = item.length;
	var width2 = item.width();
	var index2 = 0;
	var speed2 = 500;

	slider2.width( total2 * width2 );

	function carouselSlide2(index2) {
	  slider2.stop().animate({left: -index2 * width2 +'px'}, speed2);
	};

	$('.active_a1').on('click', function(e) {
	e.preventDefault();
	$(this).addClass('active_a2');
	$(this).siblings('a').removeClass('active_a2');
		index2 += 1;
		carouselSlide2( index2 = (index2 > total - 1) ? 0 : index2 );
	});
	
	$('.active_a2').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('active_a2');
		$(this).siblings('a').removeClass('active_a2');
		index2 -= 1;
		carouselSlide2( index2 = (index2 < 0) ? total - 1 : index2 );
	});
	
	$('.about_info2').hide();
	$('.skills').click(function(){
		$('.about_info').hide();
		$(this).addClass('h4_active');
		$('.we').removeClass('h4_active');
		$('.about_info2').fadeIn('slow');
	});
	
	$('.we').click(function(){
		$('.about_info2').hide();
		$(this).addClass('h4_active');
		$('.skills').removeClass('h4_active');
		$('.about_info').fadeIn('slow');
	});
	
	
	
	
	
});