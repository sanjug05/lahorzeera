'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const points = [
  {
    title: 'Authentic Jeera Depth',
    detail: 'Real roasted cumin profile with layered aromatics and clean finish.'
  },
  {
    title: 'Luxury Craft Standards',
    detail: 'Premium carbonation and consistency tuned for world-class beverage moments.'
  },
  {
    title: 'Culture-Forward Identity',
    detail: 'An iconic desi flavor language presented with modern international design.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Why Choose Lahor Zeera"
        title="Premium by Taste. Distinct by Culture."
        description="Engineered to stand beside global beverage giants while staying rooted in our spice-born identity."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {points.map((point, idx) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="card-glass p-5"
          >
            <h3 className="mb-2 text-lg font-bold">{point.title}</h3>
            <p className="text-sm text-orange-50/75">{point.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
