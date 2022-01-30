const sideBar = document.querySelector(".sidebar-container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    sideBar.classList.toggle("active");
})