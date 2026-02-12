import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Building2, Coins, TrendingUp, Lightbulb, Landmark, Rocket, Sparkles } from 'lucide-react';

const TiltCard = ({ item, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
            style={{
                perspective: 1000,
            }}
            className="h-full"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`group relative h-full p-8 rounded-2xl bg-gradient-to-br ${item.bgGradient} border border-white/10 overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] transition-all duration-300 flex flex-col justify-between`}
            >
                {/* Abstract Background pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />

                <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white shadow-lg backdrop-blur-sm`}>
                        <item.icon size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-200 transition-colors">
                        {item.title}
                    </h3>
                    <div className="h-1 w-12 bg-white/30 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                    <p className="text-gray-200 font-medium opacity-90">
                        {item.type}
                    </p>
                </div>

                <div
                    className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 duration-500"
                    style={{ transform: "translateZ(10px)" }}
                >
                    <item.icon size={100} />
                </div>
            </motion.div>
        </motion.div>
    );
};

const Avenues = () => {
    const scrollRef = useRef(null);

    // Parallax
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const funds = [
        { title: "BIRAC SEED Fund", type: "Biotechnology Industry Research Assistance Council", icon: FlaskConical, bgGradient: "from-purple-900/50 to-blue-900/50" },
        { title: "Start-Up India Seed Fund", type: "Government of India Initiative", icon: Rocket, bgGradient: "from-orange-900/50 to-red-900/50" },
        { title: "NIDHI-SSS", type: "Seed Support System", icon: Coins, bgGradient: "from-emerald-900/50 to-teal-900/50" },
        { title: "Gujarat Industrial Policy 2020", type: "State Government Support", icon: Landmark, bgGradient: "from-blue-900/50 to-indigo-900/50" },
        { title: "NIDHI-PRAYAS", type: "Promoting and Accelerating Young and Aspiring technology entrepreneurs", icon: Lightbulb, bgGradient: "from-amber-900/50 to-yellow-900/50" },
        { title: "E-CBC", type: "Entrepreneurship Capacity Building", icon: TrendingUp, bgGradient: "from-cyan-900/50 to-sky-900/50" },
    ];

    const incubators = [
        { title: "iHub", type: "Gujarat Student Startup & Innovation Hub", icon: Sparkles, bgGradient: "from-pink-900/40 to-rose-900/40" },
        { title: "GuSEC", type: "Gujarat University Startup and Entrepreneurship Council", icon: Building2, bgGradient: "from-violet-900/40 to-fuchsia-900/40" },
    ];

    return (
        <section ref={scrollRef} id="avenues" className="relative py-32 overflow-hidden bg-slate-950 perspective-1000">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#0B1120]" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Moving Ambient glows */}
            <motion.div style={{ y: yBg1 }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
            <motion.div style={{ y: yBg2 }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />

            <div className="container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Growth & Support</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Avenues & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-gradient">Support</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Supported by premier government initiatives and funding bodies fostering innovation.
                    </p>
                </motion.div>

                {/* Funds Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {funds.map((item, idx) => (
                        <TiltCard
                            key={idx}
                            index={idx}
                            item={item}
                        />
                    ))}
                </div>

                {/* Incubation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">We are Incubated at</h3>
                        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {incubators.map((item, idx) => (
                            <TiltCard
                                key={idx}
                                index={idx}
                                item={{ ...item, bgGradient: item.bgGradient }}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

// Icon component helper since FlaskConical is not standard export sometimes
const FlaskConical = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
    </svg>
);

export default Avenues;
