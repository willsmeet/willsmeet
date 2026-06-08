import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import "./globals.css"
import { GoogleAnalytics } from '@next/third-parties/google'
import { FloatingShare, WhatsAppButton } from '@/components'

export const metadata: Metadata = {
  metadataBase: new URL('https://willsmeet.com'),
  title: {
    default: 'Willsmeet | B2B Procurement Platform - Office Solutions That Drive Growth',
    template: '%s | Willsmeet',
  },
  description: 'Transform procurement into your competitive advantage. 3000+ products, data-driven logistics, and 24/7 delivery for modern businesses.',
  keywords: ['office supplies', 'B2B procurement', 'workplace solutions', 'office stationery', 'corporate gifting', 'Bangalore'],
  authors: [{ name: 'Willsmeet Office Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    // url: 'https://willsmeet.com',
    url: 'https://willsmeet-dark-theme.vercel.app',
    siteName: 'Willsmeet',
    title: 'Willsmeet | B2B Procurement Platform',
    description: 'Transform procurement into your competitive advantage. 3000+ products, data-driven logistics, and 24/7 delivery.',
    images: [{ url: '/assets/Willsmeet1.jpg', width: 1200, height: 630, alt: 'Willsmeet' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willsmeet | B2B Procurement Platform',
    description: 'Transform procurement into your competitive advantage.',
    images: ['/assets/Willsmeet1.jpg'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/assets/newlogo.png', apple: '/assets/newlogo.png' },
}

export const viewport: Viewport = {
  themeColor: '#0a0f0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function() {
            try {
              var storedTheme = localStorage.getItem('theme-mode');
              var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
              var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : (prefersLight ? 'light' : 'dark');
              if (theme === 'light') {
                document.documentElement.classList.add('light');
              } else {
                document.documentElement.classList.remove('light');
              }
            } catch (e) {
              console.error(e);
            }
          })();`}
        </Script>
      </head>
      <body className="min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        {/* <FloatingShare/> */}
        <WhatsAppButton/>
         <GoogleAnalytics gaId="G-4WX26TLTB1" />
      </body>
    </html>
  )
}
