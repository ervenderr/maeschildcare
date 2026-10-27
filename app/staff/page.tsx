import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Staff - Mae's Childcare",
  description:
    "Meet the loving and dedicated caregivers at Mae's Childcare who make learning fun and nurturing.",
};

// Miss Yeng (Toddler Care Specialist) is intentionally not listed; see git history for her copy.
const STAFF = [
  {
    name: "Ms. Mae",
    role: "Owner / Head Caregiver",
    badge: "bg-goldenYellow",
    photo: "/images/IMG_0878.jpeg",
    alt: "Ms. Mae - Owner and Head Caregiver",
    priority: true,
    bio: [
      <>
        Ms. Mae is an Early Childhood Education graduate with over{" "}
        <strong>10+ years of experience</strong> working with young children.
        Her passion for nurturing young minds through play and discovery led her
        to establish Mae&apos;s Childcare.
      </>,
      <>
        Ms. Mae believes in creating a warm, family-like environment where every
        child feels valued and loved. Her holistic approach to development
        ensures that children not only learn academic skills but also grow
        emotionally and socially.
      </>,
    ],
    specialties: [
      "Early Childhood Development",
      "Play-Based Learning",
      "Parent Partnership & Communication",
    ],
  },
  {
    name: "Miss Sandara",
    role: "Preschool Caregiver",
    badge: "bg-brightTeal",
    photo: "/images/IMG_0927.jpeg",
    alt: "Miss Sandara - Preschool Caregiver",
    priority: false,
    bio: [
      <>
        Miss Sandara is an expert in creative arts and music education. With her
        vibrant energy and artistic flair, she brings joy and creativity to the
        playroom every single day.
      </>,
      <>
        She loves helping children express themselves through drawing, painting,
        and singing. The playroom is always filled with colorful artwork and the
        sound of happy children making music together.
      </>,
    ],
    specialties: ["Arts & Crafts", "Music & Movement", "Creative Expression"],
  },
];

const APPROACH = [
  {
    title: "Listening & Understanding",
    body: "We take time to truly understand each child's unique personality, interests, and needs.",
  },
  {
    title: "Individualized Care",
    body: "Our low child-to-caregiver ratios ensure every child receives personalized attention.",
  },
  {
    title: "Continuous Growth",
    body: "Our staff regularly participates in professional development and training programs.",
  },
];

const WRAP = "max-w-7xl mx-auto px-5 sm:px-8";
const H2 = "text-4xl sm:text-5xl lg:text-6xl font-semibold";

export default function Staff() {
  return (
    <div>
      {/* Intro */}
      <section className={`${WRAP} pt-14 sm:pt-20 pb-16 lg:pb-20`}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-20 items-end">
          <h1
            className="rise text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-[-0.035em]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Meet <span className="text-deepNavy">Our Team</span>
          </h1>
          <div
            className="rise space-y-5 text-lg text-ink/80"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <p className="text-xl text-ink">
              The loving and dedicated caregivers who make Mae&apos;s Childcare
              special
            </p>
            <p>
              Our staff members are carefully selected for their experience,
              passion, and dedication to early childhood education. Each
              caregiver brings unique skills and a warm heart to create a
              nurturing environment where children thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Staff members */}
      <section className="bg-white/60 rule-top rule-bottom">
        <div className={`${WRAP} py-16 lg:py-20 space-y-16 lg:space-y-24`}>
          {STAFF.map((s, i) => (
            <article
              key={s.name}
              className="reveal grid md:grid-cols-2 gap-10 lg:gap-20 items-center"
            >
              <div
                className={`photo rounded-3xl relative aspect-[4/5] w-full max-w-lg ${
                  i % 2 ? "md:order-2 md:justify-self-end" : ""
                }`}
              >
                <Image
                  src={s.photo}
                  alt={s.alt}
                  fill
                  priority={s.priority}
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p
                  className={`inline-block rounded-full px-4 py-2 font-heading font-semibold text-ink ${s.badge}`}
                >
                  {s.role}
                </p>
                <h2 className={`mt-5 ${H2}`}>{s.name}</h2>
                <div className="mt-6 space-y-5 max-w-[34rem] text-lg text-ink/80">
                  {s.bio.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>

                <h3 className="mt-8 text-xl font-semibold">Specialties</h3>
                <ul className="mt-3 max-w-[34rem] rule-top">
                  {s.specialties.map((sp) => (
                    <li key={sp} className="rule-bottom py-3 text-ink/80">
                      {sp}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Teaching approach */}
      <section className={`${WRAP} py-16 lg:py-20`}>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          <h2 className={`reveal ${H2} lg:sticky lg:top-32 self-start`}>
            Our <span className="text-deepNavy">Teaching Approach</span>
          </h2>
          <ul className="rule-top">
            {APPROACH.map((a) => (
              <li
                key={a.title}
                className="reveal rule-bottom py-7 grid sm:grid-cols-[0.8fr_1.2fr] gap-2 sm:gap-8"
              >
                <h3 className="text-2xl font-semibold">{a.title}</h3>
                <p className="text-ink/80">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA: the page's one full-strength colour field */}
      <section className="bg-ink text-creamWhite">
        <div className={`${WRAP} py-20 lg:py-24`}>
          <div className="reveal max-w-3xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.98]">
              Come <span className="text-goldenYellow">Meet Our Team!</span>
            </h2>
            <p className="mt-6 text-xl text-creamWhite/80 max-w-lg">
              Schedule a visit to meet our wonderful staff and see our caring
              environment in action.
            </p>
            <Link href="/contact" className="btn btn-orange mt-9">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
