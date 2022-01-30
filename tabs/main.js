const tabs = document.querySelectorAll('.tabs-container');

tabs.forEach(tab => tab.addEventListener('click', () => {
    tab.classList.toggle('clicked');
}));
