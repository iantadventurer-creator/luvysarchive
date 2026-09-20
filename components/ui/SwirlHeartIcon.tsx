/** Corazón con un rulo en cada lóbulo, como el de referencia — usado en el
 * visor de fotos como reemplazo de las flechas de anterior/siguiente
 * (rotado 90° para quedar "acostado" y apuntar hacia el lado). */
export function SwirlHeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 40
           C 10 29, 3 20, 3 12.5
           C 3 6.5, 7.5 2.5, 13 2.5
           C 16.6 2.5, 19.4 4.6, 21 7.8
           C 19.8 5.6, 16.8 5.6, 16.2 8
           C 15.7 10, 18 11.4, 20 10.2
           C 21.4 9.4, 21.7 8, 21.7 8
           L 24 12
           L 26.3 8
           C 26.3 8, 26.6 9.4, 28 10.2
           C 30 11.4, 32.3 10, 31.8 8
           C 31.2 5.6, 28.2 5.6, 27 7.8
           C 28.6 4.6, 31.4 2.5, 35 2.5
           C 40.5 2.5, 45 6.5, 45 12.5
           C 45 20, 38 29, 24 40 Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
