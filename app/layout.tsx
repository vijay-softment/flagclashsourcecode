import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import { Analytics } from '@vercel/analytics/next'
import { CountryProvider } from '@/contexts/country-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Flag Clash Source Code + Video Call Support | Flag Clash',
  description: 'Get the complete Flag Clash source code package with dedicated video call support. Launch your own flag battle game faster with professional guidance and easy setup.',
  generator: 'Flag Clash',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const countryCode = requestHeaders.get('x-vercel-ip-country')

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CountryProvider countryCode={countryCode}>
          {children}
        </CountryProvider>
        <Analytics />
      </body>
    </html>
  )
}
