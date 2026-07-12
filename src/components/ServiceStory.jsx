import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { digitalServices, solutions } from "../data/siteContent.js";

const storyServices = [...solutions, ...digitalServices];

function visualFor(service) {
  if (service.image) return service.image;
  return "/mncs-hero.png";
}

export default function ServiceStory() {
  return (
    <div className="relative">
      <div className="section-shell relative">
        {storyServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              className="story-chapter flex items-center py-24"
              initial={{ opacity: 0, y: 20, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.15, once: false }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="grid w-full gap-7 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                      <Icon size={18} />
                    </span>
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(storyServices.length).padStart(2, "0")}
                  </div>
                  <h2 className="font-heading text-4xl font-extrabold leading-[1.05] md:text-6xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
                    {service.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm font-medium text-white/90"
                      >
                        <Check className="shrink-0 text-skybrand" size={17} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="focus-ring mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-skybrand via-cobalt to-magenta px-5 py-3 text-sm font-bold shadow-glow transition hover:-translate-y-1"
                  >
                    Discuss this service <ArrowUpRight size={17} />
                  </Link>
                </div>
                <motion.div
                  className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-night shadow-[0_28px_90px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-out hover:scale-105"
                  whileInView={{ y: [20, 0], scale: [0.97, 1] }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src={visualFor(service)}
                    alt={`${service.title} service`}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-night via-night/30 to-transparent" />
                </motion.div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    Multi Networking Consultant Services
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    Designed for practical growth and a stronger digital
                    presence.
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}

        <section className="flex min-h-[90svh] items-center py-24">
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-cobalt via-skybrand to-magenta p-8 shadow-glow md:p-14">
            <div className="absolute inset-0 mesh opacity-30" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">
                The next chapter
              </p>
              <h2 className="mt-5 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                Let's Grow Together
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/90">
                From creative branding and digital marketing to enterprise
                websites and mobile applications, Multi Networking Consultant
                Services helps businesses innovate, grow, and succeed through
                modern digital solutions. Let's build something extraordinary
                together.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-2xl bg-night px-5 py-3 text-sm font-bold transition hover:-translate-y-1"
                >
                  Connect With Us
                </Link>
                <Link
                  to="/contact"
                  className="rounded-2xl border border-white/40 px-5 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
