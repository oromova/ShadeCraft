import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const questions = [
  { question: 'Which shading option is right for my home?', answer: 'It depends on your space, the direction of the sun and how you want to use the area. Awnings are ideal for outdoor living, shutters offer flexible window privacy, and roller shutters add a contemporary protective layer.' },
  { question: 'Can I choose colours and materials?', answer: 'Yes. We will help you compare fabric, finish and colour options so your shading works with your home rather than competing with it.' },
  { question: 'Do you offer manual and motorised options?', answer: 'Yes. Depending on the product, you can choose straightforward manual operation or the added convenience of motorised control.' },
  { question: 'How are measurements handled?', answer: 'Every made-to-measure solution begins with confirmed dimensions. We will guide you through what is needed and arrange the appropriate measurement step before an order is finalised.' },
  { question: 'How do I get started?', answer: 'Use the demo quote form to select a product and tell us a little about your project. For a real project, the next step would be a consultation with a shading specialist.' },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-y border-ink/10 bg-white/35 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10">
        <SectionTitle id="faq-title" eyebrow="A few helpful answers" title="Good questions. Clear answers." description="Not sure where to begin? These are a few things worth knowing before you choose your shade." />
        <div className="divide-y divide-ink/12 border-y border-ink/12">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left font-sans text-base font-bold text-ink sm:text-lg"
                  >
                    {item.question}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="grid size-8 shrink-0 place-items-center rounded-full bg-teal/10 text-teal" aria-hidden="true">
                      <Plus size={18} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.24 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-ink/65 sm:text-base">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
