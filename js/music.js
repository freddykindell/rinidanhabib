$(document).ready(function(){
    $("#tampilkan").hide();
    $(".footer").hide();
    
    $("#show").click(function(){
    $("#tampilkan").show();
    $(".footer").show();
    $("#ntfSound")[0].play();
    $("#show").hide();
    $("#home").hide();
    });
});