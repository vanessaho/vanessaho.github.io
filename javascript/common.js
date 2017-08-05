function lowercase(string) {
    return string.substr(0,1).toLowerCase() + string.substr(1);
}


$(document).ready(function() {
    var $find = $("#find");
    var $owl = $(".owl");
    var $about = $("#about");
    var $navp = $(".navp");
    var $third = $(".third");
    var $wrapper = $(".wrapper");
    var $skills = $("#skills");
    var $section = $(".section");
    var $navbar = $("#navbar");
    
    if ($(window).scrollTop() >= $section.height() - $navbar.height()) {
        $('html, body').css("overflow-y", "auto");
    };
    
    $navp.click(function() {
        var $offset = "#" + lowercase($(this).text());
        $('html, body').animate({  
            scrollTop: $($offset).offset().top
        }, 500);
    });
    
    $find.click(function() {
        $('html, body').animate({
            scrollTop: $about.offset().top
        }, 500);
    });
    
    $owl.click(function() {
        var $opening = $("#opening");
        $('html, body').animate({
            scrollTop: $opening.offset().top
        }, 500);
    });
    
    $(window).scroll(function() {
        var $nav = $(".navp");
        var $owl = $(".owl img");
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
        
        $wrapper.each(function(i) {
            // middle of window
            var window_pos = $(window).scrollTop() + ($(window).height() / 2);
            // top of element
            var top_wrapper = $(this).offset().top;

            if (top_wrapper <= window_pos) {
                $(this).animate({'opacity':'1'}, 1000*i);
            }
        });
    });
});