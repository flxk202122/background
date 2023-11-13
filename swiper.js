window.addEventListener('load', function () {
    const swiper = new Swiper('#mainBanner .swiper', {
        loop: true,
        autoplay: true,

        pagination: {
            el: '#mainBanner .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#mainBanner .swiper-button-next',
            prevEl: '#mainBanner .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
    });
})