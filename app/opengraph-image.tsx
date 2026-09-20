import { ImageResponse } from 'next/og';

// Imagen que se muestra al compartir el link de la web en WhatsApp, X,
// Facebook, Discord, etc. Se genera en el momento del build (no en cada
// visita), así que no afecta el rendimiento del sitio.

export const alt = 'LuvysArchive — Fotografía de muñecas';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const ACCENT = '#FFAFCF';
const ACCENT_SHADOW = '#F48FB1';
const STRIPE_COLORS = ['#FFAFCF', '#C3B1E1', '#B5EAD7', '#FFD3B0'];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #cdb8ea 0%, #f2b8d6 35%, #ffcdb0 70%, #ffe6c9 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.35)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -120,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.3)',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            width: 110,
            height: 110,
            borderRadius: 24,
            background: ACCENT,
            boxShadow: `0 10px 0 0 ${ACCENT_SHADOW}`,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg width="60" height="60" viewBox="0 0 36 36">
            <path
              d="M18 29.5C10 24 5.5 19 5.5 13.2 5.5 9 8.8 5.8 12.8 5.8c2.4 0 4.6 1.2 5.2 3.4.6-2.2 2.8-3.4 5.2-3.4 4 0 7.3 3.2 7.3 7.4 0 5.8-4.5 10.8-12.5 16.3z"
              fill="#6b4c6e"
            />
          </svg>
        </div>

        <div style={{ display: 'flex', fontSize: 92, fontWeight: 700, color: '#6b4c6e', letterSpacing: -2 }}>
          LuvysArchive
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#8a6b8d', marginTop: 18 }}>
          Fotografía de muñecas, con mucho corazón
        </div>

        <div style={{ display: 'flex', position: 'absolute', bottom: 0, left: 0, right: 0, height: 16 }}>
          {STRIPE_COLORS.map((color) => (
            <div key={color} style={{ flex: 1, background: color, display: 'flex' }} />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
