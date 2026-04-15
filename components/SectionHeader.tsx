import { motion } from 'framer-motion';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-10 max-w-2xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm text-orange-50/75 sm:text-base">{description}</p>
    </motion.div>
  );
}
