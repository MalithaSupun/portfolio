document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeWriterEffect, 700); // Delay start by 2000 milliseconds (2 seconds)
});

function typeWriterEffect() {
    // Text to be animated
    const text = document.querySelector('.intro__title').textContent;
    // Delay between each letter (in milliseconds)
    const typingSpeed = 100;

    let index = 0;
    const titleElement = document.querySelector(".intro__title");
    titleElement.textContent = ''; // Clear existing text
    const timer = setInterval(() => {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(timer);
        }
    }, typingSpeed);
}
