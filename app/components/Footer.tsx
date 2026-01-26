import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import * as motion from "framer-motion/client";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black border-t border-gray-800 text-gray-400 py-8 font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0">

                    {/* Brand & Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-white font-display font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Papa's Repair</h3>
                        <div className="space-y-1 text-base text-gray-400">
                            <p>23 Chestnut Ext, Quezon City, Philippines, 1121</p>
                            <div className="flex items-center gap-2 text-yellow-500 font-bold text-lg mt-2">
                                <span>📞 Call/Text:</span>
                                <span>0977-607-4426</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href="https://www.facebook.com/papaelectronicrepair"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 text-blue-500 hover:text-blue-400 transition"
                        >
                            <div className="bg-blue-600/10 p-3 rounded-full group-hover:bg-blue-600/20 transition duration-300">
                                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 group-hover:scale-110 transition duration-300 transform" />
                            </div>
                            <div className="text-left">
                                <span className="font-bold text-lg block">Message us on Facebook</span>
                                <p className="text-xs text-gray-500 max-w-xs leading-tight">
                                    Inquiries & Scheduling
                                </p>
                            </div>
                        </a>
                    </motion.div>
                </div>

            </div>

            <motion.div
                className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="mb-2 sm:mb-0">
                    &copy; {new Date().getFullYear()} Papa's Electronic Repair Shop. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <a href="/privacy" className="hover:text-yellow-500 transition">Privacy Policy</a>
                    <a href="/terms" className="hover:text-yellow-500 transition">Terms of Service</a>
                </div>
            </motion.div>
        </footer>
    );
}
