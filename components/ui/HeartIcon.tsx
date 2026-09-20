/** Corazón simple y limpio — mismo trazo que el del logo/favicon, para que
 * se reconozca claramente incluso a tamaños chicos (botones de anterior/
 * siguiente foto, separadores). Se dibuja relleno con `currentColor`. */
export function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 29.5C10 24 5.5 19 5.5 13.2 5.5 9 8.8 5.8 12.8 5.8c2.4 0 4.6 1.2 5.2 3.4.6-2.2 2.8-3.4 5.2-3.4 4 0 7.3 3.2 7.3 7.4 0 5.8-4.5 10.8-12.5 16.3z" />
    </svg>
  );
}
