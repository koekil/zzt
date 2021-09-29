let mySwiper = new Swiper ('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },
    effect : 'fade',
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
});