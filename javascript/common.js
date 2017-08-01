function lowercase(string) {
    return string.substr(0,1).toLowerCase() + string.substr(1);
}


$(document).ready(function() {
    var $find = $("#find");
    var $owl = $(".owl");
    var $about = $("#about");
    var $navp = $(".navp");
    
    $navp.click(function() {
        var $offset = "#" + lowercase($(this).text());
        $('html, body').animate({  
            scrollTop: $($offset).offset().top
        }, 500);
        console.log($offset);
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
        var $navbar = $("#navbar");
        var $owl = $(".owl img");
        var $section = $(".section");
        if ($(this).scrollTop() > $section.height() - $navbar.height()) {
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
    })
});