const navicon = document.querySelector(".navicon");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

navicon.addEventListener("click", toggleSidebar);
close.addEventListener("click", toggleSidebar);

function toggleSidebar() {
    sidebar.classList.toggle("sidebar--open");
}