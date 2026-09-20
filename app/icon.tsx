import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

const ACCENT = '#FFAFCF';
const INK = '#6b4c6e';

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
            d="M18 29.5C10 24 5.5 19 5.5 13.2 5.5 9 8.8 5.8 12.8 5.8c2.4 0 4.6 1.2 5.2 3.4.6-2.2 2.8-3.4 5.2-3.4 4 0 7.3 3.2 7.3 7.4 0 5.8-4.5 10.8-12.5 16.3z"
            fill={INK}
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
