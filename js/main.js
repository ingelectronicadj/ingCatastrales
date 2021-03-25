$(function() {

    // Menu Responsive
    $(".menu-responsive").toggle();

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

//Boton para ir hacia arriba
var btn = $('#buttonBackToTop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});