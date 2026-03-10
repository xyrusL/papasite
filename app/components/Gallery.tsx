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
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute left-1/2 top-1/3 hidden h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[rgb(87_191_210_/_0.08)] blur-3xl sm:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Recent work</span>
          <h2 className="section-title">Repairs completed with care and real-world results.</h2>
          <p className="section-copy">Real repairs, real outcomes, and customer trust built job by job.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 min-[390px]:grid-cols-2 sm:gap-6 md:grid-cols-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="glass-surface glass-surface-soft group relative aspect-[5/4] overflow-hidden rounded-[1.35rem] border border-[var(--border-subtle)] min-[390px]:aspect-[3/4] sm:rounded-[1.6rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover brightness-[0.78] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d12] via-[#090d12]/35 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan-soft)]">
                  Project
                </span>
                <span className="mt-2 block text-sm font-bold tracking-wide text-[var(--foreground)] sm:text-base">
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
