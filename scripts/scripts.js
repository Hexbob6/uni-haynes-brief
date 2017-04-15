// Adds a click functions to toggle the 'features' visibilty
$('#whats-new , .features-close').click(function(){
    
    $('.features-overlay').toggleClass("features-visible");
    $('.features-box-container').toggleClass("features-slide");
    
});


// Removes the 'loading' overlay element after 3 seconds
$('.loading-overlay').delay(2600).fadeOut(200);
