const swiperPrise = document.querySelector('.swiper');
let priceSwiperSetting = {
    followFinger: false,
    slideClass: 'tables-td',
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    watchOverflow: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
};

let mySwiper;

function get_SwiperPrise() {

    mySwiper = new Swiper(swiperPrise, priceSwiperSetting);

    swiperPrise.dataset.mobile = 'true';
}

if(window.screen.width < 768) get_SwiperPrise();

window.addEventListener('resize', () => {
    if (window.screen.width < 768 && swiperPrise.dataset.mobile == 'false') get_SwiperPrise();
    

    if (window.screen.width >= 768) {
        swiperPrise.dataset.mobile = false;

        if(swiperPrise.classList.contains('swiper-initialized')) mySwiper.destroy();
    }
});