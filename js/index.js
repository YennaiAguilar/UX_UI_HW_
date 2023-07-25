console.log ("Your file is loaded correctly")

$(".inline-block").hover(function(){
    $(this).css ("border-radius","40px");
}, function (){
    $(this).css ("border-radius", "20px")
});


$(".dropdown").click (function(){
    $(".dropdown-content").toggle ("slow");
});

$(".text-input").hover (function(){
    $(this).css ("background-color", "#0F9446" ) ;
}, function (){
   $(this).css ("background-color", "white");
})

$("#type").hover (function() {
    $(this).css ("background-color", "#0F9446" );
}, function (){
    $(this).css ("background-color", "white");
 
})

$(document).ready (function() {
    $("#mypic").fadeIn ("5000");
})

$(document).ready (function() {
    $("#intro").fadeIn ("5000");
})