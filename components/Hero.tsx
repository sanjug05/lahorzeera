'use client';

import { motion } from 'framer-motion';

const bubbles = Array.from({ length: 22 });

const taglines = [
  'Heritage in Every Spark.',
  'Desi Soul. Global Swagger.',
  'Spice Elevated to Luxury Fizz.'
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-glass-gradient" />
      {bubbles.map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-3 w-3 rounded-full bg-orange-100/30"
          style={{ left: `${(index * 17) % 100}%`, bottom: '-10%' }}
          animate={{
            y: ['0%', '-120vh'],
            x: [0, (index % 4) * 8 - 10, 0],
            opacity: [0, 0.9, 0]
          }}
          transition={{
            duration: 7 + (index % 6),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.25
          }}
        />
      ))}

      <div className="section-shell relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex rounded-full border border-orange-200/25 bg-orange-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-100"
        >
          Premium Jeera Soda
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl"
        >
          Lahor Zeera
          <span className="mt-2 block bg-gradient-to-r from-orange-200 via-orange-400 to-amber-200 bg-clip-text text-transparent">
            Crafted to Fizz Above.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 grid max-w-2xl gap-3 text-sm text-orange-50/90 sm:text-base"
        >
          {taglines.map((line) => (
            <p key={line} className="card-glass px-4 py-3">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#products"
            className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-glow transition hover:scale-[1.03]"
          >
            Explore Flavors
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-orange-200/70 hover:text-orange-100"
          >
            Feel the Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
}
