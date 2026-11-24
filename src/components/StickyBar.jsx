import { useEffect, useState } from 'react';
import { ArrowUp, ArrowUpRight, Phone } from 'lucide-react';
import { Button } from './Button';

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-canvas/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden" aria-label="Quick contact">
        <div className="mx-auto grid max-w-lg grid-cols-[0.8fr_1.2fr] gap-3">
          <a href="tel:+61390000000" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-4 text-sm font-bold text-ink"><Phone size={17} aria-hidden="true" /> Call</a>
          <Button href="#quote" className="min-h-12 justify-center">Get a Quote <ArrowUpRight size={17} aria-hidden="true" /></Button>
        </div>
      </div>
      {visible && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })} className="fixed bottom-7 right-7 z-40 hidden size-12 place-items-center rounded-full bg-teal text-white shadow-lg transition hover:bg-[#104d49] lg:grid" aria-label="Back to top">
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      )}
    </>
  );
}
