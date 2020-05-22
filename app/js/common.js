$(document).ready(function () {

    //SLIDERS in page MAIN
    $(".slider-one").slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }

        ]
    });
    $(".slider-two").slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    variableWidth: false,
                }
            },
        ]
    });

    $(".slider-products").slick({
        dots: false,
        arrows: true,
        // infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });
    $(".parks-inner__slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 8000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
    });

    //HEADER scroll
    $(document).on("scroll", function() {
        window.scrollY > 10 ? $(".gradient, .gradient__revealer").css("opacity", window.scrollY / 150) : $(".gradient, .gradient__revealer").css("opacity", window.scrollY / 500)
        window.scrollY > 500 ? $(".up").addClass('show') : $(".up").removeClass('show');
    });

    //SELECTS
    $(".select").click(function () {
        $(this).toggleClass('active');
        $(this).find(".select-drop").slideToggle(300);
    });
    $(".select-link").click(function (e) {
        e.stopPropagation();
        let textOption = $(this).text();
        $(this).addClass('active').parent().siblings().find(".select-link").removeClass('active');
        $(this).closest(".select").removeClass('active').find(".select-item").text(textOption);
        $(this).closest(".select-drop").slideUp(300);
    });

    //SCROLL DOWN
    $(".scroll-down").click(function () {
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
        return false;
    });

    //SCROLL UP
    $(".up").click(function () {
        $('html, body').animate({scrollTop: $("html").offset().top}, 500);
        return false;
    });

    //MENU burger
    $(".burger").click(function () {
        $(this).toggleClass('active');
        $(".menu").toggleClass('active');
    });

    new WOW().init();

    //tabs
    $(".tab").on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".content-item").eq(index).addClass('active').siblings().removeClass('active');
        new WOW().init();
    });

    //product inner
    $(".slider-img").click(function () {
        let srcSlide = $(this).attr("src");
        $(".pruducts-inner__img").attr("src", srcSlide);
        $(".pruducts-inner").addClass('active');
        $(".footer").hide(300);
    });
    $(".close").click(function () {
        $(".pruducts-inner").removeClass('active');
        $(".footer").show();
    });
    // $(".pruducts-inner__prev").click(function() {
    //     $(".slider-products").slick('slickPrev');
    //     let srcSlide = $(".slider-products .slick-center .slider-img").attr("src");
    //     $(".pruducts-inner__img").attr("src", srcSlide);
    // });
    // $(".pruducts-inner__next").click(function() {
    //     $(".slider-products").slick('slickNext');
    //     let srcSlide = $(".slider-products .slick-center .slider-img").attr("src");
    //     $(".pruducts-inner__img").attr("src", srcSlide);
    // });

    //arrow map
    $(".more-map").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(".parks-inner #map").toggleClass('active');
    });

    //years active
    $(".years-item").click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
    });
});


