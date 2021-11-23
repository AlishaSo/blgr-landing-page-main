// console.log('I\'m attached');

const navBar = document.querySelector('.menu');
const mobileMenu = document.querySelector('.burger-menu');
const mobileMenuImage = document.querySelector('.mobile-menu-img');

const sublistToggle = document.querySelectorAll('.nav-item-sublist');

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

sublistToggle.forEach(item => 
  item.addEventListener('click', event => {
    const currentSub = item.children[1];
    item.classList.toggle('arrow-up');
      currentSub.classList.toggle('show');
    console.log(item);
  }));
