import { ClipboardList, PencilRuler, Wrench } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Container } from './Container';

const steps = [
  { icon: ClipboardList, title: 'Free consultation', text: 'Tell us about your space, your priorities and the look you have in mind. We will help you explore the possibilities.' },
  { icon: PencilRuler, title: 'Measure and design', text: 'We confirm the details, talk through materials and operation, and shape a made-to-measure solution for your home.' },
  { icon: Wrench, title: 'Installation', text: 'Our team installs your shading with care, checks every detail and shows you how to enjoy your new space.' },
];

export function Steps() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="how-it-works" aria-labelledby="steps-title" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionTitle id="steps-title" eyebrow="Simple from start to finish" title="Your shade, in three easy steps." description="A clear process, helpful advice and no unnecessary complications." align="center" />
        <ol className="relative mt-14 grid gap-8 md:grid-cols-3 lg:mt-20 lg:gap-12">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <motion.li
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
              className="relative rounded-3xl border border-ink/10 bg-white/45 p-7 sm:p-8"
            >
              <span className="absolute right-6 top-5 font-display text-5xl text-teal/12" aria-hidden="true">0{index + 1}</span>
              <span className="grid size-13 place-items-center rounded-2xl bg-teal text-white"><Icon size={24} aria-hidden="true" /></span>
              <h3 className="mt-7 text-3xl text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/65">{text}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
