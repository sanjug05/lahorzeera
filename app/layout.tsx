import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://lahorzeera.com'),
  title: 'Lahor Zeera | Premium Jeera Soda',
  description:
    'Experience Lahor Zeera, the premium jeera soda blending desi spice culture with global beverage excellence.',
  keywords: ['Lahor Zeera', 'jeera soda', 'premium soda', 'desi beverage', 'carbonated drink'],
  openGraph: {
    title: 'Lahor Zeera | Premium Jeera Soda',
    description:
      'A bold fusion of roasted jeera, sparkling fizz, and premium refreshment crafted for global taste.',
    url: 'https://lahorzeera.com',
    siteName: 'Lahor Zeera',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lahor Zeera | Premium Jeera Soda',
    description:
      'Desi heritage, global premium expression. Discover the fizz revolution by Lahor Zeera.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
