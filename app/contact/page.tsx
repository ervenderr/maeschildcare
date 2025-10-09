'use client'

import { useState } from 'react'
import Image from 'next/image'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import './styles.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [honeypot, setHoneypot] = useState('') // Bot detection

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return 'Name is required'
    if (name.trim().length < 2) return 'Name must be at least 2 characters'
    if (name.trim().length > 100) return 'Name must be less than 100 characters'
    if (!/^[a-zA-Z\s'-]+$/.test(name)) return 'Name can only contain letters, spaces, hyphens, and apostrophes'
    return ''
  }

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    if (email.length > 254) return 'Email is too long'
    return ''
  }

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return 'Phone number is required'
    try {
      if (!isValidPhoneNumber(phone)) {
        return 'Please enter a valid phone number'
      }
    } catch {
      return 'Please enter a valid phone number'
    }
    return ''
  }

  const validateMessage = (message: string): string => {
    if (!message.trim()) return 'Message is required'
    if (message.trim().length < 10) return 'Message must be at least 10 characters'
    if (message.trim().length > 5000) return 'Message must be less than 5000 characters'
    return ''
  }

  const validateForm = (): boolean => {
    const errors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message)
    }

    setValidationErrors(errors)

    return !Object.values(errors).some(error => error !== '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      console.log('Bot detected')
      return
    }

    // Validate form
    if (!validateForm()) {
      setError('Please fix the errors above')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setValidationErrors({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear validation error when user starts typing
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      })
    }
  }

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({
      ...formData,
      phone: value || ''
    })
    
    // Clear validation error when user starts typing
    if (validationErrors.phone) {
      setValidationErrors({
        ...validationErrors,
        phone: ''
      })
    }
  }

  const handleBlur = (field: keyof typeof formData) => {
    let error = ''
    switch (field) {
      case 'name':
        error = validateName(formData.name)
        break
      case 'email':
        error = validateEmail(formData.email)
        break
      case 'phone':
        error = validatePhone(formData.phone)
        break
      case 'message':
        error = validateMessage(formData.message)
        break
    }
    
    if (error) {
      setValidationErrors({
        ...validationErrors,
        [field]: error
      })
    }
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
                <div className="bg-softTeal/20 border-2 border-softTeal text-navyText p-4 rounded-2xl mb-6 animate-scaleIn">
                  <p className="font-semibold">✓ Thank you! Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-400 text-red-700 p-4 rounded-2xl mb-6 animate-scaleIn">
                  <p className="font-semibold">✗ {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, only bots will fill it */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

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
                    onBlur={() => handleBlur('name')}
                    required
                    maxLength={100}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      validationErrors.name 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-gray-200 focus:border-softTeal'
                    } focus:outline-none transition`}
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠️</span> {validationErrors.name}
                    </p>
                  )}
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
                    onBlur={() => handleBlur('email')}
                    required
                    maxLength={254}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      validationErrors.email 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-gray-200 focus:border-softTeal'
                    } focus:outline-none transition`}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠️</span> {validationErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-navyText font-semibold mb-2">
                    Phone Number *
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur('phone')}
                    className={`phone-input ${
                      validationErrors.phone ? 'phone-input-error' : ''
                    }`}
                    placeholder="(123) 456-7890"
                    autoComplete="tel"
                  />
                  {validationErrors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠️</span> {validationErrors.phone}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Select your country code from the dropdown
                  </p>
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
                    onBlur={() => handleBlur('message')}
                    required
                    rows={5}
                    maxLength={5000}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      validationErrors.message 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-gray-200 focus:border-softTeal'
                    } focus:outline-none transition resize-none`}
                    placeholder="Tell us about your needs or ask any questions..."
                  />
                  {validationErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠️</span> {validationErrors.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500 text-right">
                    {formData.message.length} / 5000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-lightCoral text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 Your information is secure and will never be shared with third parties.
                </p>
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
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-softTeal to-green-100 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">✉️</div>
                    <div>
                      <h3 className="font-heading font-bold text-navyText text-xl mb-2">Email</h3>
                      <p className="text-navyText/80">mildredknox949@gmail.com</p>
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
