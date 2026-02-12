import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';

const Hero = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden text-white min-h-screen flex items-center">

            {/* Background Layer: Dark Background Color - z-0 (Below Model at z-10) */}
            <div className="absolute inset-0 bg-primary-dark z-0" />

            {/* Interactive Magnetic Background - z-0 */}
            <InteractiveBackground />

            {/* Gradient Overlay for Readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-dark/95 via-primary-dark/80 to-transparent pointer-events-none z-0" />

            <div className="container relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-left"
                        >
                            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-secondary uppercase bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                                Introducing i-Bone Biopsy Device
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg tracking-wide">
                                INTENTIO BIOPSY DEVICE <br />
                                <span className="text-secondary drop-shadow-md">PRIVATE LIMITED</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light leading-relaxed drop-shadow-md">
                                Replacing manual force with robotic precision. The world’s first sensor-controlled motor for bone biopsies, designed to eliminate guesswork and improve patient outcomes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" className="btn btn-primary group">
                                    Request a Demo
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                                <a href="#specs" className="btn btn-outline group">
                                    View Clinical Data
                                    <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: 3D Model Visual */}
                    <div className="lg:w-1/2 w-full h-[400px] lg:h-[600px] relative flex items-center justify-center">
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
