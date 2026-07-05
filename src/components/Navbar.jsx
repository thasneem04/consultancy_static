import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/siteContent.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/75 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <NavLink to="/" className="focus-ring flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black">
            <img src="/mnc-logo.jpg" alt="MNC Group logo" className="h-full w-full object-cover" />
          </span>
          <span>
            <span className="block font-heading text-lg font-extrabold leading-none">MNC Group</span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Consultant Services</span>
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
