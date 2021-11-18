// console.log('I\'m attached');

const navBar = document.querySelector('.menu');
const mobileMenu = document.querySelector('.burger-menu');

mobileMenu.addEventListener('click', () => {
  // console.log('I\'ve been clicked');
  navBar.classList.toggle('show');
});