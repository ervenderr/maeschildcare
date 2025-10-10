import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pastelYellow via-creamWhite to-skyBlue py-20 overflow-hidden">
        {/* Floating Decorative SVGs */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-60 animate-float">
          <Image src="/images/butterfly.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-32 left-10 w-40 h-40 opacity-50 animate-float animation-delay-200">
          <Image src="/images/cloud.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 right-32 w-28 h-28 opacity-55 animate-float animation-delay-400">
          <Image src="/images/flower.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-navyText leading-tight animate-fadeInUp">
                Where Learning and Care <span className="text-lightCoral">Grow Together</span>
              </h1>
              <p className="text-xl text-navyText/80">
                A licensed childcare home in San Francisco providing bilingual education, art-based learning, and nurturing care for children ages 8 months to 5 years.
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
                <p className="text-navyText font-semibold">📅 Now Enrolling! Limited Spots Available</p>
                <p className="text-sm text-navyText/70">🎯 Capacity: 8 children only</p>
                <p className="text-sm text-navyText/70">🕐 Monday - Friday, 8:30 AM - 5:30 PM</p>
                <p className="text-sm text-navyText/70">🌐 Bilingual: English & Filipino</p>
              </div>
            </div>
            <div className="relative animate-fadeIn animation-delay-300">
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/images/IMG_0894.jpeg"
                  alt="Children playing in colorful indoor playroom at Mae's Childcare"
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
      <section className="relative py-16 bg-creamWhite overflow-hidden">
        {/* Decorative SVG */}
        <div className="absolute bottom-10 left-5 w-48 h-48 opacity-40 animate-float">
          <Image src="/images/baby with ball.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/IMG_0927.jpeg"
                alt="Teacher with children in playroom"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                Welcome to <span className="text-softTeal">Mae's Childcare</span>
              </h2>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                At Mae's Childcare, we provide a nurturing licensed childcare home where children explore, learn, and grow through our Creative Curriculum. Our art-based learning approach encourages creativity and hands-on discovery.
              </p>
              <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                We offer bilingual education in English and Filipino, helping children build strong language skills from an early age. With CPR and First Aid certified staff, nutritious daily meals, and a mixed-age environment that promotes cooperation and empathy, we create a joyful, safe space for up to 8 children in San Francisco.
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
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Decorative SVGs */}
        <div className="absolute top-20 right-10 w-40 h-40 opacity-50 animate-float">
          <Image src="/images/book.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-36 h-36 opacity-45 animate-float animation-delay-300">
          <Image src="/images/kids head.svg" alt="" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-4">
            Our <span className="text-lightCoral">Programs</span>
          </h2>
          <p className="text-center text-navyText/70 mb-12 text-lg">
            Age-appropriate programs designed to support every stage of development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Infant Care */}
            <div className="bg-gradient-to-br from-pastelYellow to-yellow-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover-lift transition animate-scaleIn">
              <div className="text-5xl mb-4 animate-bounce">👶</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Infant Care</h3>
              <p className="text-sm text-navyText/70 mb-2">8 months – 2 years</p>
              <p className="text-navyText/80">Gentle care and early stimulation for your precious little one in a nurturing environment with individualized attention.</p>
            </div>

            {/* Toddler Program */}
            <div className="bg-gradient-to-br from-softTeal to-green-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover-lift transition animate-scaleIn animation-delay-100">
              <div className="text-5xl mb-4 animate-bounce animation-delay-200">🧸</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Toddler Program</h3>
              <p className="text-sm text-navyText/70 mb-2">2–4 years</p>
              <p className="text-navyText/80">Play-based learning with guided activities and motor skill development through exploration and discovery.</p>
            </div>

            {/* Preschool */}
            <div className="bg-gradient-to-br from-skyBlue to-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover-lift transition animate-scaleIn animation-delay-200">
              <div className="text-5xl mb-4 animate-bounce animation-delay-400">📚</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-3">Preschool</h3>
              <p className="text-sm text-navyText/70 mb-2">4–5 years</p>
              <p className="text-navyText/80">Preparing your child for kindergarten with structured lessons, social skills, and school readiness activities.</p>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-4">
            Why Choose <span className="text-lightCoral">Mae's Childcare?</span>
          </h2>
          <p className="text-center text-navyText/70 mb-12 text-lg max-w-3xl mx-auto">
            We're more than just childcare—we're a nurturing community dedicated to your child's growth and happiness
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pastelYellow/30 to-yellow-50 p-8 rounded-3xl shadow-lg border-2 border-pastelYellow hover-lift transition">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-3">Fully Licensed & Regulated</h3>
              <p className="text-navyText/80">
                Licensed childcare home (License #384005044) meeting all state requirements. Your child's safety is our top priority.
              </p>
            </div>

            <div className="bg-gradient-to-br from-skyBlue/30 to-blue-50 p-8 rounded-3xl shadow-lg border-2 border-skyBlue hover-lift transition">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-3">Bilingual Education</h3>
              <p className="text-navyText/80">
                English and Filipino (Tagalog) language immersion helps children develop strong communication skills from an early age.
              </p>
            </div>

            <div className="bg-gradient-to-br from-softTeal/30 to-green-50 p-8 rounded-3xl shadow-lg border-2 border-softTeal hover-lift transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-3">Creative Curriculum</h3>
              <p className="text-navyText/80">
                Art-based learning approach that encourages creativity, critical thinking, and hands-on exploration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-lightCoral/30 to-red-50 p-8 rounded-3xl shadow-lg border-2 border-lightCoral hover-lift transition">
              <div className="text-5xl mb-4">👩🏻‍💼</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-3">Certified Staff</h3>
              <p className="text-navyText/80">
                All staff are CPR and First Aid certified and trained in early childhood development and emergency response.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pastelYellow/30 to-yellow-50 p-8 rounded-3xl shadow-lg border-2 border-pastelYellow hover-lift transition">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-3">Nutritious Meals</h3>
              <p className="text-navyText/80">
                Healthy, balanced meals provided daily, catering to dietary needs and preferences to keep your child energized.
              </p>
            </div>

            <div className="bg-gradient-to-br from-skyBlue/30 to-blue-50 p-8 rounded-3xl shadow-lg border-2 border-skyBlue hover-lift transition">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="text-xl font-heading font-bold text-navyText mb-3">Small Group Setting</h3>
              <p className="text-navyText/80">
                With a capacity of only 8 children, we provide personalized attention and create a home-like, nurturing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="relative py-16 bg-gradient-to-br from-creamWhite to-pastelYellow/30 overflow-hidden">
        {/* Decorative SVGs */}
        <div className="absolute top-10 left-20 w-36 h-36 opacity-55 animate-float">
          <Image src="/images/butterfly.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 right-20 w-40 h-40 opacity-50 animate-float animation-delay-200">
          <Image src="/images/flower.svg" alt="" fill className="object-contain" />
        </div>
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
                src="/images/IMG_0853.jpeg"
                alt="Child on outdoor playground slide"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/IMG_0927.jpeg"
                alt="Teacher supervising children's activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/IMG_0909.jpeg"
                alt="Children playing in indoor playroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/IMG_0894.jpeg"
                alt="Child drawing on art easel"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/IMG_0878.jpeg"
                alt="Children using art easels"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/IMG_0919.jpeg"
                alt="Indoor playroom with colorful mats"
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
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-3">✉️</div>
              <p className="text-lg">maeknox949@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-lg">949 Grove Street</p>
              <p className="text-lg">San Francisco, CA 94117</p>
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
