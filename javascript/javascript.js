const navbarElements = document.querySelectorAll(".nav-link");
const page = window.location.pathname.slice(14,15);

navbarElements[page].style.opacity = ".4";
console.log(page);



