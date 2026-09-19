import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

const ACCENT = '#E0245E';
const INK = '#05070c';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: ACCENT,
          borderRadius: 14,
        }}
      >
        <svg width="48" height="48" viewBox="0 0 36 36">
          <path
            d="M18 6.5c-5.8 0-9.5 4-9.5 8.8 0 3.1 1.5 5.4 3.6 7v3.2c0 .9.7 1.6 1.6 1.6h.8v1.4c0 .7.6 1.3 1.3 1.3h.4c.7 0 1.3-.6 1.3-1.3v-1.4h1v1.4c0 .7.6 1.3 1.3 1.3h.4c.7 0 1.3-.6 1.3-1.3v-1.4h.8c.9 0 1.6-.7 1.6-1.6v-3.2c2.1-1.6 3.6-3.9 3.6-7 0-4.8-3.7-8.8-9.5-8.8z"
            fill={INK}
          />
          <circle cx="14.2" cy="15.5" r="2.4" fill={ACCENT} />
          <circle cx="21.8" cy="15.5" r="2.4" fill={ACCENT} />
          <path d="M18 17.2l1.3 2.6h-2.6z" fill={ACCENT} />
        </svg>
      </div>
    ),
    { ...size }
  );
}
