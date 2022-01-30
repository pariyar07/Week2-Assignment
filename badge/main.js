const toggleIcon = document.querySelector('#toggle-icon');
const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
    toggleIcon.classList.toggle('active');
})