import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Microscope, Building2, CheckCircle2 } from 'lucide-react';

const Specs = () => {
    const benefits = [
        {
            icon: Stethoscope,
            role: "For Surgeons",
            points: [
                "Automated pressure control preventing fractures",
                "Single-attempt precision",
                "Reduced procedure time",
                "Ergonomic handling"
            ],
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: Microscope,
            role: "For Pathologists",
            points: [
                "High-quality tissue samples",
                "Preserved cellular architecture",
                "Larger core volume",
                "Less fragmentation"
            ],
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            icon: Building2,
            role: "For Hospitals",
            points: [
                "Higher patient throughput",
                "Reduced complication costs",
                "Modernizes facility capability",
                "Portable and easy to maintain"
            ],
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        }
    ];

    return (
        <section id="specs" className="relative py-24 bg-[#0B1120] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Excellence</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Delivering value across the entire healthcare ecosystem.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-2xl ${item.bg} border ${item.border} backdrop-blur-sm relative group`}
                        >
                            <div className={`w-14 h-14 rounded-xl bg-[#0B1120]/50 flex items-center justify-center mb-6 ${item.color} shadow-lg`}>
                                <item.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6">{item.role}</h3>

                            <ul className="space-y-4">
                                {item.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 size={18} className={`${item.color} mt-1 shrink-0`} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specs;
