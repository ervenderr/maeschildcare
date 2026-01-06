import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Staff - Mae's Childcare",
  description:
    "Meet the loving and dedicated caregivers at Mae's Childcare who make learning fun and nurturing.",
};

export default function Staff() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-softTeal to-pastelYellow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-4 animate-scaleIn">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-scaleIn">
            The loving and dedicated caregivers who make Mae's Childcare special
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-creamWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-navyText/80 leading-relaxed">
            Our staff members are carefully selected for their experience,
            passion, and dedication to early childhood education. Each caregiver
            brings unique skills and a warm heart to create a nurturing
            environment where children thrive.
          </p>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Ms. Mae */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 min-h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/teacher1.png"
                  alt="Ms. Mae - Owner and Head Caregiver"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="inline-block bg-lightCoral text-white px-4 py-2 rounded-full font-semibold mb-4">
                  Owner / Head Caregiver
                </div>
                <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                  Ms. Mae
                </h2>
                <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                  Ms. Mae is an Early Childhood Education graduate with over{" "}
                  <strong>10+ years of experience</strong> working with young
                  children. Her passion for nurturing young minds through play
                  and discovery led her to establish Mae's Childcare.
                </p>
                <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                  Ms. Mae believes in creating a warm, family-like environment
                  where every child feels valued and loved. Her holistic
                  approach to development ensures that children not only learn
                  academic skills but also grow emotionally and socially.
                </p>

                <div className="bg-gradient-to-br from-pastelYellow to-yellow-100 p-6 rounded-2xl">
                  <h3 className="font-heading font-bold text-navyText mb-3">
                    Specialties:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-lightCoral mr-2">✦</span>
                      <span className="text-navyText/80">
                        Early Childhood Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lightCoral mr-2">✦</span>
                      <span className="text-navyText/80">
                        Play-Based Learning
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lightCoral mr-2">✦</span>
                      <span className="text-navyText/80">
                        Parent Partnership & Communication
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Miss Sandara */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-softTeal text-white px-4 py-2 rounded-full font-semibold mb-4">
                  Preschool Caregiver
                </div>
                <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                  Miss Sandara
                </h2>
                <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                  Miss Sandara is an expert in creative arts and music
                  education. With her vibrant energy and artistic flair, she
                  brings joy and creativity to the playroom every single day.
                </p>
                <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                  She loves helping children express themselves through drawing,
                  painting, and singing. The playroom is always filled with
                  colorful artwork and the sound of happy children making music
                  together.
                </p>

                <div className="bg-gradient-to-br from-skyBlue to-blue-100 p-6 rounded-2xl">
                  <h3 className="font-heading font-bold text-navyText mb-3">
                    Specialties:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-softTeal mr-2">✦</span>
                      <span className="text-navyText/80">Arts & Crafts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-softTeal mr-2">✦</span>
                      <span className="text-navyText/80">Music & Movement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-softTeal mr-2">✦</span>
                      <span className="text-navyText/80">
                        Creative Expression
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative h-96 min-h-full rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
                <Image
                  src="/images/teacher2.png"
                  alt="Miss Sandara - Preschool Caregiver"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Miss Yeng */}
            {/* <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 min-h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/teacher3.png"
                  alt="Miss Yeng - Toddler Care Specialist"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="inline-block bg-pastelYellow text-navyText px-4 py-2 rounded-full font-semibold mb-4">
                  Toddler Care Specialist
                </div>
                <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
                  Miss Yeng
                </h2>
                <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                  Miss Yeng is gentle, patient, and full of energy—the perfect combination for working with toddlers! She has a special gift for connecting with young children and making them feel safe and confident.
                </p>
                <p className="text-lg text-navyText/80 mb-6 leading-relaxed">
                  Her calm demeanor and encouraging approach help toddlers build confidence and independence as they explore the world around them. She celebrates every small victory and milestone with genuine joy.
                </p>

                <div className="bg-gradient-to-br from-softTeal to-green-100 p-6 rounded-2xl">
                  <h3 className="font-heading font-bold text-navyText mb-3">Specialties:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-lightCoral mr-2">✦</span>
                      <span className="text-navyText/80">Toddler Development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lightCoral mr-2">✦</span>
                      <span className="text-navyText/80">Motor Skills & Coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lightCoral mr-2">✦</span>
                      <span className="text-navyText/80">Building Independence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gradient-to-br from-creamWhite to-pastelYellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-navyText text-center mb-12">
            Our <span className="text-lightCoral">Teaching Approach</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">👂</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">
                Listening & Understanding
              </h3>
              <p className="text-navyText/80">
                We take time to truly understand each child's unique
                personality, interests, and needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">
                Individualized Care
              </h3>
              <p className="text-navyText/80">
                Our low child-to-caregiver ratios ensure every child receives
                personalized attention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-heading font-bold text-navyText mb-4">
                Continuous Growth
              </h3>
              <p className="text-navyText/80">
                Our staff regularly participates in professional development and
                training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navyText text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Come <span className="text-pastelYellow">Meet Our Team!</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a visit to meet our wonderful staff and see our caring
            environment in action.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pastelYellow text-navyText px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  );
}
