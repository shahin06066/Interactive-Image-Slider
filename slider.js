const sliderWrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;
const totalImages = images.length;

// Function to update the image positions
const updateImagePosition = () => {
    const containerWidth = window.innerWidth; // Get viewport width
    let offset = 0;

    // Calculate custom offsets for the current index
    if (currentIndex === 0) {
        offset = containerWidth * 0.2; // Adjust to show 20% of the first image
    } else if (currentIndex === 1) {
        offset = -(containerWidth * 0.4); // 60% for second image
    } else if (currentIndex === 2) {
        offset = -(containerWidth * 0.8); // 20% for the third image
    }

    sliderWrapper.style.transform = `translateX(${offset}px)`;
};

// Function to move to the next image
const nextImage = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImagePosition();
};

// Function to move to the previous image
const previousImage = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateImagePosition();
};

// Event listeners for the arrow buttons
rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', previousImage);

// Initial image positioning
updateImagePosition();
