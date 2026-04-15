'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="Our Story"
        title="From Traditional Spice Rituals to Global Premium Pour"
        description="Lahor Zeera began with a mission: preserve the soul of desi jeera refreshment while elevating every detail for modern, cosmopolitan taste."
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="card-glass grid gap-6 p-6 sm:grid-cols-2 sm:p-8"
      >
        <p className="text-sm leading-relaxed text-orange-50/80 sm:text-base">
          Every bottle captures roasted cumin depth, crisp carbonation, and a precision-balanced spice profile.
          We source thoughtfully, blend expertly, and finish with a signature dry sparkle designed for elevated
          everyday moments.
        </p>
        <p className="text-sm leading-relaxed text-orange-50/80 sm:text-base">
          Whether paired with street food, fine dining, or midnight drives, Lahor Zeera brings heritage to the
          world stage — bold enough for trendsetters, authentic enough for purists.
        </p>
      </motion.div>
    </section>
  );
}
