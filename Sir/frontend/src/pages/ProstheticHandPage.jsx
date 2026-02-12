import React from 'react';
import { motion } from 'framer-motion';
import { Hand, ExternalLink, Play, Award } from 'lucide-react';

const ProstheticHandPage = () => {
    return (
        <div className="min-h-screen bg-[#0B1120]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0B1120] to-[#0B1120]" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-sm">
                            <Hand className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-xs">Innovation</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Prosthetic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Hand</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                            (Ahmedabad Hand)
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            A-Hand — Indigenous Affordable Myoelectric Hand is an affordable myoelectric prosthetic hand
                            customizable to meet various amputation levels, ensuring functionality and comfort providing
                            sufficient grip strength and dexterity for daily tasks, with a weight-carrying capacity of 4 to 6 kg.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                            <Play className="w-4 h-4 text-red-400" />
                            <span className="text-red-400 font-semibold tracking-wider uppercase text-xs">Video</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Watch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Demo</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                            <iframe
                                src="https://drive.google.com/file/d/1N-4vZ-jduqz7vcqEOb3laYFeVzI4RPQ6/preview"
                                title="Prosthetic Hand Demo Video"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LinkedIn Post Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <Award className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400 font-semibold tracking-wider uppercase text-xs">Recognition</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Zydus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Innovation Award</span>
                        </h3>
                    </motion.div>

                    <motion.a
                        href="https://www.linkedin.com/posts/zydus-foundation_zydus-zydusfoundation-zyduscsr-activity-7311270859535491072-bEoh"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="block max-w-3xl mx-auto"
                    >
                        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 hover:border-blue-500/40 transition-all duration-500 overflow-hidden">
                            {/* LinkedIn Branding */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />

                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-[#0077B5] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 shrink-0">
                                    in
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">Zydus Foundation</h4>
                                    <p className="text-gray-500 text-sm">LinkedIn Post</p>
                                </div>
                                <div className="ml-auto text-gray-500 group-hover:text-blue-400 transition-colors">
                                    <ExternalLink size={20} />
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Following our series of championing grassroot innovators, we present the <strong className="text-emerald-400">1st Runner-Up</strong>: Dr. Raghavendra H Bhalerao, Dr. Krupa Shah and Mr. Kaushal Panchal, who have developed an <strong className="text-cyan-400">intelligent, motorized biopsy device</strong> equipped with sensors. This innovation ensures precise bone marrow specimen collection, significantly reducing morbidity, fracture risk, and the need for multiple punctures.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['#Zydus', '#ZydusInnovation', '#GrassrootsInnovators', '#MedicalDevice', '#Healthcare'].map((tag) => (
                                    <span key={tag} className="text-xs text-blue-400/70 bg-blue-500/10 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom gradient accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                        </div>
                    </motion.a>
                </div>
            </section>

            {/* Bottom spacing */}
            <div className="pb-16" />
        </div>
    );
};

export default ProstheticHandPage;
