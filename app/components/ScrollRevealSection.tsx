"use client";

import React from "react";
import * as motion from "framer-motion/client";

type ScrollRevealSectionProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function ScrollRevealSection({ children, delay = 0 }: ScrollRevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
