var $topMenu = $('.ca-header-navigation-menu'),
		$showMenuBtn = $('#show-menu');

$topMenu.on('click', 'a', function(event){
	event.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top; 
	$('html, body').animate({
	scrollTop: distanse
	}, 500);
});

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


$('[href="#home"]').addClass('active');
	
$('.ca-header-navigation-menu > li > a').click(function(e){
	if ($(this).hasClass('active')){
	}else{
		$('.ca-header-navigation-menu > li > a').removeClass('active')
		$(this).addClass('active');
	}
});

// Responsive menu
$showMenuBtn.on('click', function(){
	if ($topMenu.hasClass('open')){
		$topMenu.removeClass('open');
		$(this).find('span')
			   .removeClass('icon-cross')
			   .addClass('icon-menu');
	}
	else{
		$topMenu.addClass('open');
		$(this).find('span')
			   .removeClass('icon-menu')
			   .addClass('icon-cross');
	}
});
$(window).resize(function(){
	if ($(window).width() > 800){
		$topMenu.removeClass('animation')
				.removeClass('open');
		$showMenuBtn.find('span')
			   .removeClass('icon-cross')
			   .addClass('icon-menu');
	}else{
		$topMenu.addClass('animation');
	}
});

$topMenu.on('click', 'a', function(){
	$topMenu.removeClass('open');
	$showMenuBtn.find('span')
				.removeClass('icon-cross')
			   .addClass('icon-menu');
});

