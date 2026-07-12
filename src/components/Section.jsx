import { motion } from 'framer-motion';

export default function Section({ eyebrow, title, text, children, className = '' }) {
  return (
    <section className={`section-shell py-16 md:py-24 ${className}`}>
      {(eyebrow || title || text) && (
        <motion.div
          className="section-copy mb-10 w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-skybrand">{eyebrow}</p>}
          {title && <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">{title}</h2>}
          {text && (
            <p className="section-text mt-5 text-base leading-8 text-muted md:text-lg">
              {text}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
