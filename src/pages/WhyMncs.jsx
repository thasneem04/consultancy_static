import { CheckCircle2 } from "lucide-react";
import CTA from "../components/CTA.jsx";
import MotionPage from "../components/MotionPage.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import Section from "../components/Section.jsx";
import {
  ethics,
  expansion,
  process,
  strengths,
  vision2030,
} from "../data/siteContent.jsx";

export default function WhyMncs() {
  return (
    <MotionPage>
      <div className="flat-shell">
        <PageHeader
          eyebrow="Why Us"
          title="Strategic consulting with local market knowledge, ethics, and execution discipline."
          text={
            <>
              {" "}
              <span className="company-name">
                Multi Networking Consultant Services
              </span>{" "}
              combines a client-focused approach, professional network, Vision
              2030 alignment, and strong government liaison support to help
              organizations move from plan to measurable progress.
            </>
          }
        />

        <Section
          eyebrow="Consulting Process"
          title="A clear path from requirement to optimization."
        >
          <ProcessTimeline steps={process} />
        </Section>

        <Section
          eyebrow="Company Strengths"
          title={
            <>
              Why clients choose{" "}
              <span className="company-name">
                Multi Networking Consultant Services
              </span>
              .
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <div key={item} className="glass flex gap-3 rounded-2xl p-5">
                <CheckCircle2 className="shrink-0 text-gold" size={20} />
                <span className="text-sm font-semibold leading-6">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vision 2030 Alignment"
          title="Supporting national transformation through business enablement."
        >
          <div className="grid gap-5 md:grid-cols-5">
            {vision2030.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="gradient-border rounded-2xl p-5 text-center"
                >
                  <Icon className="mx-auto text-skybrand" size={26} />
                  <p className="mt-4 text-sm font-semibold leading-6">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          eyebrow="Professional Ethics"
          title="Trust is built into the operating model."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl p-7 bg-white/[0.02] border border-white/6">
              <h3 className="font-heading text-2xl font-bold">
                Protocol & Ethics
              </h3>
              <div className="mt-6 grid gap-3">
                {ethics.map((item) => (
                  <p
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-7 bg-white/[0.02] border border-white/6">
              <h3 className="font-heading text-2xl font-bold">
                Future Expansion Plans
              </h3>
              <div className="mt-6 grid gap-3">
                {expansion.map((item) => (
                  <p
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Client Benefits"
          title={
            <>
              What clients gain from the{" "}
              <span className="company-name">
                Multi Networking Consultant Services
              </span>{" "}
              model.
            </>
          }
        >
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Faster market clarity",
              "Improved compliance readiness",
              "Stronger project execution",
            ].map((item) => (
              <div key={item} className="gradient-border rounded-2xl p-6">
                <h3 className="font-heading text-xl font-bold">{item}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  <span className="company-name">
                    Multi Networking Consultant Services
                  </span>{" "}
                  turns advisory work into practical action through structured
                  analysis, localized strategy, implementation support, and
                  continuous optimization.
                </p>
              </div>
            ))}
          </div>
        </Section>
        <CTA />
      </div>
    </MotionPage>
  );
}
