$(document).ready(function(){
	$('.web').click(function(e){
		e.preventDefault();
		$(this).addClass('active_a');
		$(this).siblings('a').removeClass('active_a');
		$('.works_wrapper_img').hide();
		$('.work_web').fadeIn();
	})
	
	$('.app').click(function(e){
		e.preventDefault();
		$(this).addClass('active_a');	
		$(this).siblings('a').removeClass('active_a');
		$('.works_wrapper_img').hide();
		$('.work_app').fadeIn();
	})
	
	$('.other').click(function(e){
		e.preventDefault();
		$(this).addClass('active_a');
		$(this).siblings('a').removeClass('active_a');
		$('.works_wrapper_img').hide();
		$('.work_other').fadeIn();
	})
	
	$('.all').click(function(e){
		e.preventDefault();
		$(this).addClass('active_a');
		$(this).siblings('a').removeClass('active_a');
		$('.works_wrapper_img').fadeIn();
	})
});