import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { Button } from './Button';
import { SectionTitle } from './SectionTitle';

const whatsappUrl = 'https://wa.me/61000000000?text=Hi%20ShadeCraft%2C%20I%27d%20like%20to%20ask%20about%20a%20quote.';

export function QuoteForm({ quoteRequest }) {
  const { register, handleSubmit, setValue, reset, control, formState: { errors, isSubmitting } } = useForm({ defaultValues: { product: '' } });
  const productValue = useWatch({ control, name: 'product' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!quoteRequest.product) return;
    setValue('product', quoteRequest.product, { shouldValidate: true, shouldDirty: true });
  }, [quoteRequest, setValue]);

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    reset({ product: quoteRequest.product || '' });
    setSubmitted(true);
  };

  return (
    <section id="quote" aria-labelledby="quote-title" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div>
          <SectionTitle id="quote-title" eyebrow="Let’s talk about your space" title="Your next favourite room starts here." description="Tell us what you have in mind and we will help you explore the right shading solution. This portfolio form is for demonstration only." />
          <div className="mt-9 rounded-3xl border border-ink/10 bg-white/50 p-6 sm:p-7">
            <h3 className="font-sans text-base font-extrabold text-ink">Prefer a quick conversation?</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">Our WhatsApp contact below is a placeholder link for this demo.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-bold text-white transition hover:bg-[#104d49]">
              <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-3 text-xs text-ink/65">Placeholder number: +61 400 000 000</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} onChange={() => setSubmitted(false)} noValidate className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-[0_20px_60px_rgba(37,42,39,0.07)] sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="form-label">Name <span aria-hidden="true">*</span></label>
              <input id="name" className="form-input" autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name', { required: 'Please enter your name.', minLength: { value: 2, message: 'Name must be at least 2 characters.' } })} />
              {errors.name && <p id="name-error" className="mt-2 text-sm font-semibold text-[#a3211a]">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email <span aria-hidden="true">*</span></label>
              <input id="email" type="email" className="form-input" autoComplete="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email', { required: 'Please enter your email address.', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' } })} />
              {errors.email && <p id="email-error" className="mt-2 text-sm font-semibold text-[#a3211a]">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="form-label">Phone <span className="font-normal text-ink/65">(optional)</span></label>
              <input id="phone" type="tel" className="form-input" autoComplete="tel" placeholder="04XX XXX XXX" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} {...register('phone', { pattern: { value: /^[+()\d\s-]{7,20}$/, message: 'Enter a valid phone number.' } })} />
              {errors.phone && <p id="phone-error" className="mt-2 text-sm font-semibold text-[#a3211a]">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="product" className="form-label">Product <span aria-hidden="true">*</span></label>
              <select id="product" className="form-input" value={productValue} aria-invalid={Boolean(errors.product)} aria-describedby={errors.product ? 'product-error' : undefined} {...register('product', { required: 'Please select a product.' })}>
                <option value="">Select a product</option>
                {products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
              </select>
              {errors.product && <p id="product-error" className="mt-2 text-sm font-semibold text-[#a3211a]">{errors.product.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form-label">Tell us about your project <span aria-hidden="true">*</span></label>
              <textarea id="message" className="form-input" placeholder="A little about your space, what you need and any questions..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message', { required: 'Please tell us a little about your project.', minLength: { value: 20, message: 'Please include at least 20 characters.' } })} />
              {errors.message && <p id="message-error" className="mt-2 text-sm font-semibold text-[#a3211a]">{errors.message.message}</p>}
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-ink/65">Required fields are marked with an asterisk. This demo does not send or store your details.</p>
          <Button type="submit" disabled={isSubmitting} className="mt-6 w-full justify-center px-6 py-4">
            {isSubmitting ? 'Submitting demo…' : 'Request a Quote'} <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
          <div aria-live="polite">
            {submitted && (
              <p className="mt-4 rounded-xl bg-teal/8 px-4 py-3 text-sm text-teal" role="status">
                <CheckCircle2 className="mr-2 inline size-4" aria-hidden="true" /> This is a demo form, nothing was sent.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
