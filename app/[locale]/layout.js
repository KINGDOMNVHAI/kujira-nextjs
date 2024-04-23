import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import '@/app/globals.css';
import { Inter } from 'next/font/google'

import Footer from './components/frontend/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KDPLAYBACK | SUBCRIBE YOUTUBE RANKING',
  description: 'The lists of the most-subscribed YouTube channels in every categories: VTuber, Game, News, Development, etc...',
  keywords: 'subcribe youtube ranking, hololive, vtuber, pewdiepie, development',
  viewport: 'width=device-width',
  openGraph: {
    title: 'Twitter',
    description: 'Generated by create next app Twitter',
  }
}

export default function RootLayout({ children, params })
{
  // GET THE CURRENT LOCALE
  const locale = useLocale();

  // Show 404 error if IDIOM does not exist (Like French - fr)
  if (params.locale != locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
