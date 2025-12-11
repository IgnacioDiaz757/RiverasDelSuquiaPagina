/**
 * Project Filters
 * Gestiona el filtrado de proyectos en la galería
 */

(function() {
    'use strict';

    // Elementos del DOM
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    /**
     * Filtra los proyectos según la categoría seleccionada
     * @param {string} filter - Categoría a filtrar ('all' para mostrar todos)
     */
    function filtrarProyectos(filter) {
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    /**
     * Actualiza el estado activo de los botones de filtro
     * @param {HTMLElement} activeButton - Botón que debe estar activo
     */
    function actualizarBotonesActivos(activeButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    /**
     * Inicializa los event listeners para los botones de filtro
     */
    function inicializarFiltros() {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                actualizarBotonesActivos(this);
                filtrarProyectos(filter);
            });
        });
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarFiltros);
    } else {
        inicializarFiltros();
    }

})();

