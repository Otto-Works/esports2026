$('.header .hum').on('click', function(){
    $('.spMenu').fadeIn();
});

$('.spMenu ul li .trigger').on('click', function(){
    $(this).next('.subMenu').slideToggle();
});

$('.spMenu .close').on('click', function(){
    $('.spMenu').fadeOut();
});

$('.spMenu ul li a:not(.trigger)').on('click', function(){
    $('.spMenu').fadeOut();
});