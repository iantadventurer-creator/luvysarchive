'use client';

import { motion } from 'framer-motion';

const STARS = [
    { top: '8%', left: '10%', size: 10, delay: 0 },
    { top: '14%', left: '82%', size: 7, delay: 0.6 },
    { top: '22%', left: '40%', size: 6, delay: 1.1 },
    { top: '5%', left: '58%', size: 8, delay: 1.7 },
    { top: '30%', left: '90%', size: 6, delay: 0.3 },
    { top: '38%', left: '6%', size: 7, delay: 2.1 },
    { top: '60%', left: '88%', size: 8, delay: 0.9 },
    { top: '70%', left: '4%', size: 6, delay: 1.4 },
];

function Star({ top, left, size, delay }: { top: string; left: string; size: number; delay: number }) {
    return (
        <motion.svg
            viewBox="0 0 24 24"
            className="absolute text-white"
            style={{ top, left, width: size, height: size }}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.15, 0.8] }}
            transition={{ duration: 3.2, repeat: Infinity, delay, ease: 'easeInOut' }}
            aria-hidden="true"
        >
            <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill="currentColor" />
        </motion.svg>
    );
}

/** Cielo de atardecer con nubes suaves y estrellitas titilando — reemplaza
 * el fondo de calaveras flotantes de la era Monster High por algo más
 * coquette/whimsical. Fija a la ventana, detrás de todo el contenido. */
export function BackgroundSunset() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #cdb8ea 0%, #f2b8d6 32%, #ffcdb0 62%, #ffe6c9 100%)',
                }}
            />
            {/* Nubes: óvalos suaves y difuminados */}
            <div className="absolute top-[10%] left-[8%] w-56 h-20 rounded-full bg-white/50 blur-xl" />
            <div className="absolute top-[16%] left-[20%] w-40 h-16 rounded-full bg-white/40 blur-xl" />
            <div className="absolute top-[28%] right-[6%] w-64 h-24 rounded-full bg-white/45 blur-2xl" />
            <div className="absolute top-[45%] left-[-4%] w-48 h-20 rounded-full bg-white/35 blur-xl" />
            <div className="absolute top-[62%] right-[15%] w-56 h-20 rounded-full bg-white/30 blur-2xl" />
            <div className="absolute top-[78%] left-[30%] w-40 h-16 rounded-full bg-white/30 blur-xl" />

            {STARS.map((s, i) => (
                <Star key={i} {...s} />
            ))}
        </div>
    );
}
