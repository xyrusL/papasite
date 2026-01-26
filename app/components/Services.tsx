import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";

const serviceImages = [
    "/images/619405803_1208356021493146_5655100997124603175_n.jpg",
    "/images/619902468_1208356041493144_8069110875108435667_n.jpg",
    "/images/620024429_1208356091493139_7249783648022275541_n.jpg",
    "/images/621477002_1208356148159800_3772941405531254889_n.jpg",
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-4 tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Latest Repairs
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg sm:text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Quality repair works. Check niyo gawa namin!
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {serviceImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl aspect-[4/5] border border-gray-800 shadow-lg"
                            variants={item}
                        >
                            <Image
                                src={src}
                                alt={`Repair Work ${index + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                                className="transition duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                                <div>
                                    <span className="block text-yellow-400 font-bold text-lg mb-1">Repair Success</span>
                                    <span className="text-gray-300 text-sm">Click to view details</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
