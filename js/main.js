// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Función para alternar el menú
    const toggleMenu = () => {
        navMenu.classList.toggle('is-active');
    };

    // Escuchar el clic en el botón de hamburguesa
    navToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú al hacer clic en un enlace (útil para Single Page Applications o anclas)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('is-active')) {
                navMenu.classList.remove('is-active');
            }
        });
    });
});