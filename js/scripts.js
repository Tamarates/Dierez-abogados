/*!
    * Start Bootstrap - Grayscale v6.0.0 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

//Modal dinamic content

/*function new_modal(head, content){

    var random = Math.floor(1000 + Math.random() * 9000);

    var modal_html = '<div id="modal'+ random +'">' +
     '<div id="outer">' +
      '<div id="inner">' +
       '<div id="top">'+head+'</div>' +
        '<span><img class="btnClose bCancel" src="#"></span>' +
       '<div class="modalCnt">'+content+'</div>' +
        '<div class="btn">' +
         '<span class="btnText">OK</span>' +
        '</div>' +
      '</div> <!-- Inner -->' +
     '</div> <!-- Outer -->' +
    '</div>';

    $('body').append(modal_html);

    return 'modal' + random;

}

$( document ).ready(function() {
    modal1 = new_modal("<h3>Headline 1</h3>", "<p>Content 1</p>");
    $('#' + modal1).show();
    modal2 = new_modal("<h3>Headline 2</h3>", "<p>Content 2</p>");
    $('#' + modal2).show();
    modal3 = new_modal("<h3>Headline 2</h3>", "<p>Content 3</p>");
    $('#' + modal2).show();
    modal4 = new_modal("<h3>Headline 2</h3>", "<p>Content 3</p>");
    $('#' + modal2).show();
});*/