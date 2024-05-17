// Add event listeners to the images to make them larger on click
const images = document.querySelectorAll('img');
images.forEach(image => {

    image.addEventListener('mouseover', () =>{
        image.style.width = '50%';
        image.style.height = '50%';
    })
    image.addEventListener('mouseout', () => {
        image.style.width = '30%';
        image.style.height = '30%';
    })
});