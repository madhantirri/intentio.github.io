import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, HeartPulse, Zap } from 'lucide-react';

const Product = () => {
    return (
        <section id="product" className="relative py-28 overflow-hidden">
            {/* Dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900" />

            {/* Accent glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />

            <div className="container relative z-[60]">
                {/* Box positioned to the right, width locked */}
                <div className="max-w-[75%] ml-auto -mr-[120px]">

                    {/* Right side — wide landscape box */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl bg-[#001A36] border border-white/10 px-8 py-6 md:px-10 md:py-7 overflow-hidden"
                    >
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/50 via-blue-400/50 to-transparent" />
                        {/* Left accent bar */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 pl-4">
                            i-Bone{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Biopsy Device
                            </span>
                        </h2>

                        <div className="space-y-4 pl-4">
                            {/* Main description */}
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                This proposed <strong className="text-cyan-400 font-semibold">intelligent bone drill and biopsy (I-bone biopsy) device</strong> will obtain a good amount of tissue for diagnosis of disease like bone cancer, bone marrow diseases including infection, blood cancers (leukaemia), leukopenia, leukocytosis, thrombocytopenia, thrombocytosis, pancytopenia and polycythemia with higher accuracy and safety.
                            </p>

                            {/* Two feature cards side by side */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                                        <Crosshair size={16} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-base mb-1">Diagnostic Precision</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            Expert suggestions for bone marrow examination in cases such as Fevers of unknown origin, Anemia, and Hemochromatosis. Histopathological diagnosis is essential for determining treatments like chemotherapy, surgery, or radiation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                                        <HeartPulse size={16} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-base mb-1">Patient Safety</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            This device will make bone biopsy procedure minimally morbidity (pain, residual pain and discomfort) to patient with excellent tissue for diagnosis of the diseases by the pathologist.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

                            {/* Bottom technical description */}
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-lg shadow-cyan-500/15">
                                    <Zap size={16} />
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    This i-bone drill biopsy device is a <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">fully controlled, motorized, and powered system</strong> for bone biopsy with unique depth, current and pressure sensors leading to precise, perfect bone / bone marrow specimen collection that will be used for diagnosis of diseases. This device will reduce morbidity to the patient following bone biopsy by obtaining long tissue cores with limited penetrations into the affected bone and risk of fracture.
                                </p>
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-cyan-400/50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Product;
