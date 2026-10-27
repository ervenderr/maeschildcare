'use client'

import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import './styles.css'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3166734123746!2d-122.43905368468218!3d37.77381397975826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a3a14dc72b%3A0x3b1aa39f6e1f2c5e!2s949%20Grove%20St%2C%20San%20Francisco%2C%20CA%2094117!5e0!3m2!1sen!2sus!4v1234567890'

const FAQS = [
  {
    q: 'Can I schedule a tour before enrolling?',
    a: 'Absolutely! We encourage all families to visit our facility, meet our staff, and see our programs in action before making a decision.',
  },
  {
    q: 'What is your enrollment process?',
    a: "Our enrollment process includes filling out an application, scheduling a visit, submitting required documents, and confirming your child's start date. Visit our Enrollment page for details.",
  },
  {
    q: 'Do you offer part-time enrollment?',
    a: 'Yes! We offer flexible enrollment options. Contact us to discuss a schedule that works for your family.',
  },
]

const LABEL = 'block font-heading font-semibold text-lg mb-2'
const HINT = 'mt-2 text-[1.0625rem] text-ink/70'
const ROW = 'py-5 rule-bottom grid grid-cols-[7rem_1fr] gap-4'
const DT = 'text-ink/70 text-base uppercase tracking-widest pt-1'

const inputClass = (invalid: boolean) =>
  `w-full min-h-12 px-4 py-3 rounded-xl border-[1.5px] bg-white text-ink text-[1.0625rem] placeholder:text-ink/50 focus:border-deepNavy transition-colors ${
    invalid ? 'border-ink' : 'border-ink/30'
  }`

