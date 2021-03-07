// Project Slider

// <!-- Initialize Swiper -->

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    spaceBetween: 60,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
    },

});