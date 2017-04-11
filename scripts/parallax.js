$(window).bind('scroll' , function(e) {
    
    parallaxScroll();
    
});

function parallaxScroll(){
    
    var scrolled = $(window).scrollTop();
    
    $('.para-fore').css('top', (0 - (scrolled / 16)) + 'px');
    $('.para-mid').css('top', (0 + (scrolled / 4)) + 'px');
    $('.para-back').css('top', (0 + (scrolled / 2)) + 'px');
    
}