import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { PROGRAM_STEPS } from '../../constants';
import { CheckCircle2 } from 'lucide-react';

const ProgramFlow: React.FC = () => {
    // Split steps into 3 rows for better visual density
    const row1 = PROGRAM_STEPS.filter((_, i) => i % 3 === 0);
    const row2 = PROGRAM_STEPS.filter((_, i) => i % 3 === 1);
    const row3 = PROGRAM_STEPS.filter((_, i) => i % 3 === 2);

    return (
        <section className="pt-4 pb-8 md:pt-8 md:pb-16 bg-roasell-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-roasell-black z-0"></div>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-roasell-black z-0"></div>

            {/* Fade Masks Removed to prevent 'weird frame' issue */}


            <div className="container mx-auto px-4 mb-4 md:mb-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-5xl font-bold font-display mb-6 md:mb-8 text-white">
                        RoaSell Kit <span className="text-roasell-gold">Yol Haritası</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Sıfırdan zirveye adım adım ilerleyen, denenmiş ve kanıtlanmış günlük program akışı.
                    </p>
                </motion.div>
            </div>

            <div className="relative z-10 flex flex-col gap-6 md:gap-8 rotate-3 md:rotate-6 scale-105 md:scale-110 py-2 md:py-4">
                {/* Row 1 */}
                <MarqueeRow items={row1} direction="left" speed={90} />

                {/* Row 2 */}
                <MarqueeRow items={row2} direction="left" speed={100} />

                {/* Row 3 */}
                <MarqueeRow items={row3} direction="left" speed={85} />
            </div>
        </section>
    );
};

interface MarqueeRowProps {
    items: typeof PROGRAM_STEPS;
    direction: 'left' | 'right';
    speed: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction, speed }) => {
    return (
        <div className="flex overflow-hidden relative w-full">
            <motion.div
                className="flex gap-4 md:gap-6 whitespace-nowrap"
                initial={{ x: direction === 'left' ? 0 : -1000 }}
                animate={{ x: direction === 'left' ? "-50%" : "0%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {/* Duplicate items to create infinite loop effect */}
                {[...items, ...items, ...items, ...items].map((step, idx) => (
                    <div
                        key={`${step.day}-${idx}`}
                        className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-full text-white min-w-max hover:border-roasell-gold/50 hover:bg-white/10 transition-colors duration-300 group"
                    >
                        <span className="text-xs md:text-sm font-bold text-roasell-gold bg-roasell-gold/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                            {step.day}
                        </span>
                        <span className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                            {step.title}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-roasell-gold/50 group-hover:text-roasell-gold transition-colors" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProgramFlow;
