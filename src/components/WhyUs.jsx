import { DraftingCompass, Hammer, Layers3, MessageSquareText } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const benefits = [
  { icon: DraftingCompass, title: 'Made to measure', text: 'A solution tailored to your windows, outdoor areas and the way you use your home.' },
  { icon: Layers3, title: 'Materials that last', text: 'Carefully selected fabrics and hard-wearing components for everyday Australian conditions.' },
  { icon: Hammer, title: 'Professional installation', text: 'A considered fit, neatly finished and installed by experienced professionals.' },
  { icon: MessageSquareText, title: 'Guidance that makes sense', text: 'Clear recommendations and straightforward support from first conversation to handover.' },
];

export function WhyUs() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="why-us" aria-labelledby="why-title" className="bg-ink py-20 text-canvas sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="[&_p]:text-sand [&_h2]:text-canvas">
          <SectionTitle id="why-title" eyebrow="The ShadeCraft difference" title="Considered from every angle." description="Good shading is about more than a product. It is the right fit, a thoughtful finish and an experience that feels easy." inverse />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
              className="rounded-3xl border border-white/12 bg-white/[0.045] p-7"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-sand text-ink"><Icon size={23} aria-hidden="true" /></span>
              <h3 className="mt-7 text-2xl text-canvas">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-canvas/65">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
