$(window).bind('scroll' , function(e) {
    
    parallaxScroll();
    
});


function parallaxScroll(){
    
    var wScroll = $(window).scrollTop();
    var wHeight = $(window).height();
    
    
    // Parallax Scrolling Effects
    if ($('#panel-01').visible(true)){
        
        $('.para-fore').css('top', (0 - (wScroll / 16)) + 'px');
        $('.para-mid').css('top', (0 + (wScroll / 4)) + 'px');
        $('.para-back').css('top', (0 + (wScroll / 2)) + 'px');
        
    }
    
    if ($('#panel-04').visible(true)){
        $('.haynes-covers').css('background-position', '0 ' + (0 + (wScroll / 4)) + 'px');
    }
    
    
    // Mockup Image Display Effects
    
    if (wScroll > $("#panel-02").offset().top - 300){
        
        $(".mockup-back-upper").addClass("mockup-back-showing");
        $(".mockup-front-upper").addClass("mockup-front-showing");
        
    }
    
    if (wScroll > $("#panel-06").offset().top - 400){
        
        $(".mockup-back-lower").addClass("mockup-back-showing");
        $(".mockup-front-lower").addClass("mockup-front-showing");
        
    } 
    
};
