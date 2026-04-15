'use client';

import { motion } from 'framer-motion';

export function CtaBanner() {
  return (
    <section className="section-shell pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-orange-200/25 bg-liquid-wave p-8 text-center shadow-glow sm:p-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,210,120,0.2),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,230,170,0.15),transparent_35%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-100/90">Join the Fizz Movement</p>
          <h3 className="mt-4 text-3xl font-black sm:text-4xl">Ready to Stock Lahor Zeera?</h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-orange-50/85 sm:text-base">
            Bring premium desi sparkle to your shelves, menus, and curated experiences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-orange-100">
              Become a Partner
            </button>
            <button className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white">
              Download Brand Deck
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
