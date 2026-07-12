import ButtonLink from './ButtonLink.jsx';

export default function CTA() {
  return (
    <section className="section-shell py-10 md:py-16">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cobalt via-skybrand to-magenta p-8 shadow-glow md:p-12">
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">Partner with Multi Networking Consultant Services</p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-5xl">
            Build a stronger Saudi market strategy with trusted consulting support.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/85">
            From feasibility to compliance, workforce readiness, digital transformation, and execution, Multi Networking Consultant Services helps companies move with clarity.
          </p>
          <div className="mt-7">
            <ButtonLink to="/contact" variant="secondary">Start a Conversation</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
