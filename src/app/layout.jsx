import './globals.css';

import { Navbar } from '@app/components/shared/Navbar';
import { outerSans } from './layoutUtils';

export const metadata = {
  title: 'Bryan Garcia | Full stack developer',
  description: 'Full stack developer. Python and React as main tools.',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Python', 'Flask', 'Full stack'],
  creator: 'Bryan García',
  category: 'technology',
  openGraph: {
    title: 'Bryan Garcia | Full stack developer',
    description: 'Full stack developer. Python and React as main tools.',
    url: 'https://bryanstgarcia.com',
    siteName: 'Bryan Garcia Portfolio',
    images: 'https://bryanstgarcia.com/images/bg-image.png',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Bryan Garcia | Full stack developer',
    description: 'Full stack developer. Python and React as main tools.',
    creator: '@bryanstgarcia',
    images: ['https://bryanstgarcia.com/images/bg-image.png'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${outerSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
