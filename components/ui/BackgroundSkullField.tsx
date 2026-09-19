'use client';

import { BackgroundSkull } from './BackgroundSkull';

/**
 * Capa de calaveras fija a la ventana: no se desplaza con la página, así que
 * se ven en todo el sitio sin importar cuánto se haga scroll. Vive detrás de
 * todo el contenido (z-index negativo) — ver `relative z-0` en <main> de
 * cada página, necesario para que el contenido quede por encima.
 */
export function BackgroundSkullField() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
            <BackgroundSkull color="accent" scale={1.8} top="6%" left="4%" rotate={-12} delay={0} />
            <BackgroundSkull color="accent-3" scale={1.3} top="70%" left="8%" rotate={10} delay={1.2} />
            <BackgroundSkull color="accent-4" scale={1.6} top="10%" right="5%" rotate={8} delay={0.6} />
            <BackgroundSkull color="accent-2" scale={1.2} bottom="8%" right="6%" rotate={-7} delay={1.8} />
            <BackgroundSkull color="accent-3" scale={1} bottom="20%" left="46%" rotate={6} delay={2.4} />
        </div>
    );
}
