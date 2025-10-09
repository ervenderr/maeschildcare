import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Mae's Childcare - Licensed Bilingual Childcare in San Francisco",
  description: 'Mae\'s Childcare is a licensed childcare home in San Francisco offering bilingual education (English & Filipino), art-based learning, and nurturing care for children ages 8 months to 5 years. Licensed #384005044.',
  keywords: 'childcare San Francisco, bilingual childcare, licensed childcare, infant care, toddler program, preschool, San Francisco daycare, Filipino childcare, art-based learning, Hayes Valley childcare',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
