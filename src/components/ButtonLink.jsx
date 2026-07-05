import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ButtonLink({ to, children, variant = 'primary' }) {
  const classes =
    variant === 'primary'
      ? 'bg-gradient-to-r from-skybrand via-cobalt to-magenta text-white shadow-glow hover:shadow-warm'
      : 'border border-white/10 bg-white/5 text-white hover:border-skybrand/60 hover:bg-white/10';

  return (
    <Link
      to={to}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 ${classes}`}
    >
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
