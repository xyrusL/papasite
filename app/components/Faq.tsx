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
        <section id="faq" className="py-24 bg-black text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-10 text-center tracking-tight font-display"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    FAQs
                </motion.h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
