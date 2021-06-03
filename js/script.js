const pageSlider = new Swiper('.swiper-container', {
  // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',


    keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,

    },
    mousewheel: {
        sensitivity: 1,
    },

    speed: 800,

     observer: true,

    observeParents: true,

    observeSlideChildren: true,




  // If we need pagination
    pagination: {
        el: '.page__pagination',
        tyoe: '.bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',
    },
//    scrollbar: {
//
//        el: '.page__scroll',
//        dragClass: 'page__drag-scroll',
//
//        draggable: true,
//    }
     init: false,
      on: {
        init: function() {
            menuSlider();
        },

        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
    },
});



let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.lenght; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function(e) {
                menuSliderRemove() ;
                pageSlider.slideTo(index, 800);
                menuLink.classList.add('_active');
                e.preventDefault();
            });
        }
    }

}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

pageSlider.init();
;
const iconBurger = document.querySelector('.burger__icon');
const menuBurger = document.querySelector('.burger');

if (iconBurger) {
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconBurger.classList.toggle('active');
        menuBurger.classList.toggle('active');
    })
}


;




