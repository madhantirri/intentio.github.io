import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';

const EventHighlights = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const events = [
        { image: "/event/venues1.jpg" },
        { image: "/event/venues2.jpg" },
        { image: "/event/venues3.jpg" },
        { image: "/event/venues4.jpg" }
    ];

    return (
        <section id="events" className="py-24 bg-[#0B1120] overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                        <Calendar className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 font-semibold tracking-wider uppercase text-xs">Global Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Highlights</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Showcasing our innovation at premier global medical conferences and exhibitions.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden bg-slate-800 shadow-xl border border-white/10 cursor-pointer aspect-[4/3]"
                            onClick={() => setSelectedImage(event)}
                        >
                            <img
                                src={event.image}
                                alt="Event Venue"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Simple Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                    <ZoomIn size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm border border-white/10"
                        >
                            <X size={20} />
                        </button>

                        <img
                            src={selectedImage.image}
                            alt="Event Venue"
                            className="w-full h-full object-contain max-h-[85vh] rounded-lg"
                        />
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default EventHighlights;
