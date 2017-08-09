// function for making entire string lowercase
function lowercase(string) {
    return string.toLowerCase();
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
    var $witem = $(".wlist li");
    var $activep = $pitem.first();
    var $activew = $witem.first();
    
    // auto scroll to top
    $('html, body').animate({
        scrollTop: 0
    }, 200);
    
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
    
    // set up programming projects
    var $pwrapper = $(".pwrapper");
    $pwrapper.first().css("display", "block");
    $pitem.click(function() {
        if ($(this).text() != $activep.text()) {
            $(this).addClass("prclicked");
            $activep.removeClass("prclicked");
            var prev = "#" + lowercase($activep.text());
            $(prev).css("display", "none");
            //$(prev).css("z-index", 1);
            $activep = $(this);
            var proj = "#" + lowercase($(this).text());
            $(proj).css("display", "block");
            //$(project).css("z-index", 99);
        }
    });
    
    var $wwrapper = $(".wwrapper");
    $wwrapper.first().css("display", "block");
    $witem.click(function() {
        if ($(this).text() != $activew.text()) {
            $(this).addClass("prclicked");
            $activew.removeClass("prclicked");
            var prev = "#" + lowercase($activew.text());
            $(prev).css("display", "none");
            //$(prev).css("z-index", 1);
            $activew = $(this);
            var proj = "#" + lowercase($(this).text());
            $(proj).css("display", "block");
            //$(project).css("z-index", 99);
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
        var $about = $("#about")
        
        // if the window has passed the top section's height minus navbar's height
        if ($(this).scrollTop() > $about.height()- $navbar.height()) {
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