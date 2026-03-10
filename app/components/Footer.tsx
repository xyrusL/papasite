import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import * as motion from "framer-motion/client";

export default function Footer() {
  return (
    <footer id="contact" className="px-4 py-10 font-sans sm:px-6 sm:py-12 lg:px-8">
      <motion.div
        className="footer-bar glass-surface glass-surface-strong theme-panel mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center lg:gap-8">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-cyan-soft)] sm:text-sm sm:tracking-[0.24em]">
              Ready to book a repair?
            </p>
            <h3 className="mt-3 font-display text-[1.8rem] font-bold leading-tight text-[var(--foreground)] min-[390px]:text-3xl sm:mt-4 sm:text-4xl">
              Talk to Papa&apos;s Repair for diagnostics, scheduling, and home service.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--foreground-muted)] min-[390px]:text-base min-[390px]:leading-8 sm:mt-4">
              Montinola Compound, Accountant Street, Sauyo, Quezon City. We serve customers in
              QC and Rizal with dependable electronics repair and honest updates.
            </p>
            <div className="mt-5 flex flex-col items-stretch gap-3 text-base font-semibold text-[var(--foreground-soft)] min-[390px]:items-center lg:items-start">
              <span className="theme-pill">Call/Text: 0977-607-4426</span>
              <span className="theme-pill">TV, appliance, and electronics repair</span>
            </div>
          </div>

          <div className="order-1 mobile-cta-stack max-w-md justify-self-center lg:order-2 lg:max-w-none">
            <a
              href="https://www.facebook.com/papaelectronicrepair"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-focus button-primary"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              Message us on Facebook
            </a>
            <a href="tel:+639776074426" className="glass-focus button-secondary">
              Call 0977-607-4426
            </a>
          </div>
        </div>

        <motion.div
          className="mt-7 flex flex-col gap-3 border-t border-white/8 pt-5 text-center text-sm text-[var(--foreground-muted)] sm:mt-8 sm:gap-4 sm:pt-6 sm:text-left sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>&copy; {new Date().getFullYear()} Papa&apos;s Electronic Repair Shop. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-start">
            <a href="/privacy" className="transition hover:text-[var(--accent-copper-strong)]">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-[var(--accent-copper-strong)]">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
