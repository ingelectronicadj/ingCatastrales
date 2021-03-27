$(function() {

    // Menu Responsive
    document.querySelector(".menu-responsive").style.visibility = "hidden";
    $(".menu-responsive").toggle();
    document.querySelector(".menu-responsive").style.visibility = "visible";

    $(".menu-bars").on("click", function() {
        $(".menu-responsive").toggle("slow");
    });


    // Scroll click on menu
    $(".scroll").on("click", function() {
        $(".menu-responsive").hide();
        $(this).each(function() {
            const sectionTop = $(this.hash).offset().top;
            $("html, body").animate({
                scrollTop: sectionTop
            }, 1500);
        });
    });

});

// boton para ir arriba y boton para whatsapp
var btn = $('#buttonBackToTop');
var btn2 = $('#id_whatsapp');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        btn2.addClass('show');
    } else {
        btn.removeClass('show');
        btn2.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});