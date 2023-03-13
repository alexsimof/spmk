
// ..анимация кнопки js

let button = document.querySelector(".menu-toggle"); // находим кнопку
button.addEventListener('click', (e) => {
  e.preventDefault();
  let activ = document.querySelector(".menu__toggle"); // находим блок с меню
  let showMenu = document.querySelector(".nav-mobile"); // находим блок с меню
  
  activ.classList.toggle('activ') // присваеваем класс чтоб показать
  button.classList.toggle('color') // присваеваем класс чтоб показать
  showMenu.classList.toggle('show-menu') // присваеваем класс чтоб показать
});

