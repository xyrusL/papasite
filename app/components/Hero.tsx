import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage, faPhoneVolume, faShieldHeart, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import * as motion from "framer-motion/client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-12 pt-28 sm:min-h-screen sm:pb-16 sm:pt-36 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Electronic Circuit Background"
          fill
          style={{ objectFit: "cover" }}
          className="scale-[1.04] opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(87,191,210,0.16),transparent_26%),linear-gradient(180deg,rgba(9,13,18,0.28)_0%,rgba(9,13,18,0.86)_22%,rgba(9,13,18,0.95)_52%,rgba(9,13,18,1)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.84 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="logo-glow relative mx-auto h-24 w-24 min-[390px]:h-28 min-[390px]:w-28 sm:h-44 sm:w-44">
            <Image
              src="/logo.png"
              alt="Papa's Repair Shop Logo"
              fill
              className="rounded-full object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="section-eyebrow mx-auto max-w-max">
            Quezon City and Rizal repair specialist
          </div>
          <h1 className="mt-5 text-[2.7rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-[var(--foreground)] min-[390px]:text-5xl sm:mt-6 sm:text-7xl lg:text-[5.5rem]">
            Papa&apos;s Electronic
            <span className="block text-[var(--accent-copper-strong)]">Repair Shop</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[34rem] text-base leading-7 text-[var(--foreground-muted)] min-[390px]:text-[1.05rem] sm:mt-6 sm:text-xl sm:leading-8">
            Trusted TV and appliance repair sa QC at Rizal. From LED and Smart TV issues
            to fans and electronics diagnostics, we deliver honest service and dependable
            repairs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-6 flex w-full max-w-md flex-col items-stretch justify-center gap-3 min-[390px]:max-w-lg sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center"
        >
          <span className="theme-pill text-center text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.18em]">
            <FontAwesomeIcon icon={faShieldHeart} className="text-[var(--accent-copper-strong)]" />
            Trusted since 2021
          </span>
          <span className="theme-pill text-center text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.18em]">
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-[var(--accent-cyan-soft)]" />
            Home service available
          </span>
        </motion.div>

        <motion.div
          className="mobile-cta-stack mt-8 max-w-md min-[390px]:mt-10 min-[390px]:max-w-lg sm:mt-10 sm:max-w-3xl sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <a
            href="https://www.facebook.com/papaelectronicrepair"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-focus button-primary"
          >
            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
            Message Us on Facebook
          </a>
        </motion.div>

        <motion.div
          className="hero-contact-card glass-surface glass-surface-strong theme-panel relative mt-10 w-full max-w-4xl p-5 min-[390px]:p-6 sm:mt-12 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.55 }}
        >
          <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-copper-strong)] to-transparent sm:left-8 sm:right-8" />
          <div className="grid gap-5 text-left sm:grid-cols-[1.4fr_0.8fr] sm:items-end sm:gap-8">
            <div className="order-2 sm:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan-soft)] sm:text-sm sm:tracking-[0.22em]">
                Reliable local service
              </p>
              <p className="mt-3 text-lg font-light leading-8 text-[var(--foreground-soft)] min-[390px]:text-xl sm:mt-4 sm:text-[1.9rem] sm:leading-relaxed">
                &quot;Legit na serbisyo, subok na ng marami. Need repair? Tara, G!&quot;
              </p>
            </div>
            <div className="order-1 rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-4 sm:order-2 sm:rounded-none sm:border-0 sm:border-l sm:border-white/8 sm:bg-transparent sm:p-0 sm:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--foreground-muted)] sm:text-sm">
                Fast contact
              </p>
              <p className="mt-2 text-[1.65rem] font-bold tracking-[0.03em] text-[var(--foreground)] min-[390px]:text-3xl sm:mt-3">
                0977-607-4426
              </p>
              <a
                href="mailto:menardpapa5@gmail.com"
                className="mt-1 inline-block text-sm font-semibold text-[var(--accent-cyan-soft)] transition hover:text-[var(--foreground)]"
              >
                menardpapa5@gmail.com
              </a>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Message or call for diagnostics, repair schedules, and home service visits.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href="tel:+639776074426"
                  aria-label="Call Papa's Repair"
                  className="glass-focus inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent-cyan-soft)] transition hover:border-[rgb(87_191_210_/_0.3)] hover:bg-white/10 hover:text-[var(--foreground)]"
                >
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-sm" />
                </a>
                <a
                  href="sms:+639776074426"
                  aria-label="Text Papa's Repair"
                  className="glass-focus inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent-copper-strong)] transition hover:border-[rgb(199_100_67_/_0.3)] hover:bg-white/10 hover:text-[var(--foreground)]"
                >
                  <FontAwesomeIcon icon={faMessage} className="text-sm" />
                </a>
                <a
                  href="mailto:menardpapa5@gmail.com"
                  aria-label="Email Papa's Repair"
                  className="glass-focus inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent-copper-strong)] transition hover:border-[rgb(199_100_67_/_0.3)] hover:bg-white/10 hover:text-[var(--foreground)]"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                </a>
                <a
                  href="https://www.facebook.com/papaelectronicrepair"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Papa's Repair on Facebook"
                  className="glass-focus inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent-cyan-soft)] transition hover:border-[rgb(87_191_210_/_0.3)] hover:bg-white/10 hover:text-[var(--foreground)]"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
