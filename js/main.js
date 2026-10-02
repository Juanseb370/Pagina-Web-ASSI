// js/main.js

// Esperamos a que todo el HTML cargue antes de ejecutar el JS
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DEL MENÚ MÓVIL
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle && navMenu) {
        const toggleMenu = () => {
            navMenu.classList.toggle('is-active');
        };

        navToggle.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('is-active')) {
                    navMenu.classList.remove('is-active');
                }
            });
        });
    }

    // ==========================================
    // 2. LÓGICA DE ANIMACIÓN SECUENCIAL DE TARJETAS
    // ==========================================
    const cards = document.querySelectorAll('.card');
    
    // Validamos que existan tarjetas en la página antes de ejecutar el código
    if (cards.length > 0) {
        let currentCardIndex = 0; // Usamos let porque este valor cambiará[cite: 18]
        let animationInterval;

        // Función con una sola responsabilidad: iluminar la tarjeta correcta[cite: 18]
        const highlightCard = (index) => {
            cards.forEach(card => card.classList.remove('is-active'));
            cards[index].classList.add('is-active');
        };

        const startCardAnimation = () => {
            animationInterval = setInterval(() => {
                currentCardIndex++;
                if (currentCardIndex >= cards.length) {
                    currentCardIndex = 0; 
                }
                highlightCard(currentCardIndex);
            }, 2500); 
        };

        // Iniciar la animación
        startCardAnimation();

        // Pausar si el usuario interactúa
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                clearInterval(animationInterval); 
                cards.forEach(c => c.classList.remove('is-active')); 
            });

            card.addEventListener('mouseleave', () => {
                startCardAnimation();
            });
        });
    }

    // ==========================================
    // 3. ENVÍO DE FORMULARIO SIN SALIR DE LA PÁGINA (AJAX)
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            // 1. Evitamos que el navegador cambie de página hacia Formspree
            e.preventDefault(); 
            
            // 2. Recolectamos los datos y seleccionamos el botón
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            // 3. Mejoramos la UX cambiando el texto del botón mientras envía
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // 4. Intentamos enviar los datos usando funciones asíncronas y try/catch[cite: 28]
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Si todo sale bien, avisamos al usuario
                    alert('¡Gracias! Tu mensaje ha sido enviado con éxito.');
                    
                    // ¡AQUÍ ESTÁ LA SOLUCIÓN! Esto vacía todos los campos automáticamente
                    contactForm.reset(); 
                } else {
                    alert('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.');
                }
            } catch (error) {
                // Manejamos el error si el usuario se queda sin internet[cite: 28]
                alert('Error de conexión. Verifica tu internet e intenta de nuevo.');
            } finally {
                // 5. Pase lo que pase, restauramos el botón a su estado normal
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

}); // <-- Aquí se cierra el bloque DOMContentLoaded principal