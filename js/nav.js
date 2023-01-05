document.addEventListener('DOMContentLoaded', function() {
    if(window.screen.width < 1440) {
        const nav = document.querySelectorAll('.header');
        
        nav.forEach(function(item){
            const navBurger  = item.querySelector('.burger');
            navBurger.addEventListener('click', function(e){
                const navOpen = item.querySelector('.sidebar-nav');
                
                if(navOpen.classList.contains('.nav-hide')) {
                    navBurger.classList.toggle('close');
                    navBurger.classList.toggle('burger');
                    navOpen.classList.toggle('nav-hide');
                    navOpen.classList.toggle('desktop');
                }
                else {
                    const navBlur = item.querySelector('nav');
                    navBlur.addEventListener('click', function(e){
                        navBurger.classList.toggle('close');
                        navBurger.classList.toggle('burger');
                        navOpen.classList.toggle('nav-hide');
                        navOpen.classList.toggle('desktop');
                    });
                }
            }); 
        });
    }

    
});



/*
const sidebarNav = document.querySelector('.sidebar-nav');
    const burger = document.querySelector('.burger:not(.close)');
    
    const burgerOpen = document.querySelector('.sidebar-nav.desktop');
    const burgerClose = document.querySelector('.burger');

    burger.addEventListener('click', function(e) {
        const burgerHide = document.querySelector('.nav-hide');

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

                const close = document.querySelectorAll('.header');
                close.forEach(function(item){
                    item.addEventListener('click', function(e) {
                        sidebarNav.classList.toggle('desktop');
                        
                    });
                });
            }
        }
    });
*/

/*
Если нужно будет прятать при изменении экрана
window.addEventListener('resize', () => {
    if(window.screen.width < 1440) {
        sidebarNav.classList.add('nav-hide');
    } 
    else sidebarNav.classList.remove('nav-hide');
});
*/