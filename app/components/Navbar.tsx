"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faWrench } from "@fortawesome/free-solid-svg-icons";
import * as motion from "framer-motion/client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Home", "Services", "Trust", "Music", "Contact"];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-6 sm:pt-3">
      <div className="glass-surface glass-surface-mid mobile-safe-pad mx-auto max-w-7xl rounded-[1.2rem] border border-white/5 sm:rounded-[1.6rem]">
        <div className="mx-auto flex h-16 items-center justify-between px-3 sm:h-20 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#hero"
              className="glass-focus flex min-w-0 items-center gap-2 rounded-full px-1.5 py-1 transition hover:text-[var(--foreground)] sm:gap-3 sm:px-2 sm:py-1.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:rgb(199_100_67_/_0.3)] bg-[rgb(199_100_67_/_0.12)] text-sm text-[var(--accent-copper-strong)] sm:h-11 sm:w-11 sm:text-base">
                <FontAwesomeIcon icon={faWrench} />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-base font-bold text-[var(--foreground)] sm:text-xl">
                  Papa&apos;s Repair
                </span>
                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground-muted)] md:block">
                  Electronics Specialist
                </span>
              </span>
            </a>
          </motion.div>

          <div className="hidden md:block">
            <motion.div
              className="ml-10 flex items-baseline gap-2 lg:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {items.map((item) => (
                <a
                  key={item}
                  href={item === "Music" ? "/music" : `#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`}
                  className="glass-focus group relative rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] transition hover:bg-white/5 hover:text-[var(--foreground)]"
                >
                  {item}
                  <span className="absolute inset-x-4 bottom-1 h-px scale-x-0 bg-[var(--accent-copper-strong)] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="glass-focus inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] bg-white/5 p-2.5 text-[var(--foreground-soft)] transition hover:text-[var(--accent-cyan-soft)]"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="border-t border-[var(--border-subtle)] px-2 pb-3 pt-2 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="space-y-1.5 rounded-[1rem] bg-black/10 p-1.5">
              {items.map((item) => (
                <a
                  key={item}
                  href={item === "Music" ? "/music" : `#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="glass-focus block rounded-[1rem] border border-transparent px-3.5 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--foreground-soft)] transition hover:border-[color:rgb(199_100_67_/_0.18)] hover:bg-white/5 hover:text-[var(--foreground)]"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
