'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/staff', label: 'Staff' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-creamWhite/95 backdrop-blur-sm rule-bottom">
      <nav
        aria-label="Main"
        className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between"
      >
        {/* name.png is a padded square: scale it up and clip to the wordmark */}
        <Link href="/" className="relative block h-16 w-40 -ml-7 overflow-hidden" aria-label="Mae's Childcare home">
          <Image
            src="/images/name.png"
            alt="Mae's Childcare"
            fill
            sizes="160px"
            className="object-contain scale-[2.2]"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className="link-draw font-medium text-ink"
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-ink !min-h-11 !py-2 !px-5 !text-base">
            Book a tour
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden grid place-items-center h-11 w-11 rounded-xl text-ink active:scale-95 transition-transform"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
            {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-expo)] ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="px-5 pb-6 pt-2">
            {LINKS.map(({ href, label }) => (
              <li key={href} className="rule-top">
                <Link
                  href={href}
                  tabIndex={isOpen ? 0 : -1}
                  className="block py-4 font-heading text-2xl font-semibold tracking-tight"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="rule-top pt-5">
              <Link href="/contact" tabIndex={isOpen ? 0 : -1} className="btn btn-orange w-full">
                Book a tour
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
