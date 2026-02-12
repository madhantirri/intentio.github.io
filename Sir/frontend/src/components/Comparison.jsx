import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Shield } from 'lucide-react';

const Comparison = () => {
    const currentLimitations = [
        "Current process of performing bone biopsies presents several challenges.",
        "It requires significant manual effort.",
        "Risk of complications: fractures, contamination, bleeding, infection, & nerve damage.",
        "It is a painful procedure.",
        "Complex when tumors are within medullary cavity with intact cortical bone.",
        "Compromises patient safety and well-being."
    ];

    const proposedSolution = [
        "Drill machine type tool with controlled forward motion and rotation.",
        "Feedback of force and current for optimized drilling control.",
        "Automatic stopping mechanism upon detecting cortical breach.",
        "Accurate and high yield of bone marrow specimen in a single attempt."
    ];

    return (
        <section id="comparison" className="relative py-28 overflow-hidden">
            {/* Dark background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Subtle accent glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="container relative z-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        i <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Bone Biopsy Device</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-left md:text-center">
                        <p>
                            We a team of two orthopedic onco surgeons and two engineers identified the limitation of the current Bone Biopsy process which is a manual process that results in inaccurate results in 1st attempt, and designed an intelligent biopsy device that can perform the procedure with good yield in the 1st time with less discomfort to the patient and ease of handing to Surgeon.
                        </p>
                        <p>
                            The device would benefit ortho-surgeons, onco-ortho-surgeons, and medical practitioner who perform bone biopsy of any part of the body for diagnosis. It will help to ease the process by making it automatic. The ultimate benefit will be to patients where the residue pain will be reduced.
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

                    {/* Current System Limitations — Red Theme */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-red-500/20 overflow-hidden group hover:bg-white/8 transition-all duration-300"
                    >
                        {/* Top gradient line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500" />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-xl bg-red-500/15 border border-red-500/25 flex items-center justify-center text-red-400">
                                <XCircle size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Current System Limitations</h3>
                        </div>

                        <ul className="space-y-4">
                            {currentLimitations.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                                    className="flex items-start gap-3 text-gray-300"
                                >
                                    <XCircle size={18} className="text-red-400/70 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Proposed Solution — Green/Cyan Theme */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 overflow-hidden group hover:bg-white/8 transition-all duration-300"
                    >
                        {/* Top gradient line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400" />

                        {/* Badge */}
                        <div className="absolute top-3 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25">
                            <Shield size={12} className="text-emerald-400" />
                            <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">Proposed Solution</span>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                                <CheckCircle2 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">i Bone Biopsy Device</h3>
                        </div>

                        <ul className="space-y-4">
                            {proposedSolution.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.08 }}
                                    className="flex items-start gap-3 text-gray-200 font-medium"
                                >
                                    <CheckCircle2 size={18} className="text-emerald-400 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
