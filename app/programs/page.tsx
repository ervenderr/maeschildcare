import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Programs - Mae's Childcare",
  description: 'Explore our age-appropriate childcare programs including infant care, toddler program, preschool, and after school care.',
}

export default function Programs() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pastelYellow to-lightCoral py-16 overflow-hidden">
        {/* Decorative SVGs */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-55 animate-float">
          <Image src="/images/kids head.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-36 h-36 opacity-50 animate-float animation-delay-200">
          <Image src="/images/flower.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-4 animate-scaleIn">
            Our Programs
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-scaleIn">
            Age-appropriate programs designed to support every stage of development
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-creamWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-navyText/80 leading-relaxed animate-fadeIn">
            Mae's Childcare offers carefully designed programs that cater to each developmental stage of your child's early years. From gentle infant care to structured preschool learning, we ensure every child receives the attention and stimulation they need to thrive.
          </p>
        </div>
      </section>

      {/* Infant Care */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Decorative SVG */}
        <div className="absolute bottom-10 right-10 w-48 h-48 opacity-45 animate-float animation-delay-300">
          <Image src="/images/baby with ball.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl animate-slideInLeft hover-lift">
              <Image
                src="/images/IMG_0927.jpeg"
                alt="Children in playroom learning environment"
                fill
                className="object-cover"
              />
            </div>

            <div className="animate-slideInRight">
              <div className="inline-block bg-pastelYellow px-4 py-2 rounded-full text-navyText font-semibold mb-4 animate-scaleIn">
                0–2 years
              </div>
              <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                <span className="text-5xl animate-bounce">👶</span> Infant Care
              </h2>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                Our infant care program provides gentle, attentive care for your precious little ones. We focus on creating a warm, secure environment where babies can explore and develop at their own pace.
              </p>

              <h3 className="text-xl font-heading font-bold text-navyText mb-3">What We Offer:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-softTeal mr-2">✓</span>
                  <span className="text-navyText/80">Sensory play activities to stimulate development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-softTeal mr-2">✓</span>
                  <span className="text-navyText/80">Individualized feeding and napping schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-softTeal mr-2">✓</span>
                  <span className="text-navyText/80">Focus on emotional bonding and comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-softTeal mr-2">✓</span>
                  <span className="text-navyText/80">Daily reports on feeding, diapering, and activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Toddler Program */}
      <section className="relative py-16 bg-gradient-to-br from-creamWhite to-softTeal/10 overflow-hidden">
        {/* Decorative SVG */}
        <div className="absolute top-10 left-10 w-40 h-40 opacity-50 animate-float">
          <Image src="/images/book.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slideInLeft">
              <div className="inline-block bg-softTeal text-white px-4 py-2 rounded-full font-semibold mb-4 animate-scaleIn">
                2–4 years
              </div>
              <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                <span className="text-5xl animate-bounce animation-delay-200">🧸</span> Toddler Program
              </h2>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                Our toddler program embraces the natural curiosity and energy of young children. Through play-based learning and guided activities, we help toddlers develop essential skills while having fun.
              </p>

              <h3 className="text-xl font-heading font-bold text-navyText mb-3">What We Offer:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-lightCoral mr-2">✓</span>
                  <span className="text-navyText/80">Daily creative activities: art, singing, and dancing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lightCoral mr-2">✓</span>
                  <span className="text-navyText/80">Outdoor play and gross motor skill development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lightCoral mr-2">✓</span>
                  <span className="text-navyText/80">Communication and language skill building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lightCoral mr-2">✓</span>
                  <span className="text-navyText/80">Social interaction and friendship building</span>
                </li>
              </ul>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl order-1 md:order-2 animate-slideInRight hover-lift">
              <Image
                src="/images/IMG_0921.jpeg"
                alt="Toddlers playing with colorful foam blocks"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preschool */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl animate-slideInLeft hover-lift">
              <Image
                src="/images/IMG_0894.jpeg"
                alt="Preschooler drawing and creating art"
                fill
                className="object-cover"
              />
            </div>

            <div className="animate-slideInRight">
              <div className="inline-block bg-skyBlue px-4 py-2 rounded-full text-navyText font-semibold mb-4 animate-scaleIn">
                4–5 years
              </div>
              <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                <span className="text-5xl animate-bounce animation-delay-400">📚</span> Preschool Program
              </h2>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                Our preschool program prepares children for formal schooling through structured, engaging lessons. We focus on early literacy, numeracy, and social skills in a fun, supportive environment.
              </p>

              <h3 className="text-xl font-heading font-bold text-navyText mb-3">What We Offer:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-skyBlue mr-2">✓</span>
                  <span className="text-navyText/80">Early literacy and phonics instruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skyBlue mr-2">✓</span>
                  <span className="text-navyText/80">Basic math concepts and number recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skyBlue mr-2">✓</span>
                  <span className="text-navyText/80">Science exploration and discovery activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-skyBlue mr-2">✓</span>
                  <span className="text-navyText/80">Social lessons and school readiness skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Special Arrangements */}
      <section className="py-16 bg-navyText text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Need a <span className="text-pastelYellow">Custom Arrangement?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We understand that every family has unique needs. For special arrangements or part-time enrollment options, please contact us to discuss how we can support your family.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pastelYellow text-navyText px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
