const hamburgerBtn = document.querySelector('#mobile-menu');
const imgToggle = document.querySelector('#hamburger-img')


let toggle = true;
hamburgerBtn.addEventListener('click', () => {
    toggle = !toggle;
    if(toggle) {
        imgToggle.src = './images/icon-hamburger.svg'
    } else {
        imgToggle.src = './images/icon-close.svg'
    }
})