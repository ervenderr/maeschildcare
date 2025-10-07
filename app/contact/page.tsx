'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-lightCoral to-pastelYellow py-16 overflow-hidden">
        {/* Decorative SVGs */}
        <div className="absolute top-10 right-10 w-36 h-36 opacity-60 animate-float">
          <Image src="/images/butterfly.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-55 animate-float animation-delay-200">
          <Image src="/images/flower.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-4 animate-scaleIn">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-scaleIn">
            We'd love to hear from you! Reach out to schedule a visit or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative py-16 bg-creamWhite overflow-hidden">
        {/* Decorative SVG */}
        <div className="absolute bottom-10 right-5 w-44 h-44 opacity-45 animate-float animation-delay-300">
          <Image src="/images/kids head.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-heading font-bold text-navyText mb-6">
                Send Us a <span className="text-lightCoral">Message</span>
              </h2>

              {submitted && (
                <div className="bg-softTeal/20 border-2 border-softTeal text-navyText p-4 rounded-2xl mb-6">
                  <p className="font-semibold">✓ Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-navyText font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-softTeal focus:outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-navyText font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-softTeal focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-navyText font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-softTeal focus:outline-none transition"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-navyText font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-softTeal focus:outline-none transition resize-none"
                    placeholder="Tell us about your needs or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lightCoral text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-navyText mb-6">
                  Contact <span className="text-softTeal">Information</span>
                </h2>
                <p className="text-lg text-navyText/80 mb-8">
                  Feel free to reach out to us through any of the following methods. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pastelYellow to-yellow-100 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📞</div>
                    <div>
                      <h3 className="font-heading font-bold text-navyText text-xl mb-2">Phone</h3>
                      <p className="text-navyText/80">415-875-9847</p>
                      <p className="text-navyText/80">415-652-1748</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-softTeal to-green-100 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">✉️</div>
                    <div>
                      <h3 className="font-heading font-bold text-navyText text-xl mb-2">Email</h3>
                      <p className="text-navyText/80">maeschildcare@email.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-skyBlue to-blue-100 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📍</div>
                    <div>
                      <h3 className="font-heading font-bold text-navyText text-xl mb-2">Address</h3>
                      <p className="text-navyText/80">949 Grove Street</p>
                      <p className="text-navyText/80">San Francisco, CA 94117</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-lightCoral to-red-100 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🕒</div>
                    <div>
                      <h3 className="font-heading font-bold text-navyText text-xl mb-2">Operating Hours</h3>
                      <p className="text-navyText/80">Monday – Friday</p>
                      <p className="text-navyText/80">8:30 AM – 5:30 PM</p>
                      <p className="text-sm text-navyText/60 mt-2">Full Calendar Year</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-heading font-bold text-navyText text-xl mb-3">License Information</h3>
                <p className="text-navyText/80">License Number: <strong>384005044</strong></p>
                <p className="text-sm text-navyText/60 mt-2">Fully licensed and regulated childcare facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-12">
            Find <span className="text-lightCoral">Us</span>
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3166734123746!2d-122.43905368468218!3d37.77381397975826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a3a14dc72b%3A0x3b1aa39f6e1f2c5e!2s949%20Grove%20St%2C%20San%20Francisco%2C%20CA%2094117!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mae's Childcare Location"
            />
          </div>

          <p className="text-center text-navyText/60 mt-6">
            Located in the vibrant Hayes Valley neighborhood of San Francisco, easily accessible and close to public transit
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-br from-creamWhite to-pastelYellow/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-12">
            Quick <span className="text-softTeal">Questions?</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-heading font-bold text-navyText text-lg mb-2">
                Can I schedule a tour before enrolling?
              </h3>
              <p className="text-navyText/80">
                Absolutely! We encourage all families to visit our facility, meet our staff, and see our programs in action before making a decision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-heading font-bold text-navyText text-lg mb-2">
                What is your enrollment process?
              </h3>
              <p className="text-navyText/80">
                Our enrollment process includes filling out an application, scheduling a visit, submitting required documents, and confirming your child's start date. Visit our Enrollment page for details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-heading font-bold text-navyText text-lg mb-2">
                Do you offer part-time enrollment?
              </h3>
              <p className="text-navyText/80">
                Yes! We offer flexible enrollment options. Contact us to discuss a schedule that works for your family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