// Scoped to the form: restyles react-phone-number-input to match the other fields.
const PHONE_CSS = `
.contact-form .phone-input{border:1.5px solid rgb(10 37 64 / .3);border-radius:.75rem;min-height:3rem;flex-direction:row;transition:border-color 180ms}
.contact-form .phone-input:focus-within{border-color:#004E89;outline:3px solid #004E89;outline-offset:3px}
.contact-form .phone-input.phone-input-error{border-color:#0A2540!important}
.contact-form .phone-input .PhoneInputCountry{background:#FFF9F0;border:0;border-right:1px solid rgb(10 37 64 / .16);padding:.5rem .75rem}
.contact-form .phone-input .PhoneInputCountry:hover{background:#FED766}
.contact-form .phone-input .PhoneInputCountrySelect{font-size:1.0625rem;color:#0A2540}
.contact-form .phone-input .PhoneInputCountrySelect:focus{outline:3px solid #004E89}
.contact-form .phone-input .PhoneInputInput{padding:.75rem 1rem;font-size:1.0625rem;color:#0A2540}
.contact-form .phone-input .PhoneInputInput::placeholder{color:rgb(10 37 64 / .5)}
`

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <div id={id} aria-live="polite">
      {message && (
        <p className="mt-2 inline-block rounded-md bg-goldenYellow px-3 py-1.5 text-[1.0625rem] font-medium text-ink">
          {message}
        </p>
      )}
    </div>
  )
}

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
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <h1 className="rise text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-3xl" style={{ '--i': 0 } as React.CSSProperties}>
          Get in <span className="text-deepNavy">Touch</span>
        </h1>
        <p className="rise mt-6 text-xl text-ink/80 max-w-2xl" style={{ '--i': 1 } as React.CSSProperties}>
          We&apos;d love to hear from you! Reach out to schedule a visit or ask any questions.
        </p>
      </section>

      {/* Contact Form and Info */}
      <section className="rule-top">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24">
          <div className="reveal">
            <h2 className="text-4xl sm:text-5xl font-semibold">
              Send Us a <span className="text-deepNavy">Message</span>
            </h2>

            <style>{PHONE_CSS}</style>
            <form onSubmit={handleSubmit} className="contact-form mt-10 space-y-7">
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
                <label htmlFor="name" className={LABEL}>Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  required
                  maxLength={100}
                  className={inputClass(!!validationErrors.name)}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  aria-invalid={!!validationErrors.name}
                  aria-describedby="name-error"
                />
                <FieldError id="name-error" message={validationErrors.name} />
              </div>

              <div>
                <label htmlFor="email" className={LABEL}>Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  required
                  maxLength={254}
                  className={inputClass(!!validationErrors.email)}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  aria-invalid={!!validationErrors.email}
                  aria-describedby="email-error"
                />
                <FieldError id="email-error" message={validationErrors.email} />
              </div>

              <div>
                <label htmlFor="phone" className={LABEL}>Phone Number *</label>
                <PhoneInput
                  id="phone"
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
                  aria-invalid={!!validationErrors.phone}
                  aria-describedby="phone-error phone-hint"
                />
                <FieldError id="phone-error" message={validationErrors.phone} />
                <p id="phone-hint" className={HINT}>Select your country code from the dropdown</p>
              </div>

              <div>
                <label htmlFor="message" className={LABEL}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  required
                  rows={5}
                  maxLength={5000}
                  className={`${inputClass(!!validationErrors.message)} resize-y`}
                  placeholder="Tell us about your needs or ask any questions..."
                  aria-invalid={!!validationErrors.message}
                  aria-describedby="message-error message-count"
                />
                <FieldError id="message-error" message={validationErrors.message} />
                <p id="message-count" className={`${HINT} text-right`}>
                  {formData.message.length} / 5000 characters
                </p>
              </div>

              <div role="status" aria-live="polite">
                {submitted && (
                  <p className="rounded-xl bg-skyBlue p-4 font-semibold text-ink">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon!
                  </p>
                )}
                {error && (
                  <p className="rounded-xl bg-goldenYellow p-4 font-semibold text-ink">{error}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="btn btn-orange w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-[1.0625rem] text-ink/70">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="reveal">
            <h2 className="text-4xl sm:text-5xl font-semibold">
              Contact <span className="text-deepNavy">Information</span>
            </h2>
            <p className="mt-6 text-xl text-ink/80 max-w-lg">
              Feel free to reach out to us through any of the following methods. We&apos;re here to help!
            </p>

            <dl className="mt-10 rule-top">
              <div className={ROW}>
                <dt className={DT}>Phone</dt>
                <dd><a href="tel:+14158759847" className="link-draw">415-875-9847</a></dd>
              </div>
              <div className={ROW}>
                <dt className={DT}>Email</dt>
                <dd><a href="mailto:maeknox949@gmail.com" className="link-draw break-all">maeknox949@gmail.com</a></dd>
              </div>
              <div className={ROW}>
                <dt className={DT}>Address</dt>
                <dd>949 Grove Street<br />San Francisco, CA 94117</dd>
              </div>
              <div className={ROW}>
                <dt className={DT}>Hours</dt>
                <dd>
                  Monday – Friday<br />8:30 AM – 5:30 PM
                  <span className="block mt-1 text-ink/70">Full Calendar Year</span>
                </dd>
              </div>
              <div className={ROW}>
                <dt className={DT}>License</dt>
                <dd>
                  License Number: <strong>384005044</strong>
                  <span className="block mt-1 text-ink/70">Fully licensed and regulated childcare facility</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="rule-top">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <h2 className="reveal text-4xl sm:text-5xl font-semibold">
            Find <span className="text-deepNavy">Us</span>
          </h2>

          <div className="reveal mt-10 rounded-3xl overflow-hidden h-96 border border-ink/15">
            <iframe
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mae's Childcare Location"
            />
          </div>

          <p className="mt-6 text-ink/80 max-w-2xl">
            Located in the vibrant Hayes Valley neighborhood of San Francisco, easily accessible and close to public transit
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="rule-top">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24">
          <h2 className="reveal text-4xl sm:text-5xl font-semibold">
            Quick <span className="text-deepNavy">Questions?</span>
          </h2>

          <dl className="reveal rule-top">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="py-6 rule-bottom">
                <dt className="font-heading font-semibold text-xl">{q}</dt>
                <dd className="mt-2 text-ink/80">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}
