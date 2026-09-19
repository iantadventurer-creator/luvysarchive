'use client';

import { motion } from 'framer-motion';

type SkullColor = 'accent' | 'accent-2' | 'accent-3' | 'accent-4';

const FILL: Record<SkullColor, string> = {
    accent: 'var(--color-accent)',
    'accent-2': 'var(--color-accent-2)',
    'accent-3': 'var(--color-accent-3)',
    'accent-4': 'var(--color-accent-4)',
};

/**
 * Calavera decorativa de fondo, con la misma geometría del logo del header
 * — mismo lenguaje visual, solo que flotando de a una por la pantalla.
 */
export function BackgroundSkull({
    color = 'accent',
    top,
    left,
    right,
    bottom,
    rotate = 0,
    delay = 0,
    scale = 2.2,
}: {
    color?: SkullColor;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    rotate?: number;
    delay?: number;
    scale?: number;
}) {
    const fill = FILL[color];
    const size = 36 * scale;

    return (
        <motion.div
            aria-hidden="true"
            initial={{ y: 0, rotate }}
            animate={{ y: [0, -20, 0], rotate: [rotate, rotate + 5, rotate] }}
            transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
            className="absolute pointer-events-none block -z-10 opacity-[0.14]"
            style={{ top, left, right, bottom, width: size, height: size }}
        >
            <svg viewBox="0 0 36 36" className="w-full h-full block">
                <path
                    d="M18 2c-8.6 0-14 6-14 13 0 4.6 2.2 8 5.4 10.4v4.8c0 1.3 1 2.4 2.4 2.4h1.2v2.1c0 1 .9 1.9 1.9 1.9h.6c1 0 1.9-.9 1.9-1.9v-2.1h1.2v2.1c0 1 .9 1.9 1.9 1.9h.6c1 0 1.9-.9 1.9-1.9v-2.1h1.2c1.3 0 2.4-1.1 2.4-2.4v-4.8c3.2-2.4 5.4-5.8 5.4-10.4 0-7-5.4-13-14-13z"
                    fill={fill}
                />
                <circle cx="12.7" cy="15" r="3.6" fill="var(--color-ink)" />
                <circle cx="23.3" cy="15" r="3.6" fill="var(--color-ink)" />
                <path d="M18 17.6l2 4h-4z" fill="var(--color-ink)" />
            </svg>
        </motion.div>
    );
}
