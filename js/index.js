(function($) {
    "use strict"; 
    // Page Scrolling
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    // Highlight navigation as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
})(jQuery); 


function video1(){
    document.getElementById('video').src = 'https://www.youtube.com/embed/9qozPYsfO2A'
}
function video2(){
    document.getElementById('video').src = 'https://www.youtube.com/embed/rMWIs8JxRnA'
}