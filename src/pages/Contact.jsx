import { Mail, MapPin, Phone } from "lucide-react";
import MotionPage from "../components/MotionPage.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import { contact, quickContacts } from "../data/siteContent.js";

export default function Contact() {
  return (
    <MotionPage>
      <PageHeader
        eyebrow="Contact"
        title="Have an enquiry? MNCS is ready to help."
        text="Connect with the team for consulting support, market entry advisory, compliance guidance, project planning, manpower, digital transformation, or energy-sector strategy."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form className="glass rounded-2xl p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Company
                <input
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white"
                  placeholder="Company name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input
                  type="email"
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white"
                  placeholder="name@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Phone
                <input
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white"
                  placeholder="+966 55599 1530"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Message
              <textarea
                className="focus-ring min-h-36 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white"
                placeholder="Tell us about your business requirement"
              />
            </label>
            <button
              type="button"
              className="focus-ring mt-6 rounded-2xl bg-gradient-to-r from-skybrand to-magenta px-6 py-3 text-sm font-semibold shadow-glow"
            >
              Submit Enquiry
            </button>
          </form>

          <aside className="grid gap-5">
            <div className="glass rounded-2xl p-6">
              <h2 className="font-heading text-2xl font-bold">
                Office Details
              </h2>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-muted">
                <p className="flex gap-3">
                  <MapPin className="shrink-0 text-skybrand" size={20} />
                  {contact.address}
                </p>
                <p className="flex gap-3">
                  <Phone className="shrink-0 text-skybrand" size={20} />
                  {contact.phones.join(" | ")}
                </p>
                <p className="flex gap-3">
                  <Mail className="shrink-0 text-skybrand" size={20} />
                  {contact.email}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Business Hours:
                  </span>{" "}
                  {contact.hours}
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                {contact.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={social.label}
                      type="button"
                      className="focus-ring flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                      aria-label={social.label}
                    >
                      <Icon />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="MNC Group map"
                className="h-72 w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=King%20Fahad%20St%2C%20Al%20Khobar%2034433%2C%20Saudi%20Arabia&output=embed"
              />
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Quick Contact"
        title="Choose the fastest route to the MNCS team."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {quickContacts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="gradient-border rounded-2xl p-6">
                <Icon className="text-gold" size={24} />
                <h3 className="mt-4 font-heading text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.value}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </MotionPage>
  );
}
