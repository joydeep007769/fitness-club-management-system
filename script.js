let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['physical Fitness', 'weight gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backspeed: 60,
    backDelay: 1000,
    loop: true,
  });
