import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ButtonLink from "../components/ButtonLink.jsx";
import Card from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";
import MotionPage from "../components/MotionPage.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import Section from "../components/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import {
  process,
  solutions,
  stats,
  strengths,
  testimonials,
  vision2030,
} from "../data/siteContent.js";

export default function Home() {
  return (
    <MotionPage>
      <section className="relative min-h-screen overflow-hidden">
        <img src="/mncs-hero.png" alt="" className="hero-bleed-img" />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/84 to-night/20" />
        <div className="mesh absolute inset-0 opacity-70" />
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
            <h1 className="font-heading text-4xl font-extrabold leading-tight md:text-7xl">
              Multi Networking Consultant Services connects expertise with
              global business ambition.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Multi Networking Consultant Services supports organizations with
              strategic advisory, market development, compliance, workforce,
              energy, and digital transformation consulting in Saudi Arabia and
              India.
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
            <div key={stat.label} className="glass rounded-2xl p-6">
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
        text="Each service area is drawn from Multi Networking Consultant Services' consulting profile and filtered to focus on enterprise, compliance, workforce, energy, and digital transformation priorities."
      >
        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Choose Us"
        title="Practical expertise from strategy through execution."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {strengths.slice(0, 8).map((item) => (
            <div
              key={item}
              className="glass flex items-start gap-3 rounded-2xl p-5"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
              <span className="text-sm font-semibold leading-6">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Saudi Vision 2030"
        title="Aligned with national growth priorities."
        text="Multi Networking Consultant Services contributes to the Kingdom's development goals by empowering businesses, supporting SME growth, improving employment readiness, advancing digital transformation, and enabling sustainable energy initiatives."
      >
        <div className="grid gap-5 md:grid-cols-5">
          {vision2030.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title} />
          ))}
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
            <article key={item.name} className="glass rounded-2xl p-7">
              <p className="text-lg leading-8 text-white/90">"{item.quote}"</p>
              <p className="mt-6 font-semibold">{item.name}</p>
              <p className="text-sm text-muted">{item.role}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </MotionPage>
  );
}
