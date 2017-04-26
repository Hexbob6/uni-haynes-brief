$(window).bind('scroll' , function(e) {
    
    parallaxScroll();
    
});


function parallaxScroll(){
    
    var wScroll = $(window).scrollTop();
    var wHeight = $(window).height();
    
    
    // Parallax Scrolling Effects
    
    // Hero Parallax
    if ($('#panel-01').visible(true)){
        
        $('.para-fore').css('top', (0 - (wScroll / 16)) + 'px');
        $('.para-mid').css('top', (0 + (wScroll / 4)) + 'px');
        $('.para-back').css('top', (0 + (wScroll / 2)) + 'px');
        
    }
    
    // Haynes Covers Parallax
    if ($('#panel-04').visible(true)){
        $('.haynes-covers').css('background-position', '0 ' + (0 + (wScroll / 4)) + 'px');
    }
    
    
    // Mockup Image Display Effects
    
    // First Mockup Animation
    if (wScroll > $("#panel-02").offset().top - (wHeight * 0.5)){
        
        $(".mockup-back-upper").addClass("mockup-back-showing");
        $(".mockup-front-upper").addClass("mockup-front-showing");
        
    }
    
    // Second Mockup Animation
    if (wScroll > $("#panel-06").offset().top - (wHeight * 0.5)){
        
        $(".mockup-back-lower").addClass("mockup-back-showing");
        $(".mockup-front-lower").addClass("mockup-front-showing");
        
    }
    
};
