import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pastelYellow via-creamWhite to-skyBlue py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-navyText leading-tight animate-fadeInUp">
                Where Learning and Care <span className="text-lightCoral">Grow Together</span>
              </h1>
              <p className="text-xl text-navyText/80">
                Mae's Childcare provides a safe, nurturing, and fun environment for your little ones to learn and grow every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/enrollment"
                  className="bg-lightCoral text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 hover:scale-105 transition shadow-lg"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-navyText px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition shadow-lg border-2 border-softTeal"
                >
                  Learn More
                </Link>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-md animate-fadeInUp animation-delay-400 animate-float">
                <p className="text-navyText font-semibold">📅 Now Enrolling!</p>
                <p className="text-sm text-navyText/70">Children Ages 6 months - 5 years old</p>
                <p className="text-sm text-navyText/70">Open Monday - Friday, 8:30 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="relative animate-fadeIn animation-delay-300">
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/images/iStock-1069933778.jpg"
                  alt="Happy children playing at Mae's Childcare"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-creamWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/DSC2967-scaled.jpg"
                alt="Mae Santos with children"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                Welcome to <span className="text-softTeal">Mae's Childcare</span>
              </h2>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                At Mae's Childcare, our mission is to provide a nurturing environment where children can learn, play, and grow at their own pace. We believe every child deserves personalized care and joyful learning experiences.
              </p>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                Founded by Mae Santos, an experienced early childhood educator, our center has grown from a small home-based program into a trusted learning space for families in Zamboanga City.
              </p>
              <Link
                href="/about"
                className="inline-block bg-softTeal text-white px-8 py-3 rounded-full font-heading font-semibold hover:bg-opacity-90 transition shadow-md"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-4">
            Our <span className="text-lightCoral">Programs</span>
          </h2>
          <p className="text-center text-navyText/70 mb-12 text-lg">
            Age-appropriate programs designed to support every stage of development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Infant Care */}
            <div className="bg-gradient-to-br from-pastelYellow to-yellow-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover-lift transition animate-scaleIn">
              <div className="text-5xl mb-4 animate-bounce">👶</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Infant Care</h3>
              <p className="text-sm text-navyText/70 mb-2">0–2 years</p>
              <p className="text-navyText/80 mb-4">Gentle care and early stimulation for your precious little one.</p>
              <p className="font-semibold text-navyText">₱12,000/month</p>
            </div>

            {/* Toddler Program */}
            <div className="bg-gradient-to-br from-softTeal to-green-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover-lift transition animate-scaleIn animation-delay-100">
              <div className="text-5xl mb-4 animate-bounce animation-delay-200">🧸</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Toddler Program</h3>
              <p className="text-sm text-navyText/70 mb-2">2–4 years</p>
              <p className="text-navyText/80 mb-4">Play-based learning with guided activities and motor skill development.</p>
              <p className="font-semibold text-navyText">₱10,000/month</p>
            </div>

            {/* Preschool */}
            <div className="bg-gradient-to-br from-skyBlue to-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover-lift transition animate-scaleIn animation-delay-200">
              <div className="text-5xl mb-4 animate-bounce animation-delay-400">📚</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Preschool</h3>
              <p className="text-sm text-navyText/70 mb-2">4–5 years</p>
              <p className="text-navyText/80 mb-4">Preparing your child for school with fun, structured lessons.</p>
              <p className="font-semibold text-navyText">₱9,000/month</p>
            </div>

            {/* After School Care */}
            <div className="bg-gradient-to-br from-lightCoral to-red-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover-lift transition animate-scaleIn animation-delay-300">
              <div className="text-5xl mb-4 animate-bounce">⚽</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-3">After School Care</h3>
              <p className="text-sm text-navyText/70 mb-2">4:00 PM – 6:00 PM</p>
              <p className="text-navyText/80 mb-4">Homework help and supervised playtime in a safe environment.</p>
              <p className="font-semibold text-navyText">₱4,000/month</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-block bg-navyText text-white px-8 py-3 rounded-full font-heading font-semibold hover:bg-opacity-90 transition shadow-md"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gradient-to-br from-creamWhite to-pastelYellow/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-4">
            See Our <span className="text-softTeal">Happy Moments</span>
          </h2>
          <p className="text-center text-navyText/70 mb-12 text-lg">
            A glimpse into our daily activities and celebrations
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/the-importance-of-play-in-child-development.jpg"
                alt="Children playing"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/AdobeStock_229647792_Resized-1024x752.jpeg"
                alt="Learning activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/Baby-Child-Care-1-1.jpg"
                alt="Baby care"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/50b2a597-79f8-4206-907c-0d895c51c242.jpg"
                alt="Children activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/Childcare-vs-Kindergarten-Making-the-Right-Choice-for-your-Kids-1.jpg"
                alt="Kindergarten activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/wmremove-transformed.jpeg"
                alt="Fun time"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block bg-lightCoral text-white px-8 py-3 rounded-full font-heading font-semibold hover:bg-opacity-90 transition shadow-md"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-navyText text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Schedule a Visit or <span className="text-pastelYellow">Enroll Today!</span>
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            We'd love to show you around and answer all your questions
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-3">📞</div>
              <p className="text-lg">415-875-9847</p>
              <p className="text-lg">415-652-1748</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-3">✉️</div>
              <p className="text-lg">maeschildcare@email.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-lg">123 Sunshine Street</p>
              <p className="text-lg">Zamboanga City, Philippines</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-pastelYellow text-navyText px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
