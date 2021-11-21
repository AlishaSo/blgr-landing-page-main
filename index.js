// console.log('I\'m attached');

const navBar = document.querySelector('.menu');
const mobileMenu = document.querySelector('.burger-menu');
const mobileMenuImage = document.querySelector('.mobile-menu-img');

mobileMenu.addEventListener('click', () => {
  // console.log('I\'ve been clicked');
  navBar.classList.toggle('show');

  if(navBar.classList.contains('show')) {
    mobileMenuImage.src = 'images/icon-close.svg';
  }
  else {
    mobileMenuImage.src = 'images/icon-hamburger.svg';
  }
});