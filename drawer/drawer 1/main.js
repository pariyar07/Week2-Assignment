const navChild = document.querySelectorAll('.nav-child');
const toggleNested = document.querySelectorAll('#nav-icon');
const nestedItems = document.querySelector('.nested');

navChild.forEach(nav => nav.addEventListener('click', () => {
            nav.classList.toggle('clicked');
            nav.classList.toggle('nav-child');
}))