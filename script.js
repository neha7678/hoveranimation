document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.querySelector('.hover-box');
    
    hoverBox.addEventListener('click', () => {
        hoverBox.classList.add('click-effect');
        
        // Remove the class after the animation completes to allow it to be re-applied on subsequent clicks
        setTimeout(() => {
            hoverBox.classList.remove('click-effect');
        }, 500); // Match the duration of the animation
    });
});
