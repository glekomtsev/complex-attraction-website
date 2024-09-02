function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");
  const navLinks = document.querySelectorAll(".mobile-nav__link a");

  // Функция для закрытия меню
  function closeMobileNav() {
    nav.classList.remove("mobile-nav--open"); // Удаляем класс 'mobile-nav--open' для закрытия меню
    menuIcon.classList.remove("nav-icon--active"); // Сбрасываем состояние иконки
    document.body.classList.remove("no-scroll"); // Разрешаем прокрутку страницы
  }

  // Открытие/закрытие меню при клике на кнопку
  navBtn.onclick = function() {
    nav.classList.toggle("mobile-nav--open"); // Тогглим класс 'mobile-nav--open'
    menuIcon.classList.toggle("nav-icon--active"); // Тогглим состояние иконки
    document.body.classList.toggle("no-scroll"); // Тогглим запрет прокрутки страницы
  };

  // Добавляем обработчик события на каждую ссылку в мобильном меню
  navLinks.forEach((link) => {
    link.addEventListener("click", function(event) {
      closeMobileNav(); // Закрываем меню при клике на любую ссылку
    });
  });
}

export default mobileNav;
