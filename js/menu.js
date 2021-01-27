const menuToggle = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');
const menu = document.querySelector('.menu');
const menu_list = document.querySelector('.menu-list');

menuToggle.addEventListener('click', function()  {
    menuToggle.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    showcase.classList.toggle('is-active');
    menu_list.classList.toggle('is-active');
}
)
