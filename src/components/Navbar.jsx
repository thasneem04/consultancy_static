import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { contact, navItems } from "../data/siteContent.jsx";

function makeWhatsAppLink(number, message) {
  const digits = number.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const consultHref = makeWhatsAppLink(
    contact.phones.find((phone) => phone.label === "Saudi Arabia")?.number ??
      "+966 577063763",
    "Hello, I would like to connect regarding consulting services."
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-3 sm:h-20 lg:h-24 sm:gap-4">
        <NavLink
          to="/"
          className="focus-ring flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="site-logo-frame flex items-center justify-center overflow-hidden rounded-2xl bg-transparent">
            <img
              src="/mnclogo.png"
              alt="Multi Networking Consultant Services logo"
              className="site-logo-image"
            />
          </span>
          <span className="min-w-0">
            <span className="company-name block truncate font-heading text-sm font-extrabold leading-none tracking-[0.12em] sm:text-lg sm:tracking-[0.14em]">
              MULTI NETWORKING
            </span>
            <span className="company-name mt-1 block truncate text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.22em]">
              CONSULTANT SERVICES
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `focus-ring rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-muted hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={consultHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring ml-2 inline-flex items-center rounded-2xl bg-gradient-to-r from-skybrand via-cobalt to-magenta px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:translate-y-[-1px]"
          >
            Book a consultation
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-night/95 lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            <a
              href={consultHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="focus-ring inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-skybrand via-cobalt to-magenta px-5 py-4 text-base font-bold text-white shadow-glow transition hover:translate-y-[-1px]"
            >
              Book a consultation
            </a>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-2xl px-4 py-3 text-sm font-semibold ${
                    isActive ? "bg-white/10 text-white" : "text-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
