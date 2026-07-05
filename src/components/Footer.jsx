import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, navItems } from '../data/siteContent.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img src="/mnc-logo.jpg" alt="MNC Group logo" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="font-heading text-lg font-extrabold">MNC Group</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Multi Networking Consultant Services</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Partnering with Saudi Arabia to deliver trusted consulting and strategic excellence for organizations building sustainable growth.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold">Navigation</h3>
          <div className="mt-5 grid gap-3 text-sm text-muted">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-muted">
            <p className="flex gap-3"><MapPin className="shrink-0 text-skybrand" size={18} />{contact.address}</p>
            <p className="flex gap-3"><Phone className="shrink-0 text-skybrand" size={18} />{contact.phones.join(' | ')}</p>
            <p className="flex gap-3"><Mail className="shrink-0 text-skybrand" size={18} />{contact.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-3 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 MNC Group. All rights reserved.</span>
          <span>{contact.website}</span>
        </div>
      </div>
    </footer>
  );
}
