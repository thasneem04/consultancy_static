import CTA from '../components/CTA.jsx';
import MotionPage from '../components/MotionPage.jsx';
import PageHeader from '../components/PageHeader.jsx';
import Section from '../components/Section.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { solutions } from '../data/siteContent.js';

export default function Solutions() {
  return (
    <MotionPage>
      <PageHeader
        eyebrow="Solutions"
        title="Focused consulting services for complex enterprise decisions."
        text="MNCS delivers tailored advisory across the relevant service sectors identified in the company profile: energy, digital modernization, workforce, compliance, project planning, and renewable energy."
      />
      <Section eyebrow="Core Services" title="Six consulting pillars. No distractions.">
        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </Section>
      <CTA />
    </MotionPage>
  );
}
