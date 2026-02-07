"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faWrench } from "@fortawesome/free-solid-svg-icons";
import * as motion from "framer-motion/client";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 glass-surface glass-surface-soft border-b text-white font-display">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex-shrink-0 text-yellow-500 font-bold text-2xl flex items-center gap-2 tracking-wide">
                            <FontAwesomeIcon icon={faWrench} />
                            <span>Papa&apos;s Electronic Repair Shop</span>
                        </div>
                    </motion.div>
                    <div className="hidden md:block">
                        <motion.div
                            className="ml-10 flex items-baseline space-x-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {["Home", "Services", "Trust", "Music", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={item === "Music" ? "/music" : `#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`}
                                    className="glass-focus hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="glass-focus glass-surface glass-surface-soft inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    className="md:hidden glass-surface glass-surface-soft border-t border-white/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {["Home", "Services", "Trust", "Music", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={item === "Music" ? "/music" : `#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="glass-focus block px-3 py-4 rounded-md text-xl font-bold hover:bg-white/10 hover:text-yellow-300 transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
