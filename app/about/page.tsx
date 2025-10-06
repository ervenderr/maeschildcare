import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us - Mae's Childcare",
  description: 'Learn about Mae\'s Childcare mission, philosophy, and our story of providing quality childcare in Zamboanga City.',
}

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-softTeal to-skyBlue py-16">
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
