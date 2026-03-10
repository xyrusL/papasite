import Link from "next/link";
import * as motion from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract, faScrewdriverWrench, faMedal, faTruckFast, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Terms() {
  return (
    <main className="legal-shell font-sans text-[var(--foreground)]">
      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-10 text-center sm:mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="legal-icon-chip mx-auto mb-6"
          >
            <FontAwesomeIcon icon={faFileContract} className="text-4xl" />
          </motion.div>
          <p className="section-eyebrow justify-center">Terms</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--foreground)] min-[390px]:text-5xl sm:mt-5 sm:text-6xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] sm:mt-4 sm:text-lg sm:leading-8">
            Clear service expectations so your repair experience stays smooth, transparent, and
            professional.
          </p>
        </div>

        <div className="glass-surface glass-surface-strong legal-card space-y-10 sm:p-12">
          <section className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="glass-surface glass-surface-soft mt-1 shrink-0 rounded-2xl p-3 text-[var(--accent-copper-strong)]">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="text-xl" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--foreground)] min-[390px]:text-2xl">Service and Diagnostics</h2>
              <p className="mt-2.5 text-base leading-7 text-[var(--foreground-muted)] sm:mt-3 sm:text-lg sm:leading-8">
                All units are subject to an initial diagnostic check. We provide an estimated cost
                before proceeding with major repairs so you can decide with full context.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="glass-surface glass-surface-soft mt-1 shrink-0 rounded-2xl p-3 text-[var(--accent-cyan-soft)]">
              <FontAwesomeIcon icon={faMedal} className="text-xl" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--foreground)] min-[390px]:text-2xl">Service Warranty</h2>
              <p className="mt-2.5 text-base leading-7 text-[var(--foreground-muted)] sm:mt-3 sm:text-lg sm:leading-8">
                We provide a service warranty based on the repair type and work performed. Warranty
                details are discussed per job, and warranty becomes void if the warranty seal is
                broken.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="glass-surface glass-surface-soft mt-1 shrink-0 rounded-2xl p-3 text-[var(--accent-copper-strong)]">
              <FontAwesomeIcon icon={faTruckFast} className="text-xl" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--foreground)] min-[390px]:text-2xl">Home Service</h2>
              <p className="mt-2.5 text-base leading-7 text-[var(--foreground-muted)] sm:mt-3 sm:text-lg sm:leading-8">
                Can&apos;t bring your unit to the shop? We offer convenient home service repairs
                within Quezon City and nearby areas so diagnostics and service can come to you.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Link href="/" className="glass-focus button-secondary group inline-flex max-w-sm">
            <FontAwesomeIcon icon={faArrowLeft} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
