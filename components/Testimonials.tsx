'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/products';
import { SectionHeader } from './SectionHeader';

export function Testimonials() {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Testimonials"
        title="Loved by Taste Leaders Worldwide"
        description="From creators to culinary partners, the response is unanimous: Lahor Zeera redefines what jeera soda can be."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="card-glass p-6"
          >
            <p className="text-sm leading-relaxed text-orange-50/90">“{testimonial.quote}”</p>
            <footer className="mt-4 border-t border-white/10 pt-4">
              <p className="text-sm font-bold text-white">{testimonial.name}</p>
              <p className="text-xs text-orange-200/70">{testimonial.title}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
