const images = document.querySelectorAll('.slider-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const caption = document.querySelector('.caption');

let currentIndex = 0;

// Initialize the slider
function updateSlider() {
    const totalImages = images.length;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Navigate to the next image
nextButton.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
});

// Navigate to the previous image
prevButton.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

// Auto-slide functionality
setInterval(() => {
    currentIndex++;
    updateSlider();
}, 3000);

// Initialize caption
updateSlider();