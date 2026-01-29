import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";

const services = [
    {
        title: "TV Repair",
        desc: "Dalubhasa sa LED, LCD, at Smart TV. Kami ang bahala sa fluctuating power, walang display, o lines sa screen. TV repair specialist na mapagkakatiwalaan.",
        image: "/images/tv-repair.jpg"
    },
    {
        title: "Electric Fans & Electronic Appliances",
        desc: "Motor rewinding and repair for stand fans, desk fans, and other electronic appliances to extend their lifespan.",
        image: "/images/fan-repair.jpg"
    },
    {
        title: "Audio Systems",
        desc: "Restoration of amplifiers, speakers, and home theater systems. We ensure your sound quality is crisp and clear.",
        image: "/images/audio-repair.jpg"
    },
    {
        title: "Component Level Repair",
        desc: "Advanced troubleshooting for circuit boards (PCB). We replace faulty capacitors, resistors, and chips professionally.",
        image: "/images/pcb-repair.jpg"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6 tracking-tight font-display"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg sm:text-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        At <strong>Papa's Electronic Repair Shop</strong>, we provide comprehensive repair solutions for a wide range of devices.
                        From troubleshooting complex <strong>Smart TV</strong> failures to maintaining everyday <strong>electric fans</strong>,
                        our experienced technicians in <strong>Quezon City</strong> use precision tools to ensure quality results.
                        We believe in honest service -- <em>pag kaya pangayusin, aayusin natin!</em>
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-10"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500/30 transition-all duration-500 group flex flex-col md:flex-row h-auto md:h-64"
                            variants={item}
                        >
                            <div className="relative w-full md:w-2/5 h-40 sm:h-48 md:h-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={`${service.title} - Papa's Electronic Repair Shop`}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="group-hover:scale-110 transition duration-700 filter brightness-75 group-hover:brightness-100"
                                />
                            </div>

                            <div className="p-5 sm:p-8 md:w-3/5 flex flex-col justify-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-display group-hover:text-yellow-400 transition">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
