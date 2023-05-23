// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
}

function cerrar() {
    menu.click();
}

// event
menu.addEventListener('click', toggleMenu, false);