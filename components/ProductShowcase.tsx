'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { SectionHeader } from './SectionHeader';

export function ProductShowcase() {
  return (
    <section id="products" className="section-shell">
      <SectionHeader
        eyebrow="Product Line"
        title="Designed for Every Premium Palate"
        description="From signature originals to modern low-sugar alternatives, every Lahor Zeera variant is engineered for expressive flavor and refined refreshment."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zeera-cola/70"
          >
            <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${product.accent}`}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-extrabold">{product.name}</h3>
              <p className="text-sm font-medium text-orange-300">{product.flavor}</p>
              <p className="text-sm leading-relaxed text-orange-50/70">{product.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
