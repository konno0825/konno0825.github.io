'use strict';

$(function(){
    $(".hamberger").click(function(){
        $(this).toggleClass("active");
        $("#header .main-nav").toggleClass("active");
    });

    $(".main-nav a").click(function(){
        $(".hamberger").removeClass("active");
        $("#header .main-nav").removeClass("active");
    });
});