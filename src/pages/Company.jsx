import Card from '../components/Card.jsx';
import CTA from '../components/CTA.jsx';
import MotionPage from '../components/MotionPage.jsx';
import PageHeader from '../components/PageHeader.jsx';
import Section from '../components/Section.jsx';
import { objectives, strengths, values } from '../data/siteContent.js';
import { Eye, Flag, Target } from 'lucide-react';

export default function Company() {
  return (
    <MotionPage>
      <PageHeader
        eyebrow="Company"
        title="A trusted business and management consulting firm for Saudi Arabia’s evolving market."
        text="MNC Group, formally Multi Networking Consultant Services, helps organizations improve performance, expand market presence, and build sustainable growth strategies across Saudi Arabia and India."
      />

      <Section eyebrow="Overview" title="Connecting expertise. Empowering global business.">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-2xl p-7 text-base leading-8 text-muted">
            <p>
              MNCS works closely with companies to develop strategic plans, optimize operations, and unlock business opportunities in one of the world’s fastest-growing economies. Its consulting model combines local market knowledge, professional networks, regulatory awareness, and execution support.
            </p>
            <p className="mt-5">
              The firm supports businesses with strategic advisory, market development, industry-focused consulting, digital transformation, manpower planning, compliance, project planning, and sustainable energy advisory.
            </p>
          </div>
          <div className="grid gap-5">
            <Card icon={Target} title="Mission">
              To support business excellence and national growth by delivering result-driven consulting solutions aligned with Saudi Vision 2030.
            </Card>
            <Card icon={Eye} title="Vision">
              To be among the most trusted consulting firms in Saudi Arabia, driving business success and contributing to the Kingdom’s transformation goals.
            </Card>
          </div>
        </div>
      </Section>

      <Section eyebrow="Core Values" title="The principles behind every engagement.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => <Card key={value.title} icon={value.icon} title={value.title}>{value.text}</Card>)}
        </div>
      </Section>

      <Section eyebrow="Corporate Philosophy" title="Professional advisory with accountable execution.">
        <div className="grid gap-5 lg:grid-cols-3">
          <Card icon={Flag} title="Client-first strategy">
            MNCS begins with a clear understanding of the client’s goals, operating context, constraints, and market opportunities.
          </Card>
          <Card icon={Flag} title="Local insight, global standards">
            The company blends Saudi market knowledge with structured consulting practices and professional delivery standards.
          </Card>
          <Card icon={Flag} title="Sustainable outcomes">
            Recommendations are designed to improve performance, support compliance, and create long-term growth.
          </Card>
        </div>
      </Section>

      <Section eyebrow="Strengths & Objectives" title="Built to help companies enter, scale, and transform.">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-2xl p-7">
            <h3 className="font-heading text-2xl font-bold">Company Strengths</h3>
            <div className="mt-6 grid gap-3">
              {strengths.map((item) => <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted">{item}</p>)}
            </div>
          </div>
          <div className="glass rounded-2xl p-7">
            <h3 className="font-heading text-2xl font-bold">Business Objectives</h3>
            <div className="mt-6 grid gap-3">
              {objectives.map((item) => <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted">{item}</p>)}
            </div>
          </div>
        </div>
      </Section>
      <CTA />
    </MotionPage>
  );
}
