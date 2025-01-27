var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 14,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
});
