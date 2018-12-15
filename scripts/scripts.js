const menuButton = document.getElementById('menu-button');
const navbarList = document.getElementById('navbar-list');

menuButton.addEventListener(
    'click',
    function() {
        navbarList.classList.toggle('is-open');
        menuButton.classList.toggle('is-open');
    },
    false
);

if (document.querySelector('.slideshow-container')) {
    let slideIndex = 1;

    showSlide(slideIndex);

    function plusSlides(n) {
        showSlide((slideIndex += n));
    }

    function currentSlide(n) {
        showSlide((slideIndex = n));
    }

    function showSlide(n) {
        var slides = document.getElementsByClassName('mySlides');

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[slideIndex - 1].style.display = 'block';
    }
}
