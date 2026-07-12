import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/siteContent.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between sm:h-20">
        <NavLink to="/" className="focus-ring flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black sm:h-12 sm:w-12">
            <img src="/mnc-logo.jpg" alt="Multi Networking Consultant Services logo" className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="brand-gradient-text block truncate font-heading text-sm font-extrabold leading-none tracking-[0.12em] sm:text-lg sm:tracking-[0.14em]">MULTI NETWORKING</span>
            <span className="brand-gradient-text mt-1 block truncate text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.22em]">CONSULTANT SERVICES</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `focus-ring rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
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
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-2xl px-4 py-3 text-sm font-semibold ${
                    isActive ? 'bg-white/10 text-white' : 'text-muted'
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
