/**
 * Separador decorativo entre secciones: una línea que se desvanece en los
 * bordes con un pequeño rombo centrado — lectura clara de simple adorno, no
 * de control interactivo (a diferencia de una fila de puntos, que se
 * confunde con un indicador de carrusel).
 */
export function StudDivider() {
    return (
        <div aria-hidden="true" className="relative h-px my-3 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[var(--color-accent)]" />
        </div>
    );
}
