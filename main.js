const hamburger = document.querySelector('.ham-menu')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

const btns = document.querySelectorAll('.slide-btn');
const videoSlide = document.querySelectorAll('.video-slide');
const textContent = document.querySelectorAll('.text');

var slideNav = function (manual) {

    btns.forEach((btn) => {
        btn.classList.remove('active');

    });

    videoSlide.forEach((video) => {
        video.classList.remove('active');
    });

    textContent.forEach((content) => {
        content.classList.remove('active');
    });

    btns[manual].classList.add('active');
    videoSlide[manual].classList.add('active');
    textContent[manual].classList.add('active');
}


btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        slideNav(i);
    });
});

