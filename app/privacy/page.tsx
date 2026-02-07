import Link from "next/link";
import * as motion from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faUserLock, faEnvelope, faArrowLeft, faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen text-gray-300 py-32 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20"
                    >
                        <FontAwesomeIcon icon={faShieldHalved} className="text-black text-4xl" />
                    </motion.div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 font-display">Privacy Policy</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Your trust is our foundation. Here&apos;s how we protect your personal information.</p>
                </div>

                <div className="glass-surface glass-surface-mid p-8 sm:p-12 rounded-3xl space-y-10 group hover:border-white/20 transition-colors duration-500">

                    <section className="flex gap-6 items-start">
                        <div className="glass-surface glass-surface-soft p-3 rounded-lg mt-1 shrink-0">
                            <FontAwesomeIcon icon={faUserLock} className="text-yellow-500 text-xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3 font-display">Information Collection</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                We only collect information necessary to provide our repair services, such as your name, contact number, and address when you inquire or schedule a repair. We use this strictly for coordination.
                            </p>
                        </div>
                    </section>

                    <section className="flex gap-6 items-start">
                        <div className="glass-surface glass-surface-soft p-3 rounded-lg mt-1 shrink-0">
                            <FontAwesomeIcon icon={faDatabase} className="text-blue-500 text-xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3 font-display">Data Protection</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                Your contact details are stored securely and are only accessible to our authorized technicians for the purpose of servicing your electronics. We do not share your data with third parties.
                            </p>
                        </div>
                    </section>

                    <section className="flex gap-6 items-start">
                        <div className="glass-surface glass-surface-soft p-3 rounded-lg mt-1 shrink-0">
                            <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3 font-display">Contact Us</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                If you have any questions about how we handle your data, please contact us directly at <span className="text-yellow-500 font-bold">0977-607-4426</span>.
                            </p>
                        </div>
                    </section>

                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="glass-focus glass-surface glass-surface-soft glass-pill inline-flex items-center gap-2 text-white hover:text-yellow-300 transition group font-bold tracking-wide text-lg px-8 py-3">
                        <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
