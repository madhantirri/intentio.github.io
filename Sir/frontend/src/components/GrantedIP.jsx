import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, X } from 'lucide-react';

const GrantedIP = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const patents = [
        { title: "Scapula Implant", image: "./granted_ip/granted1.jpg", desc: "Patient-specific scapular prosthesis" },
        { title: "Scapula Implant", image: "./granted_ip/granted2.jpg", desc: "Advanced fixation methodology" },
        { title: "Metacarpel Implant", image: "./granted_ip/granted3.png", desc: "Custom metacarpal reconstruction" },
        { title: "Metacarpel Implant", image: "./granted_ip/granted4.jpg", desc: "Improved joint mobility design" },
        { title: "Metaphyseal Implant", image: "./granted_ip/granted5.jpg", desc: "Metaphyseal anchoring system" },
        { title: "Metaphyseal Implant", image: "./granted_ip/granted6.jpg", desc: "Enhanced osseointegration surface" },
        { title: "Granted IP Certificate", image: "./granted_ip/granted7.jpg", desc: "Official Patent Grant" },
        { title: "Granted IP Certificate", image: "./granted_ip/granted8.jpg", desc: "Official Patent Grant" },
        { title: "Granted IP Certificate", image: "./granted_ip/granted9.jpg", desc: "Official Patent Grant" },
        { title: "Granted IP", image: "./granted_ip/granted10.jpg", desc: "Intellectual Property Document" },
        { title: "Granted IP", image: "./granted_ip/granted11.jpg", desc: "Intellectual Property Document" },
        { title: "Granted IP", image: "./granted_ip/granted12.jpg", desc: "Intellectual Property Document" },
        { title: "Granted IP", image: "./granted_ip/granted13.jpg", desc: "Intellectual Property Document" },
        { title: "Granted IP", image: "./granted_ip/granted15.jpg", desc: "Intellectual Property Document" },
        { title: "Grater Patent", image: "./granted_ip/381708_grater_page-0001.jpg", desc: "Surgical Grater Innovation" },
        { title: "Capacitor Patent", image: "./granted_ip/401412_capacitor-rb_page-0001.jpg", desc: "Biomedical Capacitor Tech" },
    ];

    return (
        <section id="granted-ip" className="py-24 bg-[#0F172A] text-white">
            <div className="container mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Innovation Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Granted <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intellectual Property</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Leading the way in medical device innovation with our portfolio of granted patents.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {patents.map((item, idx) => (
                        <motion.div
                            key={idx}
                            layoutId={`card-${idx}`}
                            onClick={() => setSelectedImage(item)}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-[#1E293B] rounded-xl overflow-hidden cursor-pointer group shadow-lg border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative"
                        >
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                                        <Search size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 relative z-10 bg-[#1E293B]">
                                <h3 className="text-white font-semibold truncate mb-1">{item.title}</h3>
                                <p className="text-xs text-gray-400 truncate">{item.desc}</p>
                                <div className="absolute top-4 right-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative max-w-5xl max-h-[90vh] w-full bg-[#1E293B] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex-1 bg-black/20 flex items-center justify-center p-4">
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-xl"
                                />
                            </div>

                            <div className="w-full md:w-80 bg-[#0F172A] p-8 flex flex-col justify-center border-l border-white/10">
                                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">Verified Patent</span>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{selectedImage.title}</h3>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6" />
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    {selectedImage.desc}
                                </p>
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-500">Official Document Preview</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GrantedIP;
