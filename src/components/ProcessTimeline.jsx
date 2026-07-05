import { motion } from 'framer-motion';

export default function ProcessTimeline({ steps }) {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.06, duration: 0.45 }}
        >
          <span className="text-sm font-bold text-gold">0{index + 1}</span>
          <h3 className="mt-3 font-heading text-base font-bold leading-snug">{step}</h3>
        </motion.div>
      ))}
    </div>
  );
}
