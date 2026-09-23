

const gamesSwiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    0: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 2 },
    1024: { slidesPerView: 3, slidesPerGroup: 3 },
  }
});