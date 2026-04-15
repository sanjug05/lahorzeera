'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Lifestyle Experience"
        title="Built for Rooftops, Dinners, and Celebrations"
        description="Lahor Zeera belongs where style meets emotion — social nights, culinary pairings, and curated gatherings."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        className="card-glass overflow-hidden"
      >
        <div className="relative h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=80"
            alt="Lifestyle setting with premium beverages"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-6 sm:p-8">
            <p className="max-w-xl text-sm leading-relaxed text-orange-50 sm:text-base">
              More than a soft drink — Lahor Zeera is a ritual of refreshment that transforms the ordinary into an
              expressive premium moment.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
