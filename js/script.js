$('.icon-menu').click(function(event){
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('.body').toggleClass('lock');
});
$(document).ready(function(){
	$('.aod__content').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:1,
		sldesToScroll:0,
		speed:1000,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		autoplay:true,
		autoplaySpeed:1000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotHover:true,
		draggable:false,
		swipe:true,
		touchMove:true,
		waitForAnimate:false,
		centerMode:false,
		variableWidth:false ,
	});
});
