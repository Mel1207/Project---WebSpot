const burgerMenu = document.querySelector('.burger-menu');
const links = document.getElementsByClassName('.link');
const sections = document.getElementsByClassName('.vh-container');
const sideNav = document.querySelector('.sidenav-overlay');
const closeNav = document.querySelector('.close-icon');


// Event Listenters
burgerMenu.addEventListener('click', openSideNav);
closeNav.addEventListener('click', closeSideNav);


function openSideNav () {
  sideNav.classList.toggle('active')
}

function closeSideNav () {
  sideNav.classList.remove('active')
}
