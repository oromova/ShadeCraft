const image = (id, alt, photographer, creditUrl, width = 1200, height = 900) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`,
  alt,
  photographer,
  creditUrl,
  width,
  height,
});

export const products = [
  {
    id: 'awnings',
    number: '01',
    name: 'Awnings',
    eyebrow: 'Make more of the outdoors',
    description:
      'Turn patios, balconies and entertaining areas into comfortable places to linger. Our made-to-measure awnings bring shade exactly where you want it, without closing off the view.',
    benefits: [
      { icon: 'sun', title: 'Cooler outdoor living', text: 'Create a shaded retreat on bright, warm days.' },
      { icon: 'home', title: 'Made for your space', text: 'Designed around your dimensions and how you live.' },
      { icon: 'palette', title: 'A considered finish', text: 'Coordinate colour and fabric with your home.' },
      { icon: 'sparkles', title: 'Effortless comfort', text: 'Enjoy more usable outdoor space, season after season.' },
    ],
    specs: [
      { label: 'Best for', value: 'Patios, decks & balconies' },
      { label: 'Style', value: 'Retractable & fixed options' },
      { label: 'Operation', value: 'Manual or motorised' },
    ],
    images: [
      image(
        'photo-1755280466460-40cde79f6653',
        'Comfortable outdoor seating shaded by a neutral canopy',
        'Anthony Cantin',
        'https://unsplash.com/photos/outdoor-seating-area-with-chairs-and-table-under-canopy-Aux2gZYhVWY',
        1400,
        1050,
      ),
      image(
        'photo-1766087752966-b9a7b058b7da',
        'Contemporary pergola with adjustable louvers providing dappled shade',
        'Pict4life',
        'https://unsplash.com/photos/modern-pergola-with-adjustable-louvers-against-sky-tRwCz7Q0gpE',
      ),
      image(
        'photo-1722247522586-eae43f6a927a',
        'Relaxed porch with a hammock and sofa beneath a timber canopy',
        'Alex Tyson',
        'https://unsplash.com/photos/a-porch-with-a-hammock-and-a-couch-vU6m6BXX2TY',
      ),
    ],
  },
  {
    id: 'shutters',
    number: '02',
    name: 'Shutters',
    eyebrow: 'Privacy with a little personality',
    description:
      'Bring warmth, privacy and timeless character to your windows. Interior and exterior shutters offer flexible light control and a beautifully tailored finish for every room.',
    benefits: [
      { icon: 'sun', title: 'Flexible light control', text: 'Move from soft daylight to complete privacy.' },
      { icon: 'shield', title: 'Everyday durability', text: 'Hard-wearing materials designed for daily life.' },
      { icon: 'palette', title: 'Your colour, your way', text: 'A thoughtful palette to suit your interior.' },
      { icon: 'home', title: 'A timeless addition', text: 'Classic detail that feels at home in any setting.' },
    ],
    specs: [
      { label: 'Best for', value: 'Living areas & bedrooms' },
      { label: 'Style', value: 'Interior & exterior options' },
      { label: 'Finish', value: 'Custom colour selection' },
    ],
    images: [
      image(
        'photo-1750339669314-f19f71bdd9e4',
        'Dark timber shutters framing a window on a textured exterior wall',
        'KC Shum',
        'https://unsplash.com/photos/dark-wooden-window-shutters-on-a-textured-wall-3dTO3go2640',
      ),
      image(
        'photo-1735290674289-0ec3922fd4aa',
        'Pink house exterior with crisp white shutters around its windows',
        'Lena Polishko',
        'https://unsplash.com/photos/a-pink-house-with-a-white-window-and-white-shutters-xb3yzTzpIVQ',
      ),
    ],
  },
  {
    id: 'roller-shutters',
    number: '03',
    name: 'Roller Shutters',
    eyebrow: 'Quiet protection, day and night',
    description:
      'Add a clean, contemporary layer of security and privacy to your home. Roller shutters tuck away neatly when open and help create a more comfortable indoor environment.',
    benefits: [
      { icon: 'shield', title: 'Added peace of mind', text: 'A reassuring physical barrier for windows and doors.' },
      { icon: 'sun', title: 'Light on your terms', text: 'Control glare and privacy throughout the day.' },
      { icon: 'home', title: 'A streamlined look', text: 'Compact profiles that complement modern homes.' },
      { icon: 'sparkles', title: 'Simple everyday use', text: 'Choose manual or convenient motorised operation.' },
    ],
    specs: [
      { label: 'Best for', value: 'Windows, doors & garages' },
      { label: 'Style', value: 'Compact roller profiles' },
      { label: 'Operation', value: 'Manual or motorised' },
    ],
    images: [
      image(
        'photo-1785554997581-3c7100703339',
        'Modern home exterior with tall windows and charcoal cladding',
        'Troy Mortier',
        'https://unsplash.com/photos/modern-house-exterior-with-two-tall-windows-and-grey-siding-AkXPbYg_uvw',
      ),
      image(
        'photo-1650982941157-f3e98bf80e43',
        'Modern building exterior with a dark garage-style door',
        'mk. s',
        'https://unsplash.com/photos/qJqZcSVmJeE',
      ),
    ],
  },
];

export const heroImage = image(
  'photo-1755280466460-40cde79f6653',
  'Inviting outdoor lounge shaded by a cream retractable canopy',
  'Anthony Cantin',
  'https://unsplash.com/photos/outdoor-seating-area-with-chairs-and-table-under-canopy-Aux2gZYhVWY',
  1600,
  1200,
);

export const photoCredits = Array.from(
  new Map(
    [heroImage, ...products.flatMap((product) => product.images)].map((photo) => [
      photo.creditUrl,
      { photographer: photo.photographer, creditUrl: photo.creditUrl },
    ]),
  ).values(),
);
