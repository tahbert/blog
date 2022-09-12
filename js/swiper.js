var swiper = new Swiper(".swiper_inf", {
    slidesPerView: 'auto',
    freeMode: true,
    // autoplay: {
    //     delay: 0,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true
    // },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    // on: {
    //     autoplayPause: function(swiper) {
    //         swiper.params.speed = 100;
    //     },
    //     autoplayResume: function(swiper) {
    //         swiper.params.speed = 5000;
    //     }
    // },
});

var swiper = new Swiper(".swiper_moment", {
    slidesPerView: 'auto',
    freeMode: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

var swiper = new Swiper(".swiper-nav", {
    slidesPerView: 'auto',
    freeMode: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
});

var swiper = document.querySelectorAll(".swiper");
swiper.forEach((i) => {
    var swiperIcon = i.querySelectorAll(".icon-swiper");
    i.onmouseover = () => {
        swiperIcon.forEach((i) => {
            i.classList.add("active");
        });
    };

    i.onmouseout = () => {
        swiperIcon.forEach((i) => {
            i.classList.remove("active");
        });
    };
});


