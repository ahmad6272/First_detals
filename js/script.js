$(document).ready(function(){
    $(".home_menu").hide();

    $(".home").click(function(){
        $(".home_menu").removeClass("d-none")
        $(".home_menu").toggle(500);
    })

    // $(".home").click(function(){
    //     if($('.home_menu').is(':hover') === false){
    //         $(".home_menu").toggle(1000);
    //     }
    //     $(".home_menu").toggle(1000);
    // })


});