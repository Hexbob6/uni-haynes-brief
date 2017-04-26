// Adds a click functions to toggle the 'features' visibilty
$('#whats-new , .features-close').click(function(){
    
    $('.features-overlay').toggleClass("features-visible");
    $('.features-box-container').toggleClass("features-slide");
    
});


// Removes the 'loading' overlay element after 3 seconds
$('.loading-overlay').delay(2600).fadeOut(200);


// Logs the Browser Window on resize
$(window).bind('resize', function(e) {
    
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var screenSize = screenWidth + ' x ' + screenHeight;
    
    // Adds the window screensize to the Screensize box
    $('.screen-size p').html(screenSize);
    console.log(screenSize);
    
    
    
    // Aligns button text on resize
    if ($(window).width() < 640) {
        
        $('button h4').addClass('both-align');
        
    }
    
    else {
        
        $('button h4').removeClass('both-align');
        
    }
    
});


// Aligns button text on page load/refresh
if ($(window).width() < 640) {
    
    $('button h4').addClass('both-align');
    
}

else {
    $('button h4').removeClass('both-align');
}


// Adds the Scrolling effect to the Haynes Covers Showcase on mobile
function animateBG() {
    $('.haynes-cover-mobile').animate({backgroundPosition: '+=5'}, 12, animateBG);
};