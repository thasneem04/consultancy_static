import Card from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";
import MotionPage from "../components/MotionPage.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import { industries } from "../data/siteContent.jsx";

export default function Industries() {
  return (
    <MotionPage>
      <div className="flat-shell">
        <PageHeader
          eyebrow="Industries"
          title="Industry advisory for future-ready business sectors."
          text={
            <>
              {" "}
              <span className="company-name">
                Multi Networking Consultant Services
              </span>{" "}
              focuses on relevant high-growth sectors aligned with Saudi Vision
              2030, supporting practical execution, compliance readiness, and
              sustainable corporate development.
            </>
          }
        />
        <Section
          eyebrow="Sectors Served"
          title={
            <>
              Relevant markets where{" "}
              <span className="company-name">
                Multi Networking Consultant Services
              </span>{" "}
              creates strategic value.
            </>
          }
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card
                key={industry.title}
                icon={industry.icon}
                title={industry.title}
              >
                {industry.text}
              </Card>
            ))}
          </div>
        </Section>
        <CTA />
      </div>
    </MotionPage>
  );
}
