const burgerMenu = document.querySelector('.burger-menu');
const links = document.getElementsByClassName('.link');
const sections = document.getElementsByClassName('.vh-container');
const sideNav = document.querySelector('.sidenav-overlay');


// Event Listenters
burgerMenu.addEventListener('click', openSideNav);


function openSideNav () {
  sideNav.classList.toggle('active')
}
