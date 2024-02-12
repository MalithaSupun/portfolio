// JavaScript for animation
window.onload = function() {
    var intro = document.querySelector('.intro');

    // Hide the logo initially
    intro.style.opacity = 0;

    // Define animation for the logo
    anime({
        targets: '.intro',
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 500 // Delay the animation by 500ms
    });
};



