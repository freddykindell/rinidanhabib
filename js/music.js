$(document).ready(function(){
    $("#tampilkan").hide();
    $(".footer").hide();
    
    $("#show").click(function(){
    $("#tampilkan").fadeIn();
    $(".footer").fadeIn();
    $("#show").hide();
    $("#landing").hide();
    const audio = new Audio("music/Gymnopedie_No._1.ogg" );
    audio.play();
    // $("#ntfSound")[0].play();
    
    });
});