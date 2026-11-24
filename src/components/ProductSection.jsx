import { ArrowUpRight, ChevronLeft, ChevronRight, Home, Palette, ShieldCheck, Sparkles, Sun } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { A11y, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './Button';

const icons = { sun: Sun, home: Home, palette: Palette, sparkles: Sparkles, shield: ShieldCheck };

export function ProductSection({ product, onQuote }) {
  const reduceMotion = useReducedMotion();
  return (
    <section id={product.id} aria-labelledby={`${product.id}-title`} className="border-t border-ink/10 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-4">{product.number} / {product.eyebrow}</p>
          <h2 id={`${product.id}-title`} className="font-display text-5xl tracking-[-0.025em] text-ink sm:text-6xl">{product.name}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">{product.description}</p>
          <div className="mt-8 grid gap-x-6 gap-y-6 min-[480px]:grid-cols-2">
            {product.benefits.map((benefit) => {
              const Icon = icons[benefit.icon];
              return (
                <div key={benefit.title} className="flex gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal"><Icon size={20} aria-hidden="true" /></span>
                  <div>
                    <h3 className="text-sm font-extrabold text-ink">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/70">{benefit.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <dl className="mt-9 divide-y divide-ink/10 border-y border-ink/10">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex items-baseline justify-between gap-5 py-3 text-sm">
                <dt className="font-semibold text-ink/70">{spec.label}</dt>
                <dd className="text-right font-bold text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <Button onClick={() => onQuote(product.id)} className="mt-8 px-6 py-4">
            Request a quote for this product <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.1, ease: 'easeOut' }}
          className="min-w-0"
        >
          <div className={`product-gallery ${product.id}-gallery relative`}>
            <Swiper
              modules={[Navigation, Keyboard, A11y]}
              navigation={{ prevEl: `.${product.id}-prev`, nextEl: `.${product.id}-next` }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              a11y={{ enabled: true }}
              spaceBetween={16}
              slidesPerView={1.08}
              breakpoints={{ 640: { slidesPerView: 1.35 }, 1024: { slidesPerView: 1.08 } }}
              className="!pb-2"
            >
              {product.images.map((photo) => (
                <SwiperSlide key={photo.src}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/65">Design inspiration</p>
              <div className="flex gap-2">
                <button type="button" className={`${product.id}-prev grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-teal hover:text-teal`} aria-label={`Previous ${product.name} image`}>
                  <ChevronLeft size={19} aria-hidden="true" />
                </button>
                <button type="button" className={`${product.id}-next grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-teal hover:text-teal`} aria-label={`Next ${product.name} image`}>
                  <ChevronRight size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
