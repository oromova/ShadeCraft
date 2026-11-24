import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from './Button';

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Awnings', href: '#awnings', id: 'awnings' },
  { label: 'Shutters', href: '#shutters', id: 'shutters' },
  { label: 'Roller Shutters', href: '#roller-shutters', id: 'roller-shutters' },
  { label: 'Why Us', href: '#why-us', id: 'why-us' },
  { label: 'Contact', href: '#quote', id: 'quote' },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="ShadeCraft home">
      <span className="grid size-10 place-items-center rounded-full bg-teal text-canvas" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <path d="M5 15 16 8l11 7H5Z" fill="currentColor" />
          <path d="m9 18 3-4h8l3 4H9Z" fill="#D9B98A" />
          <path d="M12 19v7m8-7v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-display text-2xl tracking-tight text-ink">ShadeCraft</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame;
    const updateActive = () => {
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = 'home';
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActive(current);
      frame = null;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    firstLinkRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };
  const linkClass = (id) =>
    `relative py-2 text-sm font-semibold transition-colors hover:text-teal focus-visible:text-teal ${
      active === id ? 'text-teal' : 'text-ink/75'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.id} href={link.href} className={linkClass(link.id)} aria-current={active === link.id ? 'location' : undefined}>
              {link.label}
              {active === link.id && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-teal" aria-hidden="true" />}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#quote" className="px-5 py-3">
            Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto border-t border-ink/10 bg-canvas px-6 py-8 lg:hidden"
          >
            <div className="mx-auto flex max-w-lg flex-col">
              {links.map((link, index) => (
                <a
                  key={link.id}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-ink/10 py-4 font-display text-3xl ${active === link.id ? 'text-teal' : 'text-ink'}`}
                  aria-current={active === link.id ? 'location' : undefined}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#quote" onClick={closeMenu} className="mt-8 w-full py-4">
                Get a Quote <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
