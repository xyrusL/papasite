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
    <section id="services" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Core services
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skilled repair work for the devices you rely on.
          </motion.h2>
          <motion.p
            className="section-copy"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            At <strong className="text-[var(--foreground)]">Papa&apos;s Electronic Repair Shop</strong>,
            we troubleshoot, repair, and restore TVs, appliances, and electronics with honest
            diagnostics and precision work. Pag kaya pang ayusin, aayusin natin.
          </motion.p>
          <div className="accent-line" />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 min-[390px]:gap-5 md:grid-cols-2 sm:gap-8 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass-surface glass-surface-mid theme-panel group flex h-auto flex-col overflow-hidden md:h-72 md:flex-row"
              variants={item}
            >
              <div className="relative h-36 w-full overflow-hidden min-[390px]:h-40 md:h-full md:w-2/5">
                <Image
                  src={service.image}
                  alt={`${service.title} - Papa's Electronic Repair Shop`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-[0.72] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d12]/88 via-[#090d12]/28 to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-5 min-[390px]:p-6 sm:p-8 md:w-3/5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-cyan-soft)]">
                  Service {index + 1}
                </p>
                <h3 className="mt-2.5 font-display text-[1.35rem] font-bold leading-tight text-[var(--foreground)] transition group-hover:text-[var(--accent-copper-strong)] min-[390px]:text-2xl sm:mt-3 sm:text-[1.8rem]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-[var(--foreground-muted)] min-[390px]:leading-7 sm:mt-4 sm:text-base">
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
