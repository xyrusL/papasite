import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import * as motion from "framer-motion/client";

export default function Hero() {
    return (
        <div id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Electronic Circuit Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="relative w-32 h-32 sm:w-44 sm:h-44 mx-auto drop-shadow-[0_0_35px_rgba(234,179,8,0.4)] hover:scale-105 transition-transform duration-500">
                        <Image
                            src="/logo.png"
                            alt="Papa's Repair Shop Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 tracking-tighter mb-4 drop-shadow-2xl leading-tight">
                        <span className="block">Papa&apos;s Electronic</span>
                        <span className="block">Repair Shop</span>
                    </h1>
                    <p className="text-lg sm:text-2xl text-gray-200 font-light tracking-wide">
                        Trusted TV & Appliance Repair sa QC at Rizal. Home Service Available!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="h-px w-8 sm:w-16 bg-yellow-500/50"></div>
                    <p className="text-base sm:text-xl text-gray-300 font-light tracking-widest uppercase">
                        Trusted since <span className="text-yellow-400 font-bold">2021</span>
                    </p>
                    <div className="h-px w-8 sm:w-16 bg-yellow-500/50"></div>
                </motion.div>

                <motion.div
                    className="glass-surface glass-surface-mid p-8 sm:p-10 rounded-3xl mb-12 max-w-3xl w-full relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

                    <p className="text-xl sm:text-2xl text-gray-100 italic mb-6 font-light leading-relaxed text-balance">
                        &quot;Legit na serbisyo, subok na ng marami! Need repair? Tara, G!&quot;
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2 text-yellow-500/80">
                            <span className="uppercase tracking-widest text-sm font-semibold">Contact Us</span>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                            0977-607-4426
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <a
                        href="https://www.facebook.com/papaelectronicrepair"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-focus group flex items-center gap-3 glass-surface glass-surface-mid glass-pill text-white font-bold py-4 px-10 transition-all duration-300 transform hover:scale-105 text-lg"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                        <span>Message Us on FB</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
