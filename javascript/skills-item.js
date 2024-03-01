// Get all skill items
const skillItems = document.querySelectorAll('.skill-item');

// Add event listeners to each skill item
skillItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Rotate the item
        item.style.transform = 'rotate(360deg)';
        // Scale the item
        item.style.transform += 'scale(1.2)';
        // Change opacity
        item.style.opacity = '0.7';
    });

    item.addEventListener('mouseout', () => {
        // Reset transformations
        item.style.transform = 'none';
        // Reset opacity
        item.style.opacity = '1';
    });
});
