import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Enrollment - Mae's Childcare",
  description: 'Enroll your child at Mae\'s Childcare. View our enrollment process now!',
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
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-scaleIn mb-6">
            Join the Mae's Childcare family today!
          </p>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl max-w-3xl mx-auto animate-scaleIn animation-delay-200">
            <h3 className="text-2xl font-heading font-bold text-navyText mb-3">✅ Licensed Childcare Home</h3>
            <div className="grid md:grid-cols-3 gap-4 text-navyText/80">
              <div>
                <p className="font-semibold">License #</p>
                <p className="text-lg">384005044</p>
              </div>
              <div>
                <p className="font-semibold">Capacity</p>
                <p className="text-lg">8 Children</p>
              </div>
              <div>
                <p className="font-semibold">Issued</p>
                <p className="text-lg">October 3, 2025</p>
              </div>
            </div>
          </div>
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
                <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Contact Us First</h3>
                <p className="text-navyText/80 text-lg">
                  Reach out to us by phone or email to express your interest in enrollment. We'll provide you with all the necessary information and next steps for your child's enrollment.
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

      {/* Schedule Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-4">
            Our <span className="text-softTeal">Schedule</span>
          </h2>
          <p className="text-center text-navyText/70 mb-12 text-lg">
            Flexible scheduling options to fit your family's needs
          </p>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-navyText text-white">
                    <th className="px-8 py-4 text-left font-heading text-lg">Program</th>
                    <th className="px-8 py-4 text-left font-heading text-lg">Age Range</th>
                    <th className="px-8 py-4 text-left font-heading text-lg">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-pastelYellow/20 transition">
                    <td className="px-8 py-6">
                      <div className="font-heading font-bold text-navyText text-lg">Infant Care</div>
                    </td>
                    <td className="px-8 py-6 text-navyText/80">8 months – 2 years</td>
                    <td className="px-8 py-6 text-navyText/80">8:30 AM – 5:30 PM</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-softTeal/20 transition">
                    <td className="px-8 py-6">
                      <div className="font-heading font-bold text-navyText text-lg">Toddler Program</div>
                    </td>
                    <td className="px-8 py-6 text-navyText/80">2 – 4 years</td>
                    <td className="px-8 py-6 text-navyText/80">8:30 AM – 5:30 PM</td>
                  </tr>
                  <tr className="hover:bg-skyBlue/20 transition">
                    <td className="px-8 py-6">
                      <div className="font-heading font-bold text-navyText text-lg">Preschool</div>
                    </td>
                    <td className="px-8 py-6 text-navyText/80">4 – 5 years</td>
                    <td className="px-8 py-6 text-navyText/80">8:30 AM – 5:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-pastelYellow to-lightCoral/20 p-8">
              <p className="text-navyText text-center text-lg mb-4">
                <strong>📞 Contact us for pricing and availability</strong>
              </p>
              <p className="text-navyText/80 text-center">
                We offer both full-time and part-time scheduling options. Please reach out to discuss rates and find the perfect fit for your family.
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
