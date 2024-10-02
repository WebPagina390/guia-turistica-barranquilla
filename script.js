// Inicializa la animación de AOS (Animate on Scroll)
AOS.init();

// Desplazamiento suave al hacer clic en los enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Efecto de desplazamiento suave
        });
    });
});


// Inicializa el carrusel de imágenes usando Slick
$('.carousel').slick({
    dots: false,       // Ocultar los puntos
    infinite: true,    // Hace que el carrusel sea infinito
    speed: 500,        // Velocidad de transición entre imágenes
    slidesToShow: 1,   // Muestra una imagen a la vez
    slidesToScroll: 1, // Desliza una imagen a la vez
    prevArrow: '<button type="button" class="slick-prev">←</button>', // Flecha izquierda
    nextArrow: '<button type="button" class="slick-next">→</button>'  // Flecha derecha
});
