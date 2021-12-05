// console.log('I\'m attached');

const navBar = document.querySelector('.menu');
const mobileMenu = document.querySelector('.burger-menu');
const mobileMenuImage = document.querySelector('.mobile-menu-img');

const sublistToggle = document.querySelectorAll('.nav-item-sublist');

const screenWidth = screen.width;
const secOneImg = document.querySelector('.sec-1-img');
const secThreeImg = document.querySelector('.sec-3-img');

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
    console.log('working');
    const currentSub = item.children[1];
    const currentArrowActive = document.querySelector('.nav-item-sublist.nav-item.arrow-up');
    const currentSubActive = document.querySelector('.sublist.show');
    
    currentArrowActive?.classList.remove('arrow-up');
    currentSubActive?.classList.remove('show');
    item.classList.add('arrow-up');
    currentSub.classList.toggle('show');
  })
);

// window.addEventListener('resize', () => {
//   // console.log('resizing');
  
// });
if(screenWidth >= 751) {
  secOneImg.setAttribute('src', 'images/illustration-editor-desktop.svg');
  secThreeImg.setAttribute('src', 'images/illustration-laptop-desktop.svg');

}