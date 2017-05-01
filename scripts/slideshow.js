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
var slideCounter = 1;

$prev = $('.prev');
$next = $('.next');

$next.click(function(){
    
    slideCounter = (slideCounter + 1);
    
    if (slideCounter > 8) {
        slideCounter = 0;
    }
    
});

$prev.click(function(){
    
    slideCounter = (slideCounter - 1);
    
    if (slideCounter < 0) {
        slideCounter = 8;
    }
    
});



$(document).click(function() {
    
    console.log(slideCounter);
    
    
});