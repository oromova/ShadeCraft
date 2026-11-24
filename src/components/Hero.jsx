import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from './Button';
import { heroImage } from '../data/products';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-10 lg:py-24">
        <motion.div {...reveal} transition={{ duration: 0.65, ease: 'easeOut' }} className="relative z-10">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" aria-hidden="true" /> Shade, made personal
          </p>
          <h1 id="hero-title" className="max-w-2xl font-display text-[clamp(3.2rem,7vw,5.8rem)] leading-[0.98] tracking-[-0.035em] text-ink">
            A little more shade.
            <span className="block italic text-teal">A lot more living.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70">
            Thoughtfully designed awnings and shutters that make your home more comfortable, private and inviting—whatever the weather.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
            <Button href="#quote" className="justify-center px-6 py-4">
              Get a Quote <ArrowUpRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#awnings" variant="outline" className="justify-center px-6 py-4">
              View Products <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink/70" aria-label="Our approach">
            {['Made to measure', 'Considered design', 'Professional installation'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-teal/10 text-teal"><Check size={13} strokeWidth={3} aria-hidden="true" /></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-2xl lg:max-w-none"
        >
          <div className="absolute -right-5 -top-5 size-40 rounded-full border border-teal/20 sm:-right-8 sm:-top-8 sm:size-56" aria-hidden="true" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-sand sm:rounded-[2.5rem]">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              fetchpriority="high"
              decoding="async"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-canvas/95 p-5 shadow-xl backdrop-blur sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs sm:p-6">
              <p className="font-display text-2xl text-ink">Room for the good moments.</p>
              <p className="mt-2 text-sm leading-6 text-ink/65">Shade that fits your home and the way you love to live.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="border-y border-ink/10 bg-ink text-canvas" aria-hidden="true">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] sm:px-8 lg:px-10">
          <span>Awnings</span><span className="text-sand">Shutters</span><span className="hidden sm:inline">Roller Shutters</span><span className="text-sand">Outdoor Living</span>
        </div>
      </div>
    </section>
  );
}
