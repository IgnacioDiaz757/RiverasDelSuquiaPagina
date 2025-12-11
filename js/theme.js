/**
 * Theme Management - Dark Mode & Light Mode
 * Gestiona el cambio entre modo oscuro y claro
 */

(function() {
    'use strict';

    // Elementos del DOM
    const modoToggle = document.getElementById('modo-toggle');
    const iconoModo = document.getElementById('icono-modo');
    const MODO_OSCURO = 'oscuro';
    const MODO_CLARO = 'claro';

    /**
     * Inicializa el modo según la preferencia guardada
     */
    function inicializarModo() {
        const modoGuardado = localStorage.getItem('modo');
        
        if (modoGuardado === MODO_OSCURO) {
            activarModoOscuro();
        } else {
            activarModoClaro();
        }
    }

    /**
     * Activa el modo oscuro
     */
    function activarModoOscuro() {
        document.body.classList.add('dark-mode');
        iconoModo.classList.remove('fa-moon');
        iconoModo.classList.add('fa-sun');
        localStorage.setItem('modo', MODO_OSCURO);
    }

    /**
     * Activa el modo claro
     */
    function activarModoClaro() {
        document.body.classList.remove('dark-mode');
        iconoModo.classList.remove('fa-sun');
        iconoModo.classList.add('fa-moon');
        localStorage.setItem('modo', MODO_CLARO);
    }

    /**
     * Alterna entre modo oscuro y claro
     */
    function toggleModo() {
        if (document.body.classList.contains('dark-mode')) {
            activarModoClaro();
        } else {
            activarModoOscuro();
        }
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarModo);
    } else {
        inicializarModo();
    }

    // Event listener para el botón de toggle
    if (modoToggle) {
        modoToggle.addEventListener('click', toggleModo);
    }

})();

