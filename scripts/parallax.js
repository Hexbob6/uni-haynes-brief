$(window).bind('scroll' , function(e) {
    
    parallaxScroll();
    
});


function parallaxScroll(){
    
    var wScroll = $(window).scrollTop();
    var wHeight = $(window).height();
    
    $('.para-fore').css('top', (0 - (wScroll / 16)) + 'px');
    $('.para-mid').css('top', (0 + (wScroll / 4)) + 'px');
    $('.para-back').css('top', (0 + (wScroll / 2)) + 'px');
    
    $('.haynes-covers').css('background-position', '0 ' + (0 + (wScroll / 4)) + 'px');
    
    
//    if (wScroll > (wHeight * 0.7)){
    if (wScroll > $("#panel-02").offset().top - 300){
        
        $(".mockup-back").addClass("mockup-back-showing");
        $(".mockup-front").addClass("mockup-front-showing");
        
    }
    
    if (wScroll > $("#panel-06").offset().top - 400){
        
        $(".mockup-back-lower").addClass("mockup-back-showing");
        $(".mockup-front-lower").addClass("mockup-front-showing");
        
    } 
    
};
