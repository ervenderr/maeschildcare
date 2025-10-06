import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Mae's Childcare - Where Learning and Care Grow Together",
  description: 'Mae\'s Childcare provides a safe, nurturing, and fun environment for your little ones to learn and grow every day in Zamboanga City, Philippines.',
  keywords: 'childcare, daycare, preschool, infant care, toddler program, after school care, Zamboanga City',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
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
