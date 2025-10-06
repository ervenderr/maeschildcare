import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Enrollment - Mae's Childcare",
  description: 'Enroll your child at Mae\'s Childcare. View our enrollment process, tuition rates, and download required forms.',
}

export default function Enrollment() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-lightCoral to-pastelYellow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-4 animate-scaleIn">
            Enrollment Information
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-scaleIn">
            Join the Mae's Childcare family today!
          </p>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 bg-creamWhite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-12 animate-fadeInUp">
            Enrollment <span className="text-softTeal">Process</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg flex items-start gap-6 hover-lift transition animate-fadeInUp">
              <div className="bg-pastelYellow text-navyText font-heading font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce">
                1
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Fill Out Application Form</h3>
                <p className="text-navyText/80 text-lg">
                  Complete our online application form or download and submit the PDF version. Provide basic information about your child and your family's needs.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg flex items-start gap-6 hover-lift transition animate-fadeInUp animation-delay-100">
              <div className="bg-softTeal text-white font-heading font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce animation-delay-200">
                2
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Schedule a Visit or Interview</h3>
                <p className="text-navyText/80 text-lg">
                  We'll arrange a parent interview and daycare tour so you can meet our staff, see our facilities, and ask any questions you may have.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg flex items-start gap-6 hover-lift transition animate-fadeInUp animation-delay-200">
              <div className="bg-skyBlue text-navyText font-heading font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce animation-delay-400">
                3
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Submit Required Documents</h3>
                <p className="text-navyText/80 text-lg">
                  Provide necessary documentation including birth certificate, immunization records, and medical information sheet.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg flex items-start gap-6 hover-lift transition animate-fadeInUp animation-delay-300">
              <div className="bg-lightCoral text-white font-heading font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce">
                4
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Confirm Start Date</h3>
                <p className="text-navyText/80 text-lg">
                  Once everything is approved, we'll confirm your child's start date and provide orientation materials to help with the transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-12 animate-fadeInUp">
            Downloadable <span className="text-lightCoral">Forms</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pastelYellow to-yellow-100 p-8 rounded-3xl shadow-lg text-center hover-lift transition animate-scaleIn">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-4">Enrollment Form</h3>
              <p className="text-navyText/70 mb-6">Complete this form to begin the enrollment process</p>
              <button className="bg-navyText text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
                Download PDF
              </button>
            </div>

            <div className="bg-gradient-to-br from-softTeal to-green-100 p-8 rounded-3xl shadow-lg text-center">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-4">Parent Handbook</h3>
              <p className="text-navyText/70 mb-6">Learn about our policies, procedures, and expectations</p>
              <button className="bg-navyText text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
                Download PDF
              </button>
            </div>

            <div className="bg-gradient-to-br from-skyBlue to-blue-100 p-8 rounded-3xl shadow-lg text-center">
              <div className="text-6xl mb-4">⚕️</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-4">Medical Info Sheet</h3>
              <p className="text-navyText/70 mb-6">Provide essential health and emergency information</p>
              <button className="bg-navyText text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition and Schedule */}
      <section className="py-16 bg-gradient-to-br from-creamWhite to-skyBlue/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-4">
            Tuition & <span className="text-softTeal">Schedule</span>
          </h2>
          <p className="text-center text-navyText/70 mb-12 text-lg">
            Transparent pricing with no hidden fees
          </p>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-navyText text-white">
                    <th className="px-8 py-4 text-left font-heading text-lg">Program</th>
                    <th className="px-8 py-4 text-left font-heading text-lg">Hours</th>
                    <th className="px-8 py-4 text-left font-heading text-lg">Monthly Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-pastelYellow/20 transition">
                    <td className="px-8 py-6">
                      <div className="font-heading font-bold text-navyText text-lg">Infant Care</div>
                      <div className="text-sm text-navyText/60">0–2 years</div>
                    </td>
                    <td className="px-8 py-6 text-navyText/80">8:00 AM – 4:00 PM</td>
                    <td className="px-8 py-6 font-heading font-bold text-navyText text-xl">₱12,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-softTeal/20 transition">
                    <td className="px-8 py-6">
                      <div className="font-heading font-bold text-navyText text-lg">Toddler Program</div>
                      <div className="text-sm text-navyText/60">2–4 years</div>
                    </td>
                    <td className="px-8 py-6 text-navyText/80">8:00 AM – 4:00 PM</td>
                    <td className="px-8 py-6 font-heading font-bold text-navyText text-xl">₱10,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-skyBlue/20 transition">
                    <td className="px-8 py-6">
                      <div className="font-heading font-bold text-navyText text-lg">Preschool</div>
                      <div className="text-sm text-navyText/60">4–5 years</div>
                    </td>
                    <td className="px-8 py-6 text-navyText/80">8:00 AM – 4:00 PM</td>
                    <td className="px-8 py-6 font-heading font-bold text-navyText text-xl">₱9,000</td>
                  </tr>
                  <tr className="hover:bg-lightCoral/20 transition">
                    <td className="px-8 py-6">
                      <div className="font-heading font-bold text-navyText text-lg">After School Care</div>
                      <div className="text-sm text-navyText/60">School age</div>
                    </td>
                    <td className="px-8 py-6 text-navyText/80">4:00 PM – 6:00 PM</td>
                    <td className="px-8 py-6 font-heading font-bold text-navyText text-xl">₱4,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-pastelYellow to-lightCoral/20 p-8">
              <p className="text-navyText text-center text-lg">
                <strong>Note:</strong> For special arrangements or part-time enrollment, please contact us for customized pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navyText text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to <span className="text-pastelYellow">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to schedule a tour or start the enrollment process. We can't wait to meet your family!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-pastelYellow text-navyText px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="tel:4158759847"
              className="bg-lightCoral text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
