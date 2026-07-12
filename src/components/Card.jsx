import { motion } from 'framer-motion';

export default function Card({
  icon: Icon,
  title,
  children,
  className = '',
  plain = false,
}) {
  const shellClassName = plain
    ? `transition duration-300 ${className}`.trim()
    : `gradient-border rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow ${className}`.trim();

  return (
    <motion.article
      className={shellClassName}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      {Icon && (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-skybrand/12 text-skybrand">
          <Icon size={24} aria-hidden="true" />
        </div>
      )}
      <h3 className="font-heading text-xl font-bold">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </motion.article>
  );
}
