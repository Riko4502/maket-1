const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {

    mySwiper = new Swiper('.swiper', {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    slider.dataset.mobile = 'true';
}

if(window.screen.width < 768) mobileSlider();

window.addEventListener('resize', () => {
    if (window.screen.width < 768 && slider.dataset.mobile == 'false') mobileSlider();
    

    if (window.screen.width >= 768) {
        slider.dataset.mobile = false;

        if(slider.classList.contains('swiper-initialized')) mySwiper.destroy();
    }
});

const btn = document.querySelector('.btn');
const list = document.querySelector('.swiper-wrapper');
const span = document.querySelector('.span');

btn.addEventListener('click', function(e) {
    btn.classList.toggle('arrows');
    list.classList.toggle('swiper-wrapper--active');

    list.classList.contains('swiper-wrapper--active') ?  span.textContent = 'Скрыть' : span.textContent = 'Показать все';

})