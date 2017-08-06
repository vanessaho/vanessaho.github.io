// function for lowercasing the first letter of a string
function lowercase(string) {
    return string.substr(0,1).toLowerCase() + string.substr(1);
}


$(document).ready(function() {
    //variables
    var $find = $("#find");
    var $owl = $(".owl");
    var $about = $("#about");
    var $navp = $(".navp");
    var $third = $(".third");
    var $wrapper = $(".wrapper");
    var $skills = $("#skills");
    var $section = $(".section");
    var $navbar = $("#navbar");
    var $pitem = $(".plist li");
    var $active = $pitem.first();
    
    // so that if the window refreshes in middle of page the user isn't stuck there
    if ($(window).scrollTop() >= $section.height() - $navbar.height()) {
        $('html, body').css("overflow-y", "auto");
    };
    
    // click on whatever link on navigation bar
    $navp.click(function() {
        var $offset = "#" + lowercase($(this).text());
        $('html, body').animate({  
            scrollTop: $($offset).offset().top
        }, 500);
    });
    
    // click on "Find out more about me"
    $find.click(function() {
        $('html, body').animate({
            scrollTop: $about.offset().top
        }, 500);
    });
    
    $pitem.click(function() {
        if ($(this).text() != $active.text()) {
            $(this).addClass("pclicked");
            $active.removeClass("pclicked");
            $active = $(this);
        }
    })
    
    // click on owl icon on top
    $owl.click(function() {
        var $opening = $("#opening");
        $('html, body').animate({
            scrollTop: $opening.offset().top
        }, 500);
    });
    
    
    // scrolling functions
    $(window).scroll(function() {
        var $nav = $(".navp");
        var $owl = $(".owl img");
        var $me = $("#aleft img");
        
        // if the window has passed the top section's height minus navbar's height
        if ($(this).scrollTop() > $section.height() - $navbar.height()) {
            $('html, body').css("overflow-y", "auto");
            $(".owl").addClass("opacity");
            $nav.addClass("opacity");
            $nav.addClass("color");
            $(".owl img").attr("src", "./img/blackowl.png");
        } else {
            $nav.removeClass("opacity");
            $(".owl").removeClass("opacity");
            $nav.removeClass("color");
            $(".owl img").attr("src", "./img/owl.png");
        }
        
        // fade each element in one by one
        $wrapper.each(function(i) {
            // middle of window
            var window_pos = $(window).scrollTop() + ($(window).height() / 2);
            // top of element
            var top_wrapper = $(this).offset().top;
            
            if (top_wrapper <= window_pos) {
                $(this).animate({'opacity':'1'}, 1000*i);
            }
        });
        
        // rotate image after scrolling past #about section
        if ($(this).scrollTop() >= $about.offset().top - $navbar.height()) {
            $me.addClass("rotate5");
        }
    });
});