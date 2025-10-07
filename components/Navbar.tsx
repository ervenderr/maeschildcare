'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-creamWhite shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:scale-105 transition">
            <div className="relative h-25 w-48 sm:h-25 sm:w-64">
              <Image
                src="/images/name.svg"
                alt="Mae's Childcare"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:scale-105">
              Home
            </Link>
            <Link href="/about" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:scale-105">
              About
            </Link>
            <Link href="/programs" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:scale-105">
              Programs
            </Link>
            <Link href="/staff" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:scale-105">
              Staff
            </Link>
            <Link href="/gallery" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:scale-105">
              Gallery
            </Link>
            <Link href="/contact" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:scale-105">
              Contact
            </Link>
            <Link
              href="/enrollment"
              className="bg-lightCoral text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 hover:scale-105 transition shadow-md"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navyText hover:text-lightCoral focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:bg-pastelYellow/20 px-4 py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:bg-pastelYellow/20 px-4 py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/programs" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:bg-pastelYellow/20 px-4 py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                Programs
              </Link>
              <Link href="/staff" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:bg-pastelYellow/20 px-4 py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                Staff
              </Link>
              <Link href="/gallery" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:bg-pastelYellow/20 px-4 py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" className="text-navyText hover:text-lightCoral font-semibold text-base transition hover:bg-pastelYellow/20 px-4 py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link
                href="/enrollment"
                className="bg-lightCoral text-white px-6 py-2 rounded-full font-semibold text-center hover:bg-opacity-90 transition"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
