import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';

const SocialProof = () => {
    const team = [
        {
            name: "Dr. Abhijeet Salunke",
            role: "Founder",
            image: "/founders/abhijeet1.png",
            bio: [
                "Dr. Salunke specializes in Orthopedic Oncology, with clinical fellowships at National University Hospital(NUH), Singapore, travelling fellowship at Memorial Sloan Kettering Cancer Centre(MSKCC), New York, USA, & research fellowship at Tata Memorial Hospital, Mumbai.",
                "A recipient of the Silver Jubilee Oration at IOACON 2022. Dr. Salunke has over 100 published articles in indexed journals, with 1200+ citations.",
                "His expertise includes complex limb salvage surgeries and latest innovations in surgical oncology. He thinks that his journey is continuing for the service to humanity with amazing zeal like a never ending yajna.",
                "Dr Salunke completed his Masters in Orthopedic surgery under National Board of Examinations New Delhi. He was amongst very few to get awarded the prestigious Musculoskeletal Oncology fellowship at National University Hospital (NUH) Singapore for one year duration under Emeritus Professor Dr Robert Pho, Dr.Mark Puhaindran and Dr.Gurpal Singh.",
                "Dr.Salunke got selected for prestigious Indo-American Cancer Association (IACA) Fellowship at prestigious Memorial Sloan Kettering Cancer Center (MSKCC) New York, USA & Prof.Dr.John Healey mentored him.",
                "Dr Abhijeet joined as Consultant Orthopedic Oncosurgeon in Gujarat Cancer & Research Institute (GCRI), Ahemdabad. GCRI is 750 bedded exclusive cancer hospital. He has performed more than 1000 complex orthopaedic oncosurgery cases."
            ]
        },
        {
            name: "Dr. Krupa Shah",
            role: "Co-Founder",
            image: "/founders/krupa1.png",
            bio: [
                "Dr Krupa Shah has completed her Ph.D from IIT Gandhinagar in 2015. Her research work includes condition monitoring and diagnostics of power transformer.",
                "She has received university rank during her Bachelor degree program in Electrical Engineering.",
                "She has about 17 years of teaching and research experience in the academic institutes. She has also worked with Electricity board after completing her masters for about two years.",
                "Currently she is working with Institute of Infrastructure Technology Research and Management (IITRAM), Ahmedabad in Electrical Engineering Discipline."
            ]
        },
        {
            name: "Dr. Raghavendra Bhalerao",
            role: "Co-Founder",
            image: "/founders/bhalerao1.png",
            bio: [
                "I earned my PhD from Indian Institute of Technology Bombay, in 2016, Master's degree in Spatial Information Technology from Devi Ahliya University in 2010 with University Gold Medal.",
                "Prior to that he worked with HCL Technologies as SAP Basic Consultant for 2 years. I finished B.Tech. in Electronics and Communication from RGPV Bhopal.",
                "After finishing PhD I joined IITRAM as an assistant professor in 2016."
            ]
        },
        {
            name: "Mr. Kaushal Panchal",
            role: "Partner",
            image: "/founders/Kaushal1.png",
            bio: [
                "Kaushal Panchal is a seasoned entrepreneur and the visionary owner of Autus Healthcare, a leading provider of orthopaedic implants and medical devices. With over 15 years of extensive experience in the healthcare industry, he has been instrumental in delivering high-quality medical solutions tailored to the evolving needs of the sector.",
                "For the past five years, Autus Healthcare has been at the forefront of orthopaedic innovations, ensuring excellence in product quality and patient care. Under Mr. Panchal’s leadership, the company continues to expand its footprint across Gujarat and Maharashtra, catering to healthcare professionals with cutting-edge implants and devices.",
                "Now, taking a step further in medical advancements, he is set to introduce an innovative new product to the market, reinforcing his commitment to enhancing surgical outcomes and improving patient mobility. His expertise, combined with a passion for healthcare innovation, makes him a trusted name in the industry."
            ]
        }
    ];

    const additionalTeam = {
        students: [
            "Heneel Makwana",
            "Dimpi Gandhi",
            "Harsh Patel",
            "Tanisha"
        ],
        extended: [
            "Dr. Nandlal Bharwani",
            "Mr. Hardik Sharma",
            "Dr. Dhruv Patel"
        ],
        board: [
            "Dr. (Ms.) Manisha Abhijeet Salunke",
            "Shri. Rajendra Pradyumna Shah",
            "Ms. Prajkta R. Bhalerao"
        ]
    };

    return (
        <section id="social-proof" className="relative py-28 overflow-hidden bg-slate-900">
            {/* Dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900" />

            <div className="container mx-auto px-4 relative z-20">

                {/* Team Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold tracking-wider uppercase text-xs">Our Team</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Innovators</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A multidisciplinary team of surgeons, engineers, and entrepreneurs.
                    </p>
                </motion.div>

                {/* Core Team Members */}
                <div className="space-y-24 mb-32">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
                        >
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${idx % 2 === 0 ? 'from-cyan-500 to-blue-600' : 'from-purple-500 to-pink-600'} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl border-2 border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{member.name}</h3>
                                <p className={`text-xl font-medium mb-6 ${idx % 2 === 0 ? 'text-cyan-400' : 'text-purple-400'}`}>{member.role}</p>
                                <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                                    {member.bio.map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Team Sections */}
                <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-20">

                    {/* Students */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-6 flex justify-center items-center gap-2">
                            Students
                        </h3>
                        <ul className="space-y-3">
                            {additionalTeam.students.map((name, i) => (
                                <li key={i} className="text-gray-400 hover:text-cyan-400 transition-colors">{name}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Extended Team */}
                    <div className="text-center md:border-x md:border-white/5 px-4">
                        <h3 className="text-2xl font-bold text-white mb-6 flex justify-center items-center gap-2">
                            Extended Team
                        </h3>
                        <ul className="space-y-3">
                            {additionalTeam.extended.map((name, i) => (
                                <li key={i} className="text-gray-400 hover:text-purple-400 transition-colors">{name}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Board of Directors */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-6 flex justify-center items-center gap-2">
                            Board of Directors
                        </h3>
                        <ul className="space-y-3">
                            {additionalTeam.board.map((name, i) => (
                                <li key={i} className="text-gray-400 hover:text-pink-400 transition-colors">{name}</li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SocialProof;
