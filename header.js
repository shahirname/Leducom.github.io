var header = document.querySelector("header");
var nav = document.querySelectorAll("header nav a");

function activateHeader(){
    header.classList.toggle("header_2", window.scrollY > 0);
    nav.forEach(link => {
        link.classList.toggle("nav_2", window.scrollY > 0);
    });
}

window.addEventListener("scroll", activateHeader);