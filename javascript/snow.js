// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector('.snow-container').appendChild(snowflake);

    // Remove the snowflake when it reaches the bottom
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Function to create multiple snowflakes
function createSnowflakes() {
    for (let i = 0; i < 30; i++) {
        createSnowflake();
    }
}

// Call the function to create snowflakes
createSnowflakes();
