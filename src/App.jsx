import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { WhyUs } from './components/WhyUs';
import { Steps } from './components/Steps';
import { Faq } from './components/Faq';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { StickyBar } from './components/StickyBar';
import { SeoHead } from './components/SeoHead';
import { products } from './data/products';

export default function App() {
  const [quoteRequest, setQuoteRequest] = useState({ product: '', key: 0 });

  const requestQuote = (productId = '') => {
    setQuoteRequest((previous) => ({ product: productId, key: previous.key + 1 }));
    document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SeoHead />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <div id="products">
          {products.map((product) => <ProductSection key={product.id} product={product} onQuote={requestQuote} />)}
        </div>
        <WhyUs />
        <Steps />
        <Faq />
        <QuoteForm quoteRequest={quoteRequest} />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
