import { ArrowUpRight, Globe2, Mail, Phone } from "lucide-react";
import MotionPage from "../components/MotionPage.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import { contact, quickContacts } from "../data/siteContent.js";

function telHref(number) {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}

export default function Contact() {
  return (
    <MotionPage>
      <PageHeader
        eyebrow="Contact"
        title="Let’s connect and move your next project forward."
        text="Reach Multi Networking Consultant Services for consulting support, market entry advisory, compliance guidance, project planning, manpower, digital transformation, or energy-sector strategy."
      />

      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,11,20,0.96),rgba(9,16,29,0.88))] p-6 shadow-[0_24px_120px_rgba(0,0,0,0.45)] md:p-8">
            <div className="absolute inset-0 mesh opacity-30" />
            <div className="absolute -left-16 top-8 h-36 w-36 rounded-full bg-skybrand/20 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-magenta/15 blur-3xl" />

            <div className="relative z-10 grid gap-8">
              <div className="grid place-items-center rounded-[1.75rem] border border-white/10 bg-black/50 p-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_70px_rgba(0,0,0,0.35)]">
                <img
                  src="/mnc-logo.jpg"
                  alt="Multi Networking Consultant Services logo"
                  className="w-full max-w-md rounded-[1.5rem] object-contain"
                  loading="eager"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Brand
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight">
                    Multi Networking Consultant Services
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Business and management consulting for organizations that need practical strategy, local execution support, and premium brand presentation.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Website
                  </p>
                  <a
                    href={`https://${contact.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex items-center gap-2 font-heading text-2xl font-extrabold transition hover:text-skybrand"
                  >
                    {contact.website}
                    <ArrowUpRight size={18} />
                  </a>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Built for direct inquiries, fast response, and a clear line of contact across India and Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-5">
            <div className="glass rounded-[2rem] p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Contact Details
              </h2>

              <div className="mt-7 grid gap-5">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-skybrand/15 text-skybrand">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Email
                      </p>
                      <p className="text-sm /*  */text-muted">General and operations inboxes</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 text-sm font-semibold">
                    {contact.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="focus-ring rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-skybrand/60 hover:bg-skybrand/10"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-magenta/15 text-magenta">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Phone
                      </p>
                      <p className="text-sm text-muted">India and Saudi Arabia</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 text-sm font-semibold">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone.label}
                        href={telHref(phone.number)}
                        className="focus-ring rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-magenta/60 hover:bg-magenta/10"
                      >
                        <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                          {phone.label}
                        </span>
                        <span className="mt-1 block text-base text-white">
                          {phone.number}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                      <Globe2 size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Address
                      </p>
                      <p className="text-sm text-muted">Dammam, Kingdom of Saudi Arabia</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2 text-sm leading-7 text-white/90">
                    {contact.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Enquiry" title="Send a message and we’ll respond quickly.">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form className="glass rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Company
                <input
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35"
                  placeholder="Company name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input
                  type="email"
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35"
                  placeholder="name@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Phone
                <input
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35"
                  placeholder="+91 8838411007"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Message
              <textarea
                className="focus-ring min-h-40 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35"
                placeholder="Tell us about your business requirement"
              />
            </label>
            <button
              type="button"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-skybrand via-cobalt to-magenta px-6 py-3 text-sm font-semibold shadow-glow transition hover:translate-y-[-1px]"
            >
              Submit Enquiry
              <ArrowUpRight size={16} />
            </button>
          </form>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <iframe
                title="Multi Networking Consultant Services map"
                className="h-72 w-full sm:h-96 lg:h-[28rem]"
                loading="lazy"
                src="https://www.google.com/maps?q=Bilal%20Ibn%20Rabah%20Street%2C%20Madinat%20Al%20Umal%2C%20Dammam%2032253%2C%20Saudi%20Arabia&output=embed"
              />
            </div>

            <div className="glass rounded-[2rem] p-6">
              <h3 className="font-heading text-2xl font-bold">Quick Contact</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
                {quickContacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <Icon className="text-gold" size={22} />
                      <h4 className="mt-4 font-heading text-lg font-bold">
                        {item.title}
                      </h4>
                      <p className="mt-2 break-words text-sm leading-7 text-muted">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MotionPage>
  );
}
