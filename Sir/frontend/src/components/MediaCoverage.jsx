import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Newspaper, ExternalLink } from 'lucide-react';

const MediaCoverage = () => {
    const videos = [
        "https://www.youtube.com/embed/CYHKR6hFcTw",
        "https://www.youtube.com/embed/qFjvqCT8b8c"
    ];

    const images = [
        "./media/Media1.png",
        "./media/media2.png",
        "./media/media3.jpg"
    ];

    const newsItems = [
        {
            title: "Bone biopsy device to reduce damage to bone tissue",
            source: "Times of India",
            url: "https://timesofindia.indiatimes.com/city/ahmedabad/bone-biopsy-device-to-reduce-damage-to-bone-tissue/articleshow/99003170.cms",
            desc: "Innovation aimed at improving patient comfort and procedure accuracy.",
            image: "./news/external1.png"
        },
        {
            title: "Intelligent Biopsy Gun developed by GCRI & IITRAM",
            source: "TV9 Gujarati",
            url: "https://tv9gujarati.com/gujarat/ahmedabad/ahmedabad-doctors-from-gujarat-cancer-research-institute-developed-an-intelligent-biopsy-gun-with-the-help-of-engineers-from-iitram-755250.html",
            desc: "Collaborative effort leads to breakthrough medical device.",
            image: "./news/external2.png"
        },
        {
            title: "Easy way to take tissue for bone marrow biopsy",
            source: "Patrika News",
            url: "https://www.patrika.com/ahmedabad-news/there-will-be-an-easy-way-to-take-tissue-for-bone-marrow-and-biopsy-8217574",
            desc: "Simplifying complex procedures for better healthcare outcomes.",
            image: "./news/external3.jpg"
        },
        {
            title: "Doctor develops intelligent biopsy gun",
            source: "Zee News",
            url: "https://zeenews.india.com/gujarati/gujarat/a-doctor-from-gujarat-cancer-research-institute-developed-an-intelligent-biopsy-gun-with-the-help-of-engineers-from-iitram-268325",
            desc: "Local innovation making waves in medical technology.",
            image: "./news/external4.jpg"
        },
        {
            title: "From clinics to code - Doctors take the startup route",
            source: "Times of India",
            url: "https://timesofindia.indiatimes.com/city/ahmedabad/from-clinics-to-code-doctors-in-gujarat-take-the-startup-route/articleshow/122168205.cms",
            desc: "Highlighting the trend of physician-led startups in Gujarat.",
            image: "./news/external5.png"
        }
    ];

    return (
        <section id="media" className="py-24 bg-[#0F172A] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                        <Newspaper className="w-4 h-4 text-red-500" />
                        <span className="text-red-500 font-semibold tracking-wider uppercase text-xs">Press & Media</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Coverage</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Highlights from our journey, featured in news and events.
                    </p>
                </motion.div>

                {/* Videos Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {videos.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
                        >
                            <iframe
                                src={src}
                                title={`Media Video ${idx + 1}`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {images.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/5"
                        >
                            <img
                                src={src}
                                alt={`Media Coverage ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                    <ImageIcon size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* In The News Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Press Releases</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">In The <span className="text-blue-400">News</span></h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Featured articles and press releases about our innovation and impact.</p>
                    </div>

                    <div className="grid gap-6">
                        {newsItems.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                                className="group block p-6 rounded-2xl bg-[#1E293B]/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                                    <ExternalLink size={20} />
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                    {/* News Image */}
                                    <div className="flex-shrink-0 w-full md:w-48 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500/30 transition-colors">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="flex-grow flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded uppercase tracking-wider">
                                                {item.source}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* LinkedIn Posts Section */}
                <div className="mt-32 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-[#0077B5]/10 border border-[#0077B5]/20 mb-4">
                            <span className="text-[#0077B5] text-xs font-bold uppercase tracking-wider">LinkedIn</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Social <span className="text-[#0077B5]">Media</span></h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Featured posts from LinkedIn highlighting our innovations.</p>
                    </motion.div>

                    <motion.a
                        href="https://www.linkedin.com/posts/zydus-foundation_zydus-zydusfoundation-zyduscsr-activity-7315967969044447233--uz2"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="block"
                    >
                        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 hover:border-[#0077B5]/40 transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077B5]/5 rounded-full blur-2xl" />

                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-[#0077B5] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 shrink-0">
                                    in
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-[#0077B5] transition-colors">Zydus Foundation</h4>
                                    <p className="text-gray-500 text-sm">LinkedIn Post</p>
                                </div>
                                <div className="ml-auto text-gray-500 group-hover:text-[#0077B5] transition-colors">
                                    <ExternalLink size={20} />
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                In our ongoing series championing grassroots innovators, we present <strong className="text-emerald-400">Dr. Abhijeet Salunke</strong> and <strong className="text-emerald-400">Dr. Hardik Sharma</strong>, their innovation <strong className="text-cyan-400">A-Hand — Indigenous Affordable Myoelectric Hand</strong> is an affordable myoelectric prosthetic hand customizable to meet various amputation levels, ensuring functionality and comfort providing sufficient grip strength and dexterity for daily tasks, with a weight-carrying capacity of 4 to 6 kg.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['#Zydus', '#ZydusInnovation', '#GrassrootsInnovators', '#MedicalDevice', '#Healthcare', '#SDG3', '#SDG9'].map((tag) => (
                                    <span key={tag} className="text-xs text-[#0077B5]/70 bg-[#0077B5]/10 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0077B5]/30 to-transparent" />
                        </div>
                    </motion.a>
                </div>

            </div>
        </section>
    );
};

export default MediaCoverage;
