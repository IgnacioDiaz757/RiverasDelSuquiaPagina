/**
 * Navbar Mobile Menu Handler
 * Mejora el comportamiento del menú hamburguesa en dispositivos móviles
 * Compatible con Bootstrap 4 y jQuery
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        const $navbarToggler = $('.navbar-toggler');
        const $navbarCollapse = $('#navbarCollapse');
        const $navLinks = $('#navbarCollapse .nav-link');

        if ($navbarToggler.length === 0 || $navbarCollapse.length === 0) {
            return;
        }

        // Cerrar el menú cuando se hace clic en un enlace (solo en móviles)
        $navLinks.on('click', function() {
            // Verificar si estamos en modo móvil (menú colapsado)
            if ($(window).width() < 992) {
                // Cerrar el menú usando Bootstrap collapse
                $navbarCollapse.collapse('hide');
                
                // Actualizar el estado del botón hamburguesa
                $navbarToggler.attr('aria-expanded', 'false');
                $navbarToggler.addClass('collapsed');
            }
        });

        // Asegurar que el botón hamburguesa funcione correctamente
        $navbarToggler.on('click', function() {
            const isExpanded = $(this).attr('aria-expanded') === 'true';
            
            // El estado se actualiza automáticamente por Bootstrap,
            // pero nos aseguramos de que esté sincronizado
            setTimeout(function() {
                const currentExpanded = $navbarCollapse.hasClass('show');
                $navbarToggler.attr('aria-expanded', currentExpanded);
                
                if (currentExpanded) {
                    $navbarToggler.removeClass('collapsed');
                } else {
                    $navbarToggler.addClass('collapsed');
                }
            }, 100);
        });

        // Cerrar el menú cuando se redimensiona la ventana a desktop
        $(window).on('resize', function() {
            if ($(window).width() >= 992) {
                if ($navbarCollapse.hasClass('show')) {
                    $navbarCollapse.collapse('hide');
                    $navbarToggler.attr('aria-expanded', 'false');
                    $navbarToggler.addClass('collapsed');
                }
            }
        });

        // Escuchar eventos de Bootstrap collapse para mantener sincronizado el estado
        $navbarCollapse.on('show.bs.collapse', function() {
            $navbarToggler.attr('aria-expanded', 'true');
            $navbarToggler.removeClass('collapsed');
        });

        $navbarCollapse.on('hide.bs.collapse', function() {
            $navbarToggler.attr('aria-expanded', 'false');
            $navbarToggler.addClass('collapsed');
        });
    });

})(jQuery);

