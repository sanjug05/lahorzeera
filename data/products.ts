export type Product = {
  id: string;
  name: string;
  flavor: string;
  description: string;
  image: string;
  accent: string;
};

export const products: Product[] = [
  {
    id: 'classic',
    name: 'Lahor Zeera Classic',
    flavor: 'Roasted Jeera & Citrus Zest',
    description: 'Signature sparkling jeera soda with layered spice warmth and a clean, dry finish.',
    image:
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-amber-500/40 to-orange-200/10'
  },
  {
    id: 'reserve',
    name: 'Lahor Zeera Reserve',
    flavor: 'Smoked Cumin & Himalayan Salt',
    description: 'A richer profile crafted for refined palates who enjoy complexity in every sip.',
    image:
      'https://images.unsplash.com/photo-1527960471264-932f39eb5846?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-yellow-500/40 to-rose-100/10'
  },
  {
    id: 'zero',
    name: 'Lahor Zeera Zero',
    flavor: 'Zero Sugar, Full Spice Spark',
    description: 'No added sugar, same iconic fizz-forward jeera character and luxurious mouthfeel.',
    image:
      'https://images.unsplash.com/photo-1610873167013-2dd675d30ef4?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-lime-400/30 to-cyan-200/10'
  }
];

export const testimonials = [
  {
    name: 'Ayesha R.',
    title: 'Creative Director, Dubai',
    quote: 'This is the first jeera soda that feels couture — deep, sparkling, and unforgettable.'
  },
  {
    name: 'Omar H.',
    title: 'Hospitality Partner, London',
    quote: 'Guests ask for Lahor Zeera by name. The flavor is authentic, but the experience is world-class.'
  },
  {
    name: 'Noah K.',
    title: 'Lifestyle Creator, Toronto',
    quote: 'It tastes like heritage reborn for modern nights, rooftop sessions, and elevated dining.'
  }
];
