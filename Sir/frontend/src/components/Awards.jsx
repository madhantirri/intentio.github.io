import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2 } from 'lucide-react';

const Awards = () => {
    const awards = [
        { image: "/awards/Award1.jpg" },
        { image: "/awards/Award2.jpg" },
        { image: "/awards/Award3.jpg" },
        { image: "/awards/Award4.jpg" },
        { image: "/awards/Award5.jpg" },
        { image: "/awards/Award6.jpg" },
        { image: "/awards/Award7.jpg" },
    ];

    return (
        <section id="awards" className="relative py-24 bg-[#0B1120] overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 backdrop-blur-sm">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-yellow-500 font-semibold tracking-wider uppercase text-xs">Excellence Recognized</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Awards and <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Grants</span>
                    </h2>
                    <h3 className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
                        Zydus Innovation Award 2025 • SSIP 2.0 IITRAM cell grant • Ihub S4 Grant
                    </h3>
                </motion.div>

                {/* Awards Grid - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {awards.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 border border-white/5 shadow-xl cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={`Award ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Awards;
