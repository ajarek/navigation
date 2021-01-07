const ham = document.querySelector('.ham');
const ix = document.querySelector('.ix');
const nav = document.querySelector('.nav');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');

ham.addEventListener('click', () => {
    nav.style.left = '0'
    nav1.style.left = '20px'
    nav2.style.left = '40px'
    nav.style.transition = '3s'
    nav1.style.transition = '2s'
    nav2.style.transition = '1s'
})
ix.addEventListener('click', () => {
    nav.style.left = '-500px'
    nav1.style.left = '-500px'
    nav2.style.left = '-500px'
    nav.style.transition = '1s'
    nav1.style.transition = '2s'
    nav2.style.transition = '3s'
})