import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us - Mae's Childcare",
  description: 'Learn about Mae\'s Childcare mission, philosophy, and our story of providing quality bilingual childcare in San Francisco, CA.',
}

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-softTeal to-skyBlue py-16 overflow-hidden">
        {/* Decorative SVGs */}
        <div className="absolute top-10 left-10 w-36 h-36 opacity-55 animate-float">
          <Image src="/images/butterfly.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-50 animate-float animation-delay-200">
          <Image src="/images/cloud.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6 animate-scaleIn">
            <div className="relative w-64 h-32">
              <Image
                src="/images/logo-with-name.svg"
                alt="Mae's Childcare Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl font-heading font-bold text-white mb-4 animate-scaleIn">
            About Mae's Childcare
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-scaleIn">
            A nurturing environment where children learn, play, and grow at their own pace
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-creamWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-heading font-bold text-navyText mb-6 text-center">
              Our <span className="text-lightCoral">Mission</span>
            </h2>
            <p className="text-xl text-navyText/80 text-center leading-relaxed italic">
              At Mae's Childcare, our mission is to provide a nurturing environment where children can learn, play, and grow at their own pace. We believe every child deserves personalized care and joyful learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-12">
            Our <span className="text-softTeal">Philosophy</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pastelYellow to-yellow-50 p-8 rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">Child-Centered Learning</h3>
              <p className="text-navyText/80">
                We recognize that every child is unique and learns at their own pace. Our programs are designed to meet individual needs and interests, fostering natural curiosity and creativity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-skyBlue to-blue-50 p-8 rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">Social & Emotional Growth</h3>
              <p className="text-navyText/80">
                We prioritize emotional intelligence and social skills through positive interactions, conflict resolution, and building strong relationships with peers and caregivers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-softTeal to-green-50 p-8 rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">Safe & Inclusive Community</h3>
              <p className="text-navyText/80">
                We create a welcoming environment where all families feel valued and supported. Safety, respect, and kindness are the foundation of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-creamWhite to-pastelYellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/DSC2967-scaled.jpg"
                alt="Mae Santos - Founder"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                Our <span className="text-lightCoral">Story</span>
              </h2>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                Mae's Childcare was founded by <strong>Mae Santos</strong>, an experienced early childhood educator who believes in holistic development. With a passion for nurturing young minds through play and discovery, Mae has dedicated over a decade to creating meaningful learning experiences for children.
              </p>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                What started as a small home-based center has grown into a trusted learning space for families in our community. Our commitment to quality care, personalized attention, and creating a home-away-from-home environment has made Mae's Childcare a beloved part of many families' lives.
              </p>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                Today, we continue to uphold the values that Mae established from the beginning: love, respect, learning, and joy. Every child who walks through our doors becomes part of our extended family.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-navyText font-heading font-semibold text-xl mb-2">
                  "Every child is a gift, and it's our privilege to help them discover their unique potential."
                </p>
                <p className="text-navyText/60">— Mae Santos, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Curriculum */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Decorative SVGs */}
        <div className="absolute top-20 right-5 w-40 h-40 opacity-50 animate-float">
          <Image src="/images/book.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 left-5 w-48 h-48 opacity-45 animate-float animation-delay-300">
          <Image src="/images/baby with ball.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-4">
            Our <span className="text-lightCoral">Curriculum</span>
          </h2>
          <p className="text-center text-navyText/70 mb-12 text-lg max-w-3xl mx-auto">
            We use a Creative Curriculum approach that makes learning joyful and meaningful for every child
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pastelYellow to-yellow-50 p-8 rounded-3xl shadow-lg hover-lift transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">Art-Based Learning</h3>
              <p className="text-navyText/80 leading-relaxed">
                Our program introduces children to letters, numbers, shapes, and colors through hands-on art and playful learning. We encourage creativity through art activities that inspire imagination and self-expression.
              </p>
            </div>

            <div className="bg-gradient-to-br from-skyBlue to-blue-50 p-8 rounded-3xl shadow-lg hover-lift transition">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">Bilingual Immersion</h3>
              <p className="text-navyText/80 leading-relaxed">
                We encourage bilingual learning in Filipino (Tagalog) and English, helping children build early language skills that will benefit them throughout their lives. Language immersion builds strong communication abilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-softTeal to-green-50 p-8 rounded-3xl shadow-lg hover-lift transition">
              <div className="text-5xl mb-4">🧸</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">Age-Appropriate Play</h3>
              <p className="text-navyText/80 leading-relaxed">
                Infants and toddlers explore with age-appropriate toys that inspire curiosity and creativity. Our mixed-age environment promotes cooperation, empathy, and peer learning among children.
              </p>
            </div>

            <div className="bg-gradient-to-br from-lightCoral to-red-50 p-8 rounded-3xl shadow-lg hover-lift transition">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">Daily Enrichment</h3>
              <p className="text-navyText/80 leading-relaxed">
                Each day is filled with fun and enriching activities—from alphabet and number time to arts and crafts, reading, music, movement, and playtime—all designed to make learning joyful!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pastelYellow/20 to-skyBlue/20 p-10 rounded-3xl">
            <h3 className="text-3xl font-heading font-bold text-navyText mb-6 text-center">Program Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-navyText/80"><strong>Art-Based Learning</strong> – Encouraging creativity through hands-on art activities</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-navyText/80"><strong>Creative Curriculum</strong> – A well-rounded approach supporting every child's development</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-navyText/80"><strong>Language Immersion</strong> – Building communication skills in English and Filipino</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-navyText/80"><strong>Movement, Music & Academics</strong> – Blending play, rhythm, and learning</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-navyText/80"><strong>Mixed-Age Environment</strong> – Promoting cooperation and peer learning</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-navyText/80"><strong>Nutritious Meals</strong> – Daily healthy meals provided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-navyText text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our Core <span className="text-pastelYellow">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-4">💛</div>
              <h3 className="text-xl font-heading font-bold mb-2">Love</h3>
              <p className="text-gray-300">Every interaction is rooted in care and compassion</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-xl font-heading font-bold mb-2">Excellence</h3>
              <p className="text-gray-300">We strive for the highest quality in all we do</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-heading font-bold mb-2">Creativity</h3>
              <p className="text-gray-300">We encourage imagination and innovative thinking</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌈</div>
              <h3 className="text-xl font-heading font-bold mb-2">Joy</h3>
              <p className="text-gray-300">Learning should be fun and filled with laughter</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
