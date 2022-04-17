/**
 * Import dependencies from node_modules
 * see commented examples below
 */

+(function () {
  const swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
})();
