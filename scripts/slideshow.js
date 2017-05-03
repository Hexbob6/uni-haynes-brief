//Changing Page Images when Chapter IDs are hovered
$("#chapter01").hover(
    
    function () {$("#page01").css({opacity : '1'});},
    function () {$("#page01").css({opacity : '0'});}
    
);

$("#chapter02").hover(
    
    function () {$("#page02").css({opacity : '1'});},
    function () {$("#page02").css({opacity : '0'});}
    
);

$("#chapter03").hover(
    
    function () {$("#page03").css({opacity : '1'});},
    function () {$("#page03").css({opacity : '0'});}
    
);

$("#chapter04").hover(
    
    function () {$("#page04").css({opacity : '1'});},
    function () {$("#page04").css({opacity : '0'});}
    
);

$("#chapter05").hover(
    
    function () {$("#page05").css({opacity : '1'});},
    function () {$("#page05").css({opacity : '0'});}
    
);

$("#chapter06").hover(
    
    function () {$("#page06").css({opacity : '1'});},
    function () {$("#page06").css({opacity : '0'});}
    
);

$("#chapter07").hover(
    
    function () {$("#page07").css({opacity : '1'});},
    function () {$("#page07").css({opacity : '0'});}
    
);

$("#chapter08").hover(
    
    function () {$("#page08").css({opacity : '1'});},
    function () {$("#page08").css({opacity : '0'});}
    
);



// Mobile Slideshow
var slideCounter = 0;

// Sets default text
$('#mobile-chapter00').css({'opacity' : '1'});

// Sets default image
$('.page-image-mobile').not('.page-image-mobile#mobile-page0' + slideCounter).hide();

$prev = $('.prev');
$next = $('.next');

// Next button
$next.click(function(){
    
    slideCounter = (slideCounter + 1);
    
    if (slideCounter > 8) {
        slideCounter = 0;
    }
    
    
    // Changes text visibility based on slidecount    
    $('.page-text-mobile').not('.page-text-mobile#mobile-chapter0' + slideCounter).css({'opacity' : '0'});
    
    $("#mobile-chapter0" + slideCounter).css({'opacity' : '1'});
    
    
    // Changes image based on slidecount
    $('.page-image-mobile').not('.page-image-mobile#mobile-page0' + slideCounter).delay(100).hide(0).css({'z-index' : '0'});
    
    $("#mobile-page0" + slideCounter).fadeIn(100);    
    
});

// Previous button
$prev.click(function(){
    
    slideCounter = (slideCounter - 1);
    
    if (slideCounter < 0) {
        slideCounter = 8;
    }
    
    
    // Changes text visibility based on slidecount 
    $('.page-text-mobile').not('.page-text-mobile#mobile-chapter0' + slideCounter).css({'opacity' : '0'});
    
    $("#mobile-chapter0" + slideCounter).css({'opacity' : '1'});
    
    
    // Changes image based on slidecount
    $('.page-image-mobile').not('.page-image-mobile#mobile-page0' + slideCounter).delay(100).hide(0).css({'z-index' : '0'});
    
    $("#mobile-page0" + slideCounter).fadeIn(100);
    
});


// Displays slideCount in the console

//$(document).click(function() {console.log(slideCounter);});