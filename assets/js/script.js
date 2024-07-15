document.addEventListener('DOMContentLoaded', () => {
    function moveSlider(sliderId, direction) {
        const slider = document.getElementById(sliderId);
        const wrapper = slider.querySelector('.slider-wrapper');
        const items = wrapper.querySelectorAll('.slider-item');
        let currentIndex = parseInt(slider.dataset.currentIndex) || 0;

        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = items.length - 1;
        } else if (currentIndex >= items.length) {
            currentIndex = 0;
        }

        slider.dataset.currentIndex = currentIndex;
        const offset = -currentIndex * 100;
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    window.moveSlider = moveSlider;
});
