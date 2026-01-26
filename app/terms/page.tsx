import Link from "next/link";
import * as motion from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract, faScrewdriverWrench, faMedal, faTruckFast, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Terms() {
    return (
        <main className="bg-black min-h-screen text-gray-300 py-32 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

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
                        className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20"
                    >
                        <FontAwesomeIcon icon={faFileContract} className="text-white text-4xl" />
                    </motion.div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 font-display">Terms of Service</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Guidelines to ensure a smooth and professional repair experience.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/10 space-y-10 group hover:border-white/20 transition-colors duration-500">

                    <section className="flex gap-6 items-start">
                        <div className="bg-white/10 p-3 rounded-lg mt-1 shrink-0">
                            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-white text-xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3 font-display">Service & Diagnostics</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                All units are subject to an initial diagnostic check. We believe in transparency—we will provide an estimated cost before proceeding with any major repairs.
                            </p>
                        </div>
                    </section>

                    <section className="flex gap-6 items-start">
                        <div className="bg-white/10 p-3 rounded-lg mt-1 shrink-0">
                            <FontAwesomeIcon icon={faMedal} className="text-yellow-500 text-xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3 font-display">Service Warranty</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                We provide a service warranty for our repairs. The specific coverage and duration will be discussed and agreed upon with the customer based on the repair type. <span className="text-yellow-500 font-bold">Warranty is void if the warranty seal is broken.</span>
                            </p>
                        </div>
                    </section>

                    <section className="flex gap-6 items-start">
                        <div className="bg-white/10 p-3 rounded-lg mt-1 shrink-0">
                            <FontAwesomeIcon icon={faTruckFast} className="text-red-500 text-xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3 font-display">Home Service</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                Can't bring your unit to the shop? We offer convenient <strong className="text-white">Home Service</strong> repairs within Quezon City and nearby areas. Schedule a visit and let us bring the repair shop to you!
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition group font-bold tracking-wide text-lg px-8 py-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                        <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
