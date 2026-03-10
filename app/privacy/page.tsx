import Link from "next/link";
import * as motion from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faUserLock, faEnvelope, faArrowLeft, faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolicy() {
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
            <FontAwesomeIcon icon={faShieldHalved} className="text-4xl" />
          </motion.div>
          <p className="section-eyebrow justify-center">Privacy</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--foreground)] min-[390px]:text-5xl sm:mt-5 sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] sm:mt-4 sm:text-lg sm:leading-8">
            Your trust is our foundation. Here&apos;s how we protect the contact information you
            share with Papa&apos;s Repair.
          </p>
        </div>

        <div className="glass-surface glass-surface-strong legal-card space-y-10 sm:p-12">
          <section className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="glass-surface glass-surface-soft mt-1 shrink-0 rounded-2xl p-3 text-[var(--accent-copper-strong)]">
              <FontAwesomeIcon icon={faUserLock} className="text-xl" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--foreground)] min-[390px]:text-2xl">Information Collection</h2>
              <p className="mt-2.5 text-base leading-7 text-[var(--foreground-muted)] sm:mt-3 sm:text-lg sm:leading-8">
                We only collect the details needed to provide repair services, such as your name,
                contact number, and address when you inquire or schedule a visit.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="glass-surface glass-surface-soft mt-1 shrink-0 rounded-2xl p-3 text-[var(--accent-cyan-soft)]">
              <FontAwesomeIcon icon={faDatabase} className="text-xl" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--foreground)] min-[390px]:text-2xl">Data Protection</h2>
              <p className="mt-2.5 text-base leading-7 text-[var(--foreground-muted)] sm:mt-3 sm:text-lg sm:leading-8">
                Your contact details are stored securely and only used by authorized technicians
                for coordination, service updates, and repair scheduling. We do not sell or share
                your data with third parties.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="glass-surface glass-surface-soft mt-1 shrink-0 rounded-2xl p-3 text-[var(--accent-copper-strong)]">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--foreground)] min-[390px]:text-2xl">Contact Us</h2>
              <p className="mt-2.5 text-base leading-7 text-[var(--foreground-muted)] sm:mt-3 sm:text-lg sm:leading-8">
                If you have questions about how we handle your information, contact us directly at{" "}
                <span className="font-bold text-[var(--accent-copper-strong)]">0977-607-4426</span>.
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
