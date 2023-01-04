document.addEventListener('DOMContentLoaded', function() {

    const sidebarNav = document.querySelector('.sidebar-nav');
    const burger = document.querySelector('.burger:not(.close)');
    
    const burgerOpen = document.querySelector('.sidebar-nav.desktop');
    const burgerClose = document.querySelector('.burger');
    const burgerHide = document.querySelector('.nav-hide');

    burger.addEventListener('click', function(e) {
        
        if(window.screen.width < 1440) {
            if(burgerOpen) {
                burger.classList.add('close');
                burgerOpen.classList.toggle('desktop');
                burgerOpen.classList.add('nav-hide');
            } 

            if(!burgerHide) {
                burgerClose.addEventListener('click', function(e) {
                    burgerClose.classList.toggle('close');
                });
            }
        }
    }); 
})





/*
Если нужно будет прятать при изменении экрана
window.addEventListener('resize', () => {
    if(window.screen.width < 1440) {
        sidebarNav.classList.add('nav-hide');
    } 
    else sidebarNav.classList.remove('nav-hide');
});
*/