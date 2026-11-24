import { Mail, MapPin, Phone } from 'lucide-react';
import { photoCredits } from '../data/products';

const year = new Date().getFullYear();

const quickLinks = [
  { label: 'Awnings', href: '#awnings' },
  { label: 'Shutters', href: '#shutters' },
  { label: 'Roller Shutters', href: '#roller-shutters' },
  { label: 'Why ShadeCraft', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Get a Quote', href: '#quote' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink pb-28 pt-16 text-canvas lg:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-white/12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
          <div>
            <a href="#home" className="inline-flex items-center gap-3" aria-label="ShadeCraft home">
              <span className="grid size-10 place-items-center rounded-full bg-canvas text-teal" aria-hidden="true">
                <svg viewBox="0 0 32 32" className="size-6" fill="none"><path d="M5 15 16 8l11 7H5Z" fill="currentColor" /><path d="m9 18 3-4h8l3 4H9Z" fill="#D9B98A" /><path d="M12 19v7m8-7v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
              </span>
              <span className="font-display text-3xl">ShadeCraft</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-canvas/70">Awnings and shutters thoughtfully designed for comfortable homes and more enjoyable outdoor living.</p>
          </div>
          <div>
            <h2 className="font-sans text-sm font-extrabold uppercase tracking-[0.16em] text-sand">Explore</h2>
            <ul className="mt-5 grid gap-3 text-sm text-canvas/70">
              {quickLinks.map((link) => <li key={link.href}><a href={link.href} className="transition hover:text-white">{link.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-sm font-extrabold uppercase tracking-[0.16em] text-sand">Contact placeholders</h2>
            <address className="mt-5 space-y-4 text-sm not-italic text-canvas/70">
              <a href="tel:+61390000000" className="flex items-start gap-3 transition hover:text-white"><Phone className="mt-0.5 size-4 shrink-0 text-sand" aria-hidden="true" />+61 3 9000 0000</a>
              <a href="mailto:hello@shadecraft.example" className="flex items-start gap-3 transition hover:text-white"><Mail className="mt-0.5 size-4 shrink-0 text-sand" aria-hidden="true" />hello@shadecraft.example</a>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-sand" aria-hidden="true" />123 Example Street<br />Melbourne VIC 3000</p>
            </address>
            <p className="mt-4 text-xs text-canvas/65">All business and contact details are placeholders.</p>
          </div>
        </div>
        <div className="border-b border-white/12 py-7">
          <p className="text-xs leading-5 text-canvas/65">Photography via Unsplash:</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-canvas/70">
            {photoCredits.map((credit) => <li key={credit.creditUrl}><a href={credit.creditUrl} target="_blank" rel="noreferrer" className="underline decoration-white/25 underline-offset-4 transition hover:text-white">{credit.photographer}</a></li>)}
          </ul>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-canvas/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ShadeCraft. Demo project. Fictional business created for portfolio purposes.</p>
          <p>Designed for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
