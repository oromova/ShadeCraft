export function SectionTitle({ eyebrow, title, description, align = 'left', id, inverse = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${inverse ? 'eyebrow-light' : ''}`}>{eyebrow}</p>}
      <h2 id={id} className="font-display text-4xl leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-ink/65 sm:text-lg">{description}</p>}
    </div>
  );
}
