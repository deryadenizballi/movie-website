headerSlider();


function headerSlider() {
  var swiper = new Swiper(".header-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        freeMode: true,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
      }
    }
  });
}