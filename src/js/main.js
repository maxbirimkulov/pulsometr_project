$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            autoHeight: true,
        }
    );
// Go to the next item
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    } );
// Go to the previous item
    $('.owl-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    // $('ul.catalog__caption').on('click', 'li:not(catalog__tab_active)', function () {
    //     $(this)
    //         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    //         .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    // });
    $('ul.catalog__caption').each(function(i) {
        var storage = localStorage.getItem('tab' + i);
        if (storage) {
            $(this).find('li').removeClass('catalog__tab_active').eq(storage).addClass('catalog__tab_active')
                .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq(storage).addClass('catalog__content_active');
        }
    });

    $('ul.catalog__caption').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        var ulIndex = $('ul.catalog__caption').index($(this).parents('ul.catalog__caption'));
        localStorage.removeItem('tab' + ulIndex);
        localStorage.setItem('tab' + ulIndex, $(this).index());
    });


    $('.catalog__model-link').each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault()
                $('.catalog__model').eq(i).addClass('catalog__model_active');
                $('.catalog__back-info').eq(i).addClass('catalog__back-info_active')
            })
    });
    $('.catalog__back-info-link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault()
            $('.catalog__model').eq(i).removeClass('catalog__model_active');
            $('.catalog__back-info').eq(i).removeClass('catalog__back-info_active')
        })
    });
    $('#phone').inputmask("+\\9\\96 (999) 99-99-99");

    $('.header__btn , .first-screen__btn').on('click', function () {
        $('.overlay , .popup__consultation ').fadeIn('slow')
    });

    $('.catalog__btn').each(function (i) {
        $(this).on('click', function () {
            $('.popup__buy-subtitle').text($('.catalog__model-title').eq(i).text());
            $('.overlay , .popup__buy').fadeIn('slow')
        });
    });

    $('.consult-form__btn').on('click', function (e) {
        e.preventDefault()
        $('.overlay , .popup__thanks').fadeIn('slow')
        $('.popup__consultation , .popup__buy').fadeOut('1')

    });

    $('.popup__close').on('click', function () {
        $('.overlay , .popup__thanks, .popup__buy, .popup__consultation ').fadeOut('slow')
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('.backToTop').fadeIn('slow')
        } else {
            $('.backToTop').fadeOut('slow')
        }
    });

    $('.burger').on('click', function () {
        $('.burger, .header__nav' ).toggleClass('active')
    })


}, {passive: true});

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.878962, 74.595099],
        zoom: 18
    });
    var myIcon = DG.icon({
        iconUrl: 'https://cdn0.iconfinder.com/data/icons/maps-and-pins-3/32/pin_map_target_locate-512.png',
        iconSize: [50, 50],
        alt: 'icon'

    });
    DG.marker([42.878982, 74.595075], {icon: myIcon}).addTo(map).bindPopup('IT-RUN ACADEMY');
}, {passive: true});


