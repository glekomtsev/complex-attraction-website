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

  const swiper_layouts = new Swiper(".swiper-layouts", {
    // Optional parameters
    centeredSlides: true,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 160,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      780: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
    },
  });
}

export default swiper;
