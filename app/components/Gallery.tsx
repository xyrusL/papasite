"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";

const images = [
    {
        src: "/images/gallery-happy-customers.jpg",
        alt: "Satisfied Customers",
        caption: "Happy Clients"
    },
    {
        src: "/images/gallery-technician.jpg",
        alt: "Expert Technician at Work",
        caption: "Expert Repair"
    },
    {
        src: "/images/gallery-success.jpg",
        alt: "Successful Repair Job",
        caption: "Quality Guaranteed"
    },
    {
        src: "/images/gallery-shop.jpg",
        alt: "Our Repair Shop",
        caption: "Busy Shop"
    }
];

export default function Gallery() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 font-display">
                        Recent Works
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Real repairs, real results. Salamat sa tiwala!
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                                <span className="text-yellow-400 font-bold text-sm sm:text-lg tracking-wide transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                                    {img.caption}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
