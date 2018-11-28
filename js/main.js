$('.header-nav a').click(function(){
	$('.header-nav a').removeClass('active')
	$(this).addClass('active');
})

$('.slide2').hide();

$('.next').click(function(){
	$('.slide').removeClass('active');
	$('.slide1').hide();
	$('.slide2').addClass('active');
	$('.slide2').fadeIn('active');
})

$('.prev').click(function(){
	$('.slide').removeClass('active');
	$('.slide2').hide();
	$('.slide1').addClass('active');
	$('.slide1').fadeIn('active');
})