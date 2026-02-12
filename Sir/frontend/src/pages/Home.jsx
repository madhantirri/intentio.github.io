import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Product from '../components/Product';
import DeviceModel from '../components/DeviceModel';
import SocialProof from '../components/SocialProof';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <DeviceModel />
            <Hero />
            <About />
            <Product />

            {/* Awards Text Section */}
            <section className="py-20 bg-slate-900 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Awards and Grants
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xl text-gray-300 font-medium">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-colors"
                        >
                            Zydus Innovation Award 2025
                        </motion.div>
                        <div className="hidden md:block w-2 h-2 rounded-full bg-gray-600" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors"
                        >
                            SSIP 2.0 IITRAM cell grant
                        </motion.div>
                        <div className="hidden md:block w-2 h-2 rounded-full bg-gray-600" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
                        >
                            Ihub S4 Grant
                        </motion.div>
                    </div>
                </div>
            </section>

            <SocialProof />
            <Contact />
        </>
    );
};

export default Home;
