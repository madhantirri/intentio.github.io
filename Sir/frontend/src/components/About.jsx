import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: Activity,
            title: "Manual Risk Eliminated",
            desc: "No more uncontrolled manual insertion. We replace force with precision sensors.",
            gradient: "from-red-500/20 to-orange-500/20",
            iconColor: "text-red-400",
            borderColor: "border-red-500/30"
        },
        {
            icon: Cpu,
            title: "Fully Automatic",
            desc: "Powered device with real-time feedback loops for pressure and depth.",
            gradient: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-cyan-400",
            borderColor: "border-cyan-500/30"
        },
        {
            icon: ShieldCheck,
            title: "Patented Technology",
            desc: "Granted Indian Patent. Novel and non-obvious solution.",
            gradient: "from-emerald-500/20 to-teal-500/20",
            iconColor: "text-emerald-400",
            borderColor: "border-emerald-500/30"
        }
    ];

    return (
        <section id="about" className="relative py-28 overflow-hidden">
            {/* Dark gradient background — semi-transparent so 3D model shows through */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Glowing orbs for depth */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />

            <div className="container relative z-[60]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Innovation</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bone Biopsy</span>?
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* First text box */}
                        <div className="p-6 rounded-2xl bg-[#001A36] border border-white/10">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Bone biopsy involves a procedure to insert a biopsy needle (known as <strong className="text-cyan-400 font-semibold">Jamshidi Needle</strong>) and cannula inside the bone. Traditionally, this insertion is fully manual and uncontrolled, requiring immense care to avoid risks like bone fracture and tumor contamination.
                            </p>
                        </div>

                        {/* Quote Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative p-6 rounded-2xl bg-[#001A36] border border-cyan-500/20 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500" />
                            <p className="italic text-gray-200 font-medium pl-4 text-lg">
                                &ldquo;In present invention we tried to eliminate the risk of bone fracture by precisely controlling pressure for inserting the needle.&rdquo;
                            </p>
                        </motion.div>

                        {/* Second text box */}
                        <div className="p-6 rounded-2xl bg-[#001A36] border border-white/10">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                The innovation lies in converting this manual process into a <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">fully-automatic process</strong> using a controlled machine-derived mechanism. Our powered device removes the need for manual force, ensuring a safer, more consistent procedure.
                            </p>
                        </div>

                        {/* Founder info box */}
                        <div className="p-4 rounded-2xl bg-[#001A36] border border-white/10 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/20">
                                AS
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Dr. Abhijeet Salunke</p>
                                <p className="text-gray-500 text-xs">Founder — Created to solve issues faced during thousands of biopsies</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid gap-5"
                    >
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * idx }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                className={`relative p-6 rounded-2xl bg-[#001A36] border ${item.borderColor} flex items-start gap-5 transition-all duration-300 hover:bg-[#002244] hover:shadow-lg hover:shadow-cyan-500/5 group overflow-hidden`}
                            >
                                {/* Subtle gradient bg on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                                <div className={`relative w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center ${item.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={26} />
                                </div>
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
