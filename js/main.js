$('.header-nav a').click(function(){
	$('.header-nav a').removeClass('active')
	$(this).addClass('active');
})

$('.slide2').hide();

var current = 1;

$('.next, .prev').click(function(){
	if(current === 1){
		$('.slide').removeClass('active');
		$('.slide1').hide();
		$('.slide2').addClass('active');
		$('.slide2').fadeIn('active');
		current = 2;
	}else{
		$('.slide').removeClass('active');
		$('.slide2').hide();
		$('.slide1').addClass('active');
		$('.slide1').fadeIn('active');
		current = 1;
	}
})

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  if ( scrollTop > 100 ) { 
    $('.fixed-header').addClass('show-header')
  }else{
  	$('.fixed-header').removeClass('show-header')
  }
});