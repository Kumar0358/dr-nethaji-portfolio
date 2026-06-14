import { Metadata } from 'next';
import '../styles/globals.css';

export const metadata = {
  title: 'Dr. Kancham Nethaji | Consultant Laparoscopic Surgeon',
  description: 'Dr. Kancham Nethaji - MS General Surgery, University Gold Medalist. Specialist in advanced laparoscopic and emergency surgery. Book appointment with top surgeon in Patna.',
  keywords: 'Surgeon, Laparoscopic Surgery, General Surgery, Emergency Surgery, Dharmavaram, Dr Nethaji, Spandana Hospital',
  authors: [{ name: 'Dr. Kancham Nethaji' }],
  openGraph: {
    title: 'Dr. Kancham Nethaji | Consultant Laparoscopic Surgeon',
    description: 'Expert in advanced laparoscopic and general surgical procedures. Over 1000 successful surgeries.',
    type: 'website',
    url: 'https://drnethaji.com',
    siteName: 'Dr. Kancham Nethaji',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630?text=Dr+Kancham+Nethaji',
        width: 1200,
        height: 630,
        alt: 'Dr. Kancham Nethaji'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Kancham Nethaji | Consultant Laparoscopic Surgeon',
    description: 'Expert in advanced laparoscopic and general surgical procedures.',
    image: 'https://via.placeholder.com/1200x630?text=Dr+Kancham+Nethaji'
  },
  alternates: {
    canonical: 'https://drnethaji.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
        <meta name="theme-color" content="#1a2f4a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dr. Nethaji" />

        {/* Schema.org Doctor Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'MedicalBusiness',
              name: 'Dr. Kancham Nethaji',
              image: 'https://via.placeholder.com/500x600?text=Dr.+Nethaji',
              description: 'Consultant Laparoscopic & General Surgeon',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'East Boring Canal Road',
                addressLocality: 'Patna',
                addressRegion: 'Bihar',
                postalCode: '800001',
                addressCountry: 'IN'
              },
              telephone: '+91-94470-82828',
              email: 'contact@drnethaji.com',
              knowsAbout: [
                'Laparoscopic Surgery',
                'General Surgery',
                'Emergency Surgery',
                'Minimally Invasive Surgery'
              ],
              medicalSpecialty: 'General Surgery',
              url: 'https://drnethaji.com',
              sameAs: [
                'https://www.facebook.com/drnethaji',
                'https://www.instagram.com/drnethaji'
              ]
            })
          }}
        />

        {/* Google Analytics (optional - add your GA ID) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%2300a99d'/><text x='50' y='65' font-size='50' font-weight='bold' text-anchor='middle' fill='white'>D</text></svg>" />
      </head>
      <body className="bg-white dark:bg-navy-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
