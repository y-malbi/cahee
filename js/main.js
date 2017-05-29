$('.ca-header-navigation-menu').on('click', 'a', function(event){
	event.preventDefault();
	var link = $(this).attr('href'); //id блока
	var distanse = $(link).offset().top; //px
	$('html, body').animate({
	scrollTop: distanse
	}, 500); //500 - время в мс

});

// $(document).ready(function(){
// 	$('.ca-gallery:has(.ca-gallery__button)').css('background', 'red');
// });

$(window).scroll(function(){
	var dist = $('.ca-home__name').offset().top;
	if ($(window).scrollTop() >= dist){
		$('.ca-header').css('background', 'rgba(255,255,255, 0.8)');
	}else{
		$('.ca-header').css('background', 'transparent');
	}
});

$('.ca-about-us__img').hide();
$(window).scroll(function(){
	var dist = $('#about_us').offset().top;
	if ($(window).scrollTop() >= dist){
		$('.ca-about-us__img').show(400);
	}else{
		$('.ca-about-us__img').hide(200);
	}
});



// $('.ca-header-navigation-menu').children().first().children().addClass('active');
$('[href="#home"]').addClass('active');
	
$('.ca-header-navigation-menu > li > a').click(function(e){
	if ($(this).hasClass('active')){
	}else{
		$('.ca-header-navigation-menu > li > a').removeClass('active')
		$(this).addClass('active');
	}
});

// Responsive menu
$('#show-menu').on('click', function(){
	// $(this).toggleClass('open');
	if ($(this).hasClass('open')){
		$(this).removeClass('open');
		$(this).find('span')
			   .removeClass('icon-cross')
			   .addClass('icon-menu');
	}
	else{
		$(this).addClass('open');
		$(this).find('span')
			   .removeClass('icon-menu')
			   .addClass('icon-cross');
	}
});
$(window).resize(function(){
	if ($(window).width() > 800){
		if ($('#sow-menu').hasClass('open')){
			$('#show-menu').removeClass('open')
				.find('span')
				.removeClass('icon-cross')
				.addClass('icon-menu');
		}
	}
});

