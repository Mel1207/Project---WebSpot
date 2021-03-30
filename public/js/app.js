// new fullpage ('#fullPage', {
//     autoScrolling: true,
//     licenseKey: null
// })

// const links = document.querySelectorAll('.link');
// const sections = document.querySelectorAll('.vh-container');


// function changeLinkState () {
//     let index = sections.length;

//     white(--index && window.scrollY + 50 < sections[index].offsetTop) {}
//         links.forEach((link) => link.classList.remove('active'));
//         links[index].classList.add('active');
    
// }

// changeLinkState();
// window.addEventListener('scroll', changeLinkState);


const links = document.getElementsByClassName('.link');
const sections = document.getElementsByClassName('.vh-container');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)

});

event.preventDefault();

