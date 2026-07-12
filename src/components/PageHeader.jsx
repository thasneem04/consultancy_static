import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="mesh absolute inset-0 opacity-70" />
      <div className="section-shell relative z-10 py-16 md:py-24">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{text}</p>
        </motion.div>
      </div>
    </header>
  );
}
