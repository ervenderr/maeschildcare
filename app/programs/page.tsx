import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs - Mae's Childcare",
  description:
    "Explore our age-appropriate childcare programs including infant care, toddler program, preschool, and after school care.",
};

const PROGRAMS = [
  {
    name: "Infant Care",
    age: "4 months – 2 years",
    body: "Our infant care program provides gentle, attentive care for your precious little ones. We focus on creating a warm, secure environment where babies can explore and develop at their own pace.",
    offers: [
      "Sensory play activities to stimulate development",
      "Individualized feeding and napping schedules",
      "Focus on emotional bonding and comfort",
      "Daily reports on feeding, diapering, and activities",
    ],
    tone: "bg-goldenYellow",
    photo: "/images/IMG_0927.jpeg",
    alt: "Children in playroom learning environment",
  },
  {
    name: "Toddler Program",
    age: "2–4 years",
    body: "Our toddler program embraces the natural curiosity and energy of young children. Through play-based learning and guided activities, we help toddlers develop essential skills while having fun.",
    offers: [
      "Daily creative activities: art, singing, and dancing",
      "Outdoor play and gross motor skill development",
      "Communication and language skill building",
      "Social interaction and friendship building",
    ],
    tone: "bg-brightTeal",
    photo: "/images/IMG_0921.jpeg",
    alt: "Toddlers playing with colorful foam blocks",
  },
  {
    name: "Preschool Program",
    age: "4–5 years",
    body: "Our preschool program prepares children for formal schooling through structured, engaging lessons. We focus on early literacy, numeracy, and social skills in a fun, supportive environment.",
    offers: [
      "Early literacy and phonics instruction",
      "Basic math concepts and number recognition",
      "Science exploration and discovery activities",
      "Social lessons and school readiness skills",
    ],
    tone: "bg-skyBlue",
    photo: "/images/IMG_0894.jpeg",
    alt: "Preschooler drawing and creating art",
  },
];

const H2 = "text-4xl sm:text-5xl lg:text-6xl font-semibold";

export default function Programs() {
  return (
    <div>
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <h1
            className="rise text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Our <span className="text-deepNavy">programs</span>
          </h1>
          <div
            className="rise max-w-xl lg:justify-self-end"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <p className="text-xl text-ink/80 leading-relaxed">
              Age-appropriate programs designed to support every stage of
              development.
            </p>
            <p className="mt-5 text-lg text-ink/80 leading-relaxed">
              Mae&apos;s Childcare offers carefully designed programs that cater
              to each developmental stage of your child&apos;s early years. From
              gentle infant care to structured preschool learning, we ensure
              every child receives the attention and stimulation they need to
              thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="rule-top">
        {PROGRAMS.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.name}
              className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div
                className={`reveal photo rounded-3xl relative aspect-[4/3] w-full ${
                  flip ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={p.photo}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div
                className={`reveal rounded-3xl p-7 sm:p-10 ${p.tone} ${
                  flip ? "lg:order-1" : ""
                }`}
              >
                <p className="font-heading text-sm font-semibold uppercase tracking-widest">
                  {p.age}
                </p>
                <h2 className={`${H2} mt-4`}>{p.name}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/90">
                  {p.body}
                </p>
                <h3 className="mt-8 text-xl font-semibold">What we offer</h3>
                <ul className="mt-3 border-t border-ink/25">
                  {p.offers.map((o) => (
                    <li key={o} className="py-3 border-b border-ink/25">
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      {/* Custom arrangements */}
      <section className="bg-ink text-creamWhite">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-end">
          <h2 className={`reveal ${H2}`}>Need a custom arrangement?</h2>
          <div className="reveal">
            <p className="text-xl text-creamWhite/80">
              We understand that every family has unique needs. For special
              arrangements or part-time enrollment options, please contact us to
              discuss how we can support your family.
            </p>
            <Link href="/contact" className="btn btn-orange mt-8">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
