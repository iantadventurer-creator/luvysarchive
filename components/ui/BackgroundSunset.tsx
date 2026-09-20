'use client';

import { motion } from 'framer-motion';

// Dos "cortinas" de estrellitas corriendo por los bordes izquierdo y
// derecho, como un marco — no unas pocas sueltas por el medio.
const STARS = [
    // Borde izquierdo
    { top: '4%', left: '3%', size: 8, delay: 0 },
    { top: '10%', left: '9%', size: 6, delay: 0.8 },
    { top: '17%', left: '4%', size: 10, delay: 1.5 },
    { top: '25%', left: '8%', size: 6, delay: 0.4 },
    { top: '33%', left: '3%', size: 7, delay: 2.0 },
    { top: '41%', left: '7%', size: 9, delay: 1.1 },
    { top: '50%', left: '3%', size: 6, delay: 0.2 },
    { top: '58%', left: '9%', size: 8, delay: 1.7 },
    { top: '67%', left: '4%', size: 6, delay: 0.9 },
    { top: '76%', left: '8%', size: 9, delay: 2.3 },
    { top: '85%', left: '3%', size: 7, delay: 0.6 },
    { top: '94%', left: '7%', size: 6, delay: 1.3 },
    // Borde derecho
    { top: '6%', left: '92%', size: 7, delay: 0.5 },
    { top: '13%', left: '96%', size: 9, delay: 1.9 },
    { top: '21%', left: '91%', size: 6, delay: 0.3 },
    { top: '29%', left: '95%', size: 8, delay: 1.2 },
    { top: '38%', left: '92%', size: 6, delay: 2.1 },
    { top: '46%', left: '96%', size: 10, delay: 0.7 },
    { top: '55%', left: '91%', size: 6, delay: 1.6 },
    { top: '63%', left: '95%', size: 8, delay: 0.1 },
    { top: '72%', left: '92%', size: 6, delay: 1.4 },
    { top: '81%', left: '96%', size: 9, delay: 2.4 },
    { top: '90%', left: '91%', size: 7, delay: 0.8 },
    { top: '97%', left: '95%', size: 6, delay: 1.0 },
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
                    background: 'linear-gradient(180deg, #9a72c4 0%, #e0679e 32%, #ff8a5c 62%, #ffc266 100%)',
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
