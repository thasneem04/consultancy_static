import MotionPage from "../components/MotionPage.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ServiceStory from "../components/ServiceStory.jsx";

export default function Solutions() {
  return (
    <MotionPage>
      <PageHeader
        eyebrow="Our Services"
        title="A guided journey from business strategy to digital growth."
        text={
          <>
            Explore{" "}
            <span className="company-name">
              Multi Networking Consultant Services
            </span>
            ' established consulting expertise alongside our new creative,
            marketing, web, and app development capabilities.
          </>
        }
      />
      <ServiceStory />
    </MotionPage>
  );
}
