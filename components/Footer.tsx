import Link from 'next/link'
import Image from 'next/image'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/enrollment', label: 'Enrollment' },
  { href: '/staff', label: 'Staff' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#071c33] text-creamWhite">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="relative h-20 w-56 rounded-xl bg-creamWhite">
              <Image
                src="/images/name.png"
                alt="Mae's Childcare"
                fill
                sizes="224px"
                className="object-contain p-1"
              />
            </div>
            <p className="mt-6 font-heading text-2xl leading-tight max-w-xs">
              Where learning and care grow together.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-creamWhite/60 mb-4">Explore</h2>
            <ul>
              {LINKS.map(({ href, label }) => (
                <li key={href} className="border-t border-creamWhite/15 first:border-t-0">
                  <Link href={href} className="block py-2.5 text-creamWhite/90 inline-block py-2 hover:text-goldenYellow transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-creamWhite/60 mb-4">Visit &amp; contact</h2>
            <address className="not-italic space-y-3 text-creamWhite/90">
              <p>
                949 Grove Street
                <br />
                San Francisco, CA 94117
              </p>
              <p>
                <a href="tel:+14158759847" className="inline-block py-2 hover:text-goldenYellow transition-colors">415-875-9847</a>
                <br />
                <a href="mailto:maeknox949@gmail.com" className="inline-block py-2 hover:text-goldenYellow transition-colors break-all">maeknox949@gmail.com</a>
              </p>
              <p>Monday–Friday, 8:30 AM–5:30 PM</p>
            </address>
            <Link href="/contact" className="btn btn-yellow mt-6">
              Book a tour
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-creamWhite/15 flex flex-col sm:flex-row gap-2 sm:justify-between text-sm text-creamWhite/70">
          <p>© 2025 Mae&apos;s Childcare. All rights reserved.</p>
          <p>Licensed childcare home · License #384005044</p>
        </div>
      </div>
    </footer>
  )
}
