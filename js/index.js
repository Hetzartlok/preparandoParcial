// Add event listeners to the images to make them larger on click
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', () => {
        image.style.width = '600px';
        image.style.height = '502px';
    });
});