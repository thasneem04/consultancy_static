import { motion } from "framer-motion";
import { ArrowUpRight, Check, Briefcase, BrainCircuit, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { digitalServices, solutions } from "../data/siteContent.jsx";

const aiService = {
  title: "AI Agent solution",
  icon: BrainCircuit,
  description:
    "Intelligent AI Automation for Modern Businesses\nTransform your business with intelligent AI agents designed to automate repetitive tasks, streamline operations, and improve customer experiences. We develop custom AI solutions that integrate seamlessly with your existing workflows, enabling businesses to increase productivity, reduce operational costs, and make faster, data-driven decisions. From customer support and sales automation to internal process management and business intelligence, our AI agents help your organization operate smarter and scale efficiently.",
  benefits: [
    "Intelligent Business Automation",
    "AI-Powered Business Operations",
    "Workflow Optimization",
    "Customer Experience Solutions",
    "Sales & Marketing Automation",
    "Operational Efficiency",
    "Process Intelligence",
    "Data-Driven Decision Support",
    "Enterprise AI Integration",
    "Digital Workforce Solutions",
    "AI Consulting & Strategy",
    "Custom AI Solutions",
    "Intelligent Process Automation",
    "Business Productivity Enhancement",
    "Scalable AI Transformation",
  ],
  image: "/images/ai-agent.jpg",
};

const eventsService = {
  title: "Events",
  icon: Calendar,
  description:
    "Professional corporate events management and execution. From planning and coordination to seamless execution, we handle every aspect of your business events. Whether it's corporate conferences, product launches, networking sessions, or company retreats, our team ensures a memorable and impactful experience tailored to your organizational goals.",
  benefits: [
    "Corporate Conferences",
    "Product Launches",
    "Networking Events",
    "Company Retreats",
    "Event Planning & Coordination",
    "Vendor Management",
    "On-site Execution",
  ],
  image: "/images/events-management.jpg",
};

const businessConsulting = {
  title: "Business Consulting Services",
  icon: Briefcase,
  description:
    "Whether you're starting a new business or expanding into Saudi Arabia, we provide end-to-end business consulting solutions to help you succeed. From company formation and regulatory guidance to business strategy, operational planning, and process optimization, our experts support you at every stage. We help entrepreneurs, startups, and established businesses build a strong foundation, improve efficiency, and achieve sustainable growth in the Kingdom of Saudi Arabia.",
  benefits: [
    "Company Formation in Saudi Arabia",
    "Business Licensing & Registration",
    "Business Strategy Development",
    "Operational Planning & Optimization",
    "Market Entry & Expansion",
    "Corporate Advisory Services",
    "Process Improvement",
    "Compliance & Regulatory Support",
    "Business Growth Solutions",
    "Ongoing Business Consulting",
  ],
  image: "/images/projects-planning.png",
};

const subDigitalServices = [
  aiService,
  digitalServices.find((s) => s.title === "Web Development"),
  digitalServices.find((s) => s.title === "App Development"),
  digitalServices.find((s) => s.title === "Graphic Design"),
  digitalServices.find((s) => s.title === "Digital Marketing"),
];

const mainSolutionsList = [
  businessConsulting,
  solutions.find((s) => s.title === "Oil & Gas Consulting"),
  solutions.find((s) => s.title === "Digital Transformation"),
  solutions.find((s) => s.title === "Manpower & HR Consulting"),
  solutions.find((s) => s.title === "Regulatory & Compliance"),
  solutions.find((s) => s.title === "Projects & Planning"),
  solutions.find((s) => s.title === "Renewable Energy"),
  eventsService,
];

const storyServices = [];
mainSolutionsList.forEach((service) => {
  if (!service) return;
  storyServices.push(service);
  if (service.title === "Digital Transformation") {
    subDigitalServices.forEach((sub) => {
      if (sub) storyServices.push({ ...sub, isSub: true });
    });
  }
});

function visualFor(service) {
  if (service.image) return service.image;
  return "/mncs-hero.png";
}

export default function ServiceStory() {
  return (
    <div className="relative">
      <div className="section-shell relative">
        {storyServices.map((service, index) => {
          const Icon = service.icon || Briefcase;
          return (
            <motion.article
              key={service.title}
              className={`story-chapter flex items-center py-24 ${
                service.isSub ? "ml-0 md:ml-20 border-l-4 border-skybrand/50 pl-6 md:pl-10" : ""
              }`}
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
                    {!service.isSub && (
                      <>
                        {String(
                          storyServices.filter((s) => !s.isSub).indexOf(service) + 1
                        ).padStart(2, "0")}{" "}
                        /{" "}
                        {String(storyServices.filter((s) => !s.isSub).length).padStart(
                          2,
                          "0"
                        )}
                      </>
                    )}
                    {service.isSub && "Digital Service"}
                  </div>
                  <h2 className="font-heading text-4xl font-extrabold leading-[1.05] md:text-6xl whitespace-pre-line">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg whitespace-pre-line">
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
                  <p className="text-xs font-bold uppercase tracking-[0.2em]">
                    <span className="company-name">
                      Multi Networking Consultant Services
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    Designed for practical growth and a stronger digital presence.
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
                websites and mobile applications,{" "}
                <span className="company-name">
                  Multi Networking Consultant Services
                </span>{" "}
                helps businesses innovate, grow, and succeed through modern
                digital solutions. Let's build something extraordinary together.
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
