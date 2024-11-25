document.addEventListener('DOMContentLoaded', function () {
    // Menú hamburguesa
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu').querySelector('ul');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Botón para mostrar/ocultar contenido
    const button = document.getElementById("toggleBtn");
    const content = document.getElementById("contenido");

    if (button) {
        button.addEventListener("click", function () {
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }
});

// Personalización de Lightbox (opcional)
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Imagen %1 de %2"
});
