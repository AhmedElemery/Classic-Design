/* start my global */
$(function()
 {
    'use strict';
    $('.header').height($(window).height());
   
    $(window).resize(function(){
        $(".header").height($(window).height());
        
        $(".slider").each(function()
                     {
        $(this).css("paddingTop",($(window).height()-$(".slider div").height())/2);
    });
        
    });
    
    //links add active class
    
    $(".links li a").click(function()
                        {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    //triggr the bx-slider
    
    $(".slider").bxSlider(
    {
        pager:false
    });
        
    // center slider
    
    $(".slider").each(function()
                     {
        $(this).css("paddingTop",($(window).height()-$(".slider div").height())/2);
    });
    
        // smooth scroll to top
    
    $(".links li a").click(function() {
       $('html, body').animate({
           scrollTop: $("#" + $(this).data("cool")).offset().top
           
       },1000); 
    });
    
    
    // my auto slider
    
    (function autoslider(){
        $(".auto-slider .active").each(function(){
            if(!$(this).is(":last-child"))
            {
                $(this).delay(2000).fadeOut(2000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn(4000);
                    autoslider();
                });
            }
            else{
                $(this).delay(2000).fadeOut(4000,function(){
                    $(this).removeClass("active");
                    $(".auto-slider div").eq(0).addClass("active").fadeIn(4000);
                    autoslider();
                })
            }
        })
        
    }())
    
     
    
    // shuffle
    var mixer = mixitup('#container');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 600
    }
   });
    
    // adjust link with color
    
     $(".shuufle li").click(function()
                        {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    
  // trigger nice scroll
    $("body").niceScroll();
    $("body").niceScroll({
    cursorcolor:"#000",
    cursorwidth:"16px"
    });
    
    
    
         
}); 