import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.article
      className="group gradient-border flex flex-col rounded-2xl p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-skybrand/20 to-magenta/20 text-skybrand">
          <Icon size={26} aria-hidden="true" />
        </span>
        <ArrowUpRight className="text-white/40 transition group-hover:text-gold" size={22} aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-bold">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
      <ul className="mt-6 space-y-3">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-sm text-white/85">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      {expanded && (
        <motion.div
          className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.28 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">PDF service details</p>
          <ul className="mt-4 space-y-3">
            {service.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-skybrand" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      <button
        type="button"
        className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-skybrand/70 hover:bg-skybrand/10"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show Less' : 'Learn More'}
        <ChevronDown className={`transition ${expanded ? 'rotate-180' : ''}`} size={18} aria-hidden="true" />
      </button>
    </motion.article>
  );
}
