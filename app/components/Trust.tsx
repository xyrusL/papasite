import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheckCircle, faUserShield } from "@fortawesome/free-solid-svg-icons";
import * as motion from "framer-motion/client";

export default function Trust() {
    return (
        <section id="trust" className="py-24 border-t border-white/10 text-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Trusted by Many
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        From Quezon City to Rizal, sagot namin kayo!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: faMapMarkerAlt,
                            title: "Wide Reach",
                            desc: (
                                <>
                                    Servicing clients all over <span className="text-white font-bold">Quezon City</span> and <span className="text-white font-bold">Rizal</span>.
                                </>
                            ),
                            sub: "23 Chestnut Ext, Quezon City, Philippines, 1121"
                        },
                        {
                            icon: faUserShield,
                            title: "Trusted Service",
                            desc: "Proven track record since 2021. Marami nang napagawa, marami nang natuwa!",
                            sub: null
                        },
                        {
                            icon: faCheckCircle,
                            title: "Expert Technicians",
                            desc: "Experienced sa iba't ibang klase ng electronics. TV, Electric Fan, atbp.",
                            sub: null
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="service-card glass-surface glass-surface-mid p-8 md:p-10 rounded-3xl hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                            <div className="relative z-10">
                                <div className="text-yellow-500 text-5xl mb-6 group-hover:scale-110 transition duration-300 inline-block drop-shadow-glow">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition font-display tracking-wide">{item.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                                {item.sub && (
                                    <div className="border-t border-white/10 pt-4 mt-auto">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-gray-300 font-medium">{item.sub}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
