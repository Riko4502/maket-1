/*import Swiper from 'swiper';*/

var slider_nodes = document.querySelectorAll('.swiper');

var sliders = [];
let swiper_setting = {
    followFinger: false,
    slideClass: 'swiper-slide',
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    watchOverflow: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
}

function mobileSlider() {
   
    [].forEach.call(slider_nodes, function(slider_node) {
        var swiper = new Swiper(slider_node, swiper_setting);
        
        sliders.push(swiper);

        if(window.screen.width < 768){
            slider_node.dataset.mobile = 'true';
            return sliders;
        }
        
        if(slider_node.classList.contains('swiper-initialized')) 
        {
            slider_node.dataset.mobile = 'false';
            swiper.disable();
            return swiper.destroy();
        }
    });
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});

const btn = document.querySelectorAll('.btn');

for(let i = 0; i < btn.length; i++) {
    
    let button = btn[i];

    button.addEventListener('click', function(e) {

        const list = document.querySelectorAll('.swiper-wrapper');
        const span = document.querySelectorAll('.span');
    
        button.classList.toggle('arrows');
        list[i].classList.toggle('swiper-wrapper--active');
    
        list[i].classList.contains('swiper-wrapper--active') ?  span[i].textContent = 'Показать все' : span[i].textContent = 'Скрыть';
    
    })
}