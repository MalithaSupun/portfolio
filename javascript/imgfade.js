document.addEventListener("DOMContentLoaded", function() {
    setTimeout(slideInEffect, 1400); // Delay slide-in effect by 2 seconds
});

function slideInEffect() {
    const introImg = document.querySelector('.intro__img1');
    introImg.style.opacity = '1'; // Show the image
    introImg.style.transform = 'translateX(0)'; // Slide the image into view
}
