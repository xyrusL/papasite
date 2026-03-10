import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheckCircle, faUserShield } from "@fortawesome/free-solid-svg-icons";
import * as motion from "framer-motion/client";

export default function Trust() {
  const trustItems = [
    {
      icon: faMapMarkerAlt,
      title: "Wide Reach",
      desc: (
        <>
          Servicing clients across <span className="text-[var(--foreground)] font-bold">Quezon City</span> and{" "}
          <span className="text-[var(--foreground)] font-bold">Rizal</span>.
        </>
      ),
      sub: "Montinola Compound, Accountant Street, Sauyo, Quezon City",
    },
    {
      icon: faUserShield,
      title: "Trusted Service",
      desc: "Proven track record since 2021. Marami nang napagawa, marami nang natuwa.",
      sub: null,
    },
    {
      icon: faCheckCircle,
      title: "Expert Technicians",
      desc: "Experienced sa iba't ibang klase ng electronics, from TVs and fans to more complex circuit issues.",
      sub: null,
    },
  ];

  return (
    <section id="trust" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute right-0 top-0 hidden h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[rgb(199_100_67_/_0.08)] blur-3xl md:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-heading">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why locals trust us
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Credible service, practical repairs, and local coverage you can count on.
          </motion.h2>
          <motion.p
            className="section-copy"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            From Quezon City to Rizal, we aim for work that feels reliable before, during, and
            after the repair.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[390px]:gap-5 md:grid-cols-3 md:gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              className="service-card glass-surface glass-surface-mid theme-panel group relative overflow-hidden p-6 min-[390px]:p-7 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.16, duration: 0.5 }}
            >
              <div className="absolute right-0 top-0 hidden h-28 w-28 -translate-y-8 translate-x-8 rounded-full bg-[rgb(87_191_210_/_0.08)] transition-transform duration-700 group-hover:scale-150 sm:block" />

              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[color:rgb(199_100_67_/_0.18)] bg-[rgb(199_100_67_/_0.1)] text-xl text-[var(--accent-copper-strong)] transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="mt-5 font-display text-[1.35rem] font-bold tracking-wide text-[var(--foreground)] transition group-hover:text-[var(--accent-copper-strong)] min-[390px]:text-2xl sm:mt-6">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)] min-[390px]:text-base min-[390px]:leading-8 sm:mt-4">{item.desc}</p>
                {item.sub && (
                  <div className="mt-6 border-t border-white/8 pt-4 sm:mt-8 sm:pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-cyan-soft)]">
                      Location
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--foreground-soft)]">{item.sub}</p>
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
