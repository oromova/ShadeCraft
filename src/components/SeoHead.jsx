import { Helmet } from 'react-helmet-async';
import { heroImage } from '../data/products';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ShadeCraft',
  description: 'Fictional demonstration business for a portfolio website selling awnings, shutters and roller shutters.',
  url: 'https://shadecraft.example/',
  telephone: '+61-3-9000-0000',
  email: 'hello@shadecraft.example',
  image: heroImage.src,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Example Street',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3000',
    addressCountry: 'AU',
  },
};

export function SeoHead() {
  return (
    <Helmet>
      <title>ShadeCraft | Awnings, Shutters &amp; Outdoor Living</title>
      <meta name="description" content="Explore made-to-measure awnings, shutters and roller shutters with ShadeCraft. A fictional portfolio demo for thoughtful, comfortable homes." />
      <meta name="theme-color" content="#175e5a" />
      <link rel="canonical" href="https://shadecraft.example/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ShadeCraft | Shade, made personal" />
      <meta property="og:description" content="Thoughtfully designed awnings and shutters for more comfortable, private and inviting homes." />
      <meta property="og:url" content="https://shadecraft.example/" />
      <meta property="og:image" content={heroImage.src} />
      <meta property="og:image:alt" content={heroImage.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ShadeCraft | Shade, made personal" />
      <meta name="twitter:description" content="Thoughtfully designed awnings and shutters for more comfortable homes." />
      <meta name="twitter:image" content={heroImage.src} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
