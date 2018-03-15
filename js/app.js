// forced scroll to top
window.onbeforeunload = function() {window.scrollTo(0,0);}

//typed.js option
var options = {
    strings: ["aesthetically pleasing.", "creative and resourceful.", "minimalistic and pretty.", "functional and appealing.", "fun and sophisticated."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 50,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 10,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html'
}

var typed = new Typed(".typed", options);

// navbar hovor function
var $nava = $("#nav ul li a");
$("#nav").hover(function() {
    $nava.addClass("transparent");
    $nava.hover(function() {
        $(this).addClass("solid");
    }, function() {
        $(this).removeClass("solid");
    });
}, function() {
    $nava.removeClass("transparent");
});

// shiny functions
var $about = $("#about");
var $skills = $("#skills");
var $skill = $(".skill");
var $projects = $("#projects");
var $contact = $("#contact");
var $cicon = $("#c_icons ul li");

$about.hover(function() {
    $("#about_container h1 i").removeClass("transparent");
}, function() {
    $("#about_container h1 i").addClass("transparent");
});

$projects.hover(function() {
    $("#proj_container h1 i").removeClass("transparent");
}, function() {
    $("#proj_container h1 i").addClass("transparent");
});

$skills.hover(function() {
    $("#skill_container h1 i").removeClass("transparent");
}, function() {
    $("#skill_container h1 i").addClass("transparent");
});

$skill.hover(function() {
    $(this).find("i").removeClass("transparent");
}, function() {
    $(this).find("i").addClass("transparent");
});

$cicon.hover(function() {
    $(this).find("i").removeClass("transparent");
}, function() {
    $(this).find("i").addClass("transparent");
})

// check if container element is in view
var $container = $(".container");
function in_view() {
    var scrolled = $(window).scrollTop();
    var wheight = $(window).outerHeight();
    var wbottom = wheight + scrolled;
    
    $container.each(function() {
        var $this = $(this);
        var $theight = $this.outerHeight();
        var $tscrolled = $this.offset().top;
        var $tbottom = $theight + $tscrolled;
        
        // if container bottom >= window top && container top <= window bottom
        if (($tbottom >= scrolled) && ($tscrolled <= wbottom)) {
            $this.addClass("in_view");
        } 
    });
}

// fade in function for nav bar
var oheight = $("#opening").outerHeight();
var aheight = $("#about").outerHeight(true);
var sheight = $("#skills").outerHeight(true);
var pheight = $("#projects").outerHeight(true);
var cheight = $("#contact").outerHeight(true);

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    var difference = ($(window).outerWidth() < 1000)? 30: 60;
    if ($(window).scrollTop() > (oheight - difference)) {
        $("#nav").fadeIn("slow");
    } else {
        $("#nav").fadeOut("fast");
    }
    
    in_view();
});

// getting hours of the day for greeting
var $hello = $("#hello");
var d = new Date();
var time = d.getHours();

if (time >= 0 && time < 6) {
    $hello.text("Happy sleeping time");
} else if (time >= 6 && time < 12) {
    $hello.text("Good morning");
} else if (time >= 12 && time < 18) {
    $hello.text("Good afternoon");
} else if (time >= 18 && time <= 23) {
    $hello.text("Good evening");
}

// scrolling function for clicking
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var difference = ($(window).outerWidth() < 1000)? 30: 60;
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - difference
        }, 1000);
    }

});