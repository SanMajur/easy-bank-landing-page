const hamburgerBtn = document.querySelector('#mobile-menu');
const imgToggle = document.querySelector('#hamburger-img')
const navbar = document.querySelector('nav')

let toggle = true;
hamburgerBtn.addEventListener('click', () => {
    toggle = !toggle;
    if(toggle) {
        imgToggle.src = './images/icon-hamburger.svg'
        navbar.classList.remove('open')
    } else {
        imgToggle.src = './images/icon-close.svg'
        navbar.classList.add('open')
    }
})