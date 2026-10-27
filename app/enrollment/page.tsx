import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Enrollment - Mae's Childcare",
  description: 'Enroll your child at Mae\'s Childcare. View our enrollment process now!',
}

const STEPS = [
  {
    title: 'Contact Us First',
    body: "Reach out to us by phone or email to express your interest in enrollment. We'll provide you with all the necessary information and next steps for your child's enrollment.",
  },
  {
    title: 'Schedule a Visit or Interview',
    body: "We'll arrange a parent interview and daycare tour so you can meet our staff, see our facilities, and ask any questions you may have.",
  },
  {
    title: 'Submit Required Documents',
    body: 'Provide necessary documentation including birth certificate, immunization records, and medical information sheet.',
  },
  {
    title: 'Confirm Start Date',
    body: "Once everything is approved, we'll confirm your child's start date and provide orientation materials to help with the transition.",
  },
]

const PROGRAMS = [
  { name: 'Infant Care', ages: '4 months – 2 years' },
  { name: 'Toddler Program', ages: '2 – 4 years' },
  { name: 'Preschool', ages: '4 – 5 years' },
]
const HOURS = '8:30 AM – 5:30 PM'

const FACTS = [
  { label: 'License #', value: '384005044' },
  { label: 'Capacity', value: '8 Children' },
  { label: 'Issued', value: 'October 3, 2025' },
]

const TH = 'py-4 pr-6 text-left font-heading font-semibold text-lg rule-bottom border-ink/40'
const TD = 'py-5 pr-6 rule-bottom'

export default function Enrollment() {
  return (
    <div>
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 lg:pt-24 pb-16 lg:pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-end">
        <div>
          <h1 className="rise text-4xl sm:text-5xl lg:text-6xl font-semibold" style={{ '--i': 0 } as React.CSSProperties}>
            Enrollment <span className="text-deepNavy">Information</span>
          </h1>
          <p className="rise mt-6 text-xl text-ink/80 max-w-xl" style={{ '--i': 1 } as React.CSSProperties}>
            Join the Mae&apos;s Childcare family today!
          </p>
        </div>

        <div className="rise" style={{ '--i': 2 } as React.CSSProperties}>
          <h2 className="font-heading text-2xl font-semibold mb-4">Licensed Childcare Home</h2>
          <dl className="rule-top">
            {FACTS.map(({ label, value }) => (
              <div key={label} className="py-4 rule-bottom grid grid-cols-[7rem_1fr] gap-4">
                <dt className="text-ink/70 text-base uppercase tracking-widest pt-1">{label}</dt>
                <dd className="font-heading text-xl font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="rule-top">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24">
          <h2 className="reveal lg:sticky lg:top-32 self-start text-4xl sm:text-5xl font-semibold">
            Enrollment <span className="text-deepNavy">Process</span>
          </h2>

          <ol className="reveal rule-top">
            {STEPS.map(({ title, body }) => (
              <li key={title} className="py-7 rule-bottom">
                <h3 className="font-heading text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-ink/80 max-w-xl">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Schedule */}
      <section className="rule-top">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <h2 className="reveal text-4xl sm:text-5xl font-semibold">
            Our <span className="text-deepNavy">Schedule</span>
          </h2>
          <p className="reveal mt-6 text-xl text-ink/80 max-w-xl">
            Flexible scheduling options to fit your family&apos;s needs
          </p>

          <div className="reveal mt-10 overflow-x-auto">
            <table className="w-full min-w-[32rem]">
              <thead>
                <tr>
                  <th scope="col" className={TH}>Program</th>
                  <th scope="col" className={TH}>Age Range</th>
                  <th scope="col" className={TH}>Hours</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMS.map(({ name, ages }) => (
                  <tr key={name}>
                    <th scope="row" className={`${TD} text-left font-heading font-semibold text-lg`}>{name}</th>
                    <td className={TD}>{ages}</td>
                    <td className={TD}>{HOURS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="reveal mt-10 max-w-2xl">
            <p className="font-heading text-2xl font-semibold">Contact us for pricing and availability</p>
            <p className="mt-3 text-ink/80">
              We offer both full-time and part-time scheduling options. Please reach out to discuss rates and find the perfect fit for your family.
            </p>
          </div>
        </div>
      </section>

      {/* CTA: the page's one full-strength colour field */}
      <section className="bg-ink text-creamWhite">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-24">
          <div className="reveal max-w-3xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Ready to <span className="text-goldenYellow">Get Started?</span>
            </h2>
            <p className="mt-6 text-xl text-creamWhite/80 max-w-xl">
              Contact us today to schedule a tour or start the enrollment process. We can&apos;t wait to meet your family!
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href="/contact" className="btn btn-yellow">
                Contact Us
              </Link>
              <a href="tel:4158759847" className="link-draw font-heading text-lg font-semibold inline-flex items-center min-h-11">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
