import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navyText text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="relative h-16 w-56 mb-4">
                <Image
                  src="/images/name.svg"
                  alt="Mae's Childcare"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-gray-300 italic font-medium">Where Learning and Care Grow Together</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-pastelYellow transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-pastelYellow transition">About</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-pastelYellow transition">Programs</Link></li>
              <li><Link href="/enrollment" className="text-gray-300 hover:text-pastelYellow transition">Enrollment</Link></li>
              <li><Link href="/staff" className="text-gray-300 hover:text-pastelYellow transition">Staff</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-pastelYellow transition">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-pastelYellow transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>415-875-9847 / 415-652-1748</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>maeschildcare@email.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Sunshine Street, Zamboanga City, Philippines</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕒</span>
                <span>Monday–Friday, 8:00 AM–6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Mae's Childcare. All rights reserved.</p>
          <p className="mt-2 text-sm italic">License Number: 384005044</p>
        </div>
      </div>
    </footer>
  )
}
