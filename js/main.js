$(function() {

    // Menu Responsive
    document.querySelector(".menu-responsive").style.visibility = "hidden";
    $(".menu-responsive").toggle();
    document.querySelector(".menu-responsive").style.visibility = "visible";

    $(".menu-bars").on("click", function() {
        $(".menu-responsive").toggle("slow");
    });

    $(".submenu-icon-movil").on("click", function() {
        $(".submenu-movil").toggle("slow");
    });

    $(".submenu-icon").on("click", function() {
        $(".submenu").toggle("slow");
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

    // Text Animate
    const sentences = ["Avalúos", "Sistemas Geográficos - SIG", "Visores de Mapas", "Levantamientos Topográficos", "Drones", "Licencias Urbanísticas"];
    let i = 0;

    setInterval(function() {
        $(".text-animate").fadeOut(function() {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);

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


/**Slick Corousel**/
$(document).ready(function() {
    $('.carousel').slick({
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        centerMode: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }]
    });
});


function descriptionMember(id_member) {
    var nameMember = document.getElementById(id_member).children[1].children[0].textContent;
    var descriptionMember = document.getElementById(id_member).children[1].children[1].textContent;
    Swal.fire({
        background: '#021013',
        html: '<h3 style="color:#fff;font-weight:600;">' + nameMember + '</h3> <p style="color:#fff;">' + descriptionMember + '</p>',
        showCloseButton: true,
        showConfirmButton: false
    });
}

function showServiceModal(id_service) {
    altTxt = document.getElementById(id_service).children[0].alt;
    urlImg = document.getElementById(id_service).children[0].src;
    Swal.fire({
        background: '#021013',
        showCloseButton: true,
        showConfirmButton: false,
        imageUrl: urlImg,
        imageAlt: altTxt
    });
}