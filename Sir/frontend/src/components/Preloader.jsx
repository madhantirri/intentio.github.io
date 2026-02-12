import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Slight delay after 100%
                    return 100;
                }
                return next;
            });
        }, 20); // 2 seconds total

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1120]/80 backdrop-blur-xl"
        >
            <div className="relative w-64 h-32 flex items-center justify-center mb-8">
                {/* ECG Trace Animation */}
                <svg viewBox="0 0 500 150" className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {/* Background Trace (faint) */}
                    <path
                        d="M0,75 H100 L120,75 L135,20 L150,130 L165,75 H200 H300 L320,75 L335,20 L350,130 L365,75 H500"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="2"
                    />

                    {/* Active Trace (Blue) */}
                    <motion.path
                        d="M0,75 H100 L120,75 L135,20 L150,130 L165,75 H200 H300 L320,75 L335,20 L350,130 L365,75 H500"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 1], // Draw, hold, hold
                            opacity: [0, 1, 1, 0],    // Fade in, stay, fade out
                            pathOffset: [0, 0, 1, 1]  // Move trace along path
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            times: [0, 0.4, 0.8, 1]
                        }}
                    />

                    {/* Medical Cross Pulse - Optional overlay */}
                    <motion.circle
                        cx="142" cy="75" r="4"
                        fill="#60a5fa"
                        animate={{ r: [4, 8, 4], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    />
                </svg>
            </div>

            {/* Percentage Text */}
            <div className="text-center">
                <motion.div
                    className="text-4xl font-bold font-mono text-blue-500 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {progress}%
                </motion.div>
                <motion.div
                    className="h-1 w-48 bg-slate-800 rounded-full overflow-hidden"
                >
                    <motion.div
                        className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        style={{ width: `${progress}%` }}
                    />
                </motion.div>
                <p className="mt-4 text-sm text-blue-400/60 uppercase tracking-widest font-medium animate-pulse">
                    System Initializing
                </p>
            </div>

            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        </motion.div>
    );
};

export default Preloader;
