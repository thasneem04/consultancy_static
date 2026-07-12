import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ButtonLink from "../components/ButtonLink.jsx";
import CTA from "../components/CTA.jsx";
import MotionPage from "../components/MotionPage.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import Section from "../components/Section.jsx";
import {
  process,
  solutions,
  stats,
  strengths,
  testimonials,
  vision2030,
} from "../data/siteContent.jsx";

export default function Home() {
  return (
    <MotionPage>
      <div className="home-page flat-shell">
        <section className="home-hero relative min-h-screen overflow-hidden">
          <img src="/mncs-hero.png" alt="" className="hero-bleed-img" />
          <div className="section-shell relative z-10 flex min-h-[calc(100vh-6rem)] items-center py-12">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Business & Management Consulting
              </p>
              <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
                <span className="company-name">
                  Multi Networking Consultant Services
                </span>{" "}
                connects expertise with global business ambition.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                <span className="company-name">
                  Multi Networking Consultant Services
                </span>{" "}
                supports organizations with strategic advisory, market
                development, compliance, workforce, energy, and digital
                transformation consulting in Saudi Arabia and India.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink to="/solutions">Explore Solutions</ButtonLink>
                <ButtonLink to="/company" variant="secondary">
                  About Us
                </ButtonLink>
              </div>
            </motion.div>
          </div>
        </section>

        <Section>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="font-heading text-4xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-3 font-semibold">{stat.label}</p>
                <p className="mt-2 text-sm text-muted">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Featured Consulting Services"
          title="Advisory built for Saudi market momentum."
          text={
            <>
              Each service area is drawn from{" "}
              <span className="company-name">
                Multi Networking Consultant Services
              </span>
              ' consulting profile and filtered to focus on enterprise,
              compliance, workforce, energy, and digital transformation
              priorities.
            </>
          }
        >
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.slice(0, 3).map((service) => (
              <div key={service.title} className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-muted">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-7 text-white/90"
                    >
                      <CheckCircle2
                        className="mt-1 shrink-0 text-gold"
                        size={16}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Why Choose Us"
          title="Practical expertise from strategy through execution."
        >
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {strengths.slice(0, 8).map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
                <span className="text-sm font-semibold leading-6">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Saudi Vision 2030"
          title="Aligned with national growth priorities."
          text={
            <>
              {" "}
              <span className="company-name">
                Multi Networking Consultant Services
              </span>{" "}
              contributes to the Kingdom's development goals by empowering
              businesses, supporting SME growth, improving employment readiness,
              advancing digital transformation, and enabling sustainable energy
              initiatives.
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {vision2030.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="space-y-3">
                  <Icon
                    className="text-skybrand"
                    size={26}
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          eyebrow="Business Process"
          title="A structured consulting model for measurable progress."
        >
          <ProcessTimeline steps={process} />
        </Section>

        <Section
          eyebrow="Client Perspective"
          title="Consulting designed to create confidence."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="space-y-4">
                <p className="text-lg leading-8 text-white/90">
                  "{item.quote}"
                </p>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            ))}
          </div>
        </Section>
        <CTA plain />
      </div>
    </MotionPage>
  );
}
