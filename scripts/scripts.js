// Adds a click functions to toggle the 'features' visibilty
$('#whats-new , .features-close').click(function(){
    
    $('.features-overlay').toggleClass("features-visible");
    $('.features-box-container').toggleClass("features-slide");
    
});


// Removes the 'loading' overlay element after 3 seconds
$('.loading-overlay').delay(2600).fadeOut(200);



// Adds the current screensize to the screen-size div
$(window).bind('resize', function(e) {
    
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var screenSize = screenWidth + ' x ' + screenHeight;
    
    $('.screen-size p').html(screenSize);
    console.log(screenSize);
    
    
    
    
    if ($(window).width() < 640) {
        
        $('button h4').addClass('both-align');
        
    }
    
    else {
        
        $('button h4').removeClass('both-align');
        
    }
    
});

if ($(window).width() < 640) {
    
    $('button h4').addClass('both-align');
    
}

else {
    $('button h4').removeClass('both-align');
}

function animateBG() {
    $('.haynes-cover-mobile').animate({backgroundPosition: '+=5'}, 12, animateBG);
};