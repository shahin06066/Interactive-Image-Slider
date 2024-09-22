
//for image slider
const sliderWrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;
const totalImages = images.length;
let isScrolling = false;

// Function to update the image positions
const updateImagePosition = () => {
    const containerWidth = window.innerWidth; // Get viewport width
    const offset = -currentIndex * (containerWidth); // Shift by the entire width of the viewport

    // Translate the wrapper based on the currentIndex, with adjustment for gaps
    sliderWrapper.style.transform = `translateX(${offset + (containerWidth * 0.2)}px)`; 
    // The 0.2 adjustment ensures the first and third images show only 20% of their width
};

// Handle mouse scroll event
window.addEventListener('wheel', (event) => {
    if (isScrolling) return; // Prevent multiple fast scrolls
    isScrolling = true;

    const delta = Math.sign(event.deltaY);

    if (delta > 0) {
        // Scroll down: move to the next image
        currentIndex = (currentIndex + 1) % totalImages;
    } else {
        // Scroll up: move to the previous image
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    updateImagePosition();

    setTimeout(() => {
        isScrolling = false; // Reset scroll lock after transition
    }, 1000); // Match the duration of the transition
});

// Initial image positioning
updateImagePosition();
