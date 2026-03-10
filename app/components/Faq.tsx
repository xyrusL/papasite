import React from "react";
import * as motion from "framer-motion/client";

const faqs = [
    {
        question: "Nagho-home service ba kayo?",
        answer: "Oo, may home service kami sa QC at Rizal. Message or call para ma-schedule ang visit."
    },
    {
        question: "Magkano magpa-check up ng TV?",
        answer: "Depende sa issue at model. Give us a quick call at 0977-607-4426 for an estimate."
    },
    {
        question: "Sira ang TV, may power pero walang display. Kaya ba?",
        answer: "Yes, common issue ito. We handle LED, LCD, at Smart TV diagnostics and repair."
    }
];

export default function Faq() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="section-heading">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQs
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Straight answers before you book a repair.
          </motion.h2>
          <motion.p
            className="section-copy"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            The questions customers ask us most often, answered clearly and without the
            guesswork.
          </motion.p>
        </div>

        <div className="space-y-4 min-[390px]:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="service-card glass-surface glass-surface-soft theme-panel p-5 min-[390px]:p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-copper-strong)]">
                FAQ {index + 1}
              </p>
              <h3 className="mt-2.5 text-lg font-semibold leading-snug text-[var(--foreground)] min-[390px]:text-xl sm:mt-3 sm:text-2xl">
                {faq.question}
              </h3>
              <p className="mt-3 max-w-3xl leading-[1.65] text-[var(--foreground-muted)] min-[390px]:leading-7 sm:mt-4">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
