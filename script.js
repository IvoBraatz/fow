document.addEventListener("DOMContentLoaded", function() {
    showSlide('carrosel1', 0);
    showSlide('carrosel2', 0);
    showSlide('carrosel3', 0);
});

function showSlide(carroselId, index) {
    const carrosel = document.getElementById(carroselId);
    const slides = carrosel.querySelectorAll('.content');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    carrosel.dataset.currentSlide = index;
}

function moveNext(carroselId) {
    const carrosel = document.getElementById(carroselId);
    const slides = carrosel.querySelectorAll('.content');
    let currentSlide = parseInt(carrosel.dataset.currentSlide);
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(carroselId, currentSlide);
}

function movePrev(carroselId) {
    const carrosel = document.getElementById(carroselId);
    const slides = carrosel.querySelectorAll('.content');
    let currentSlide = parseInt(carrosel.dataset.currentSlide);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(carroselId, currentSlide);
}
