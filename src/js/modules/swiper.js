// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

function swiper() {
  const swiper_main = new Swiper(".swiper-main", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true, // Устанавливает, будет ли затухание перекрестным
    },
    speed: 1500, // Скорость перехода
    autoplay: {
      delay: 5000, // Задержка в миллисекундах (3000 мс = 3 секунды)
      disableOnInteraction: true, // Если true, авто-переключение остановится при взаимодействии пользователя с слайдером
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper_gallery = new Swiper(".swiper-gallery", {
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export default swiper;
