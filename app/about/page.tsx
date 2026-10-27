import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Mae's Childcare",
  description:
    "Learn about Mae's Childcare mission, philosophy, and our story of providing quality bilingual childcare in San Francisco, CA.",
};

const PHILOSOPHY = [
  {
    title: "Child-Centered Learning",
    body: "We recognize that every child is unique and learns at their own pace. Our programs are designed to meet individual needs and interests, fostering natural curiosity and creativity.",
  },
  {
    title: "Social & Emotional Growth",
    body: "We prioritize emotional intelligence and social skills through positive interactions, conflict resolution, and building strong relationships with peers and caregivers.",
  },
  {
    title: "Safe & Inclusive Community",
    body: "We create a welcoming environment where all families feel valued and supported. Safety, respect, and kindness are the foundation of our community.",
  },
];

const CURRICULUM = [
  {
    title: "Art-Based Learning",
    body: "Our program introduces children to letters, numbers, shapes, and colors through hands-on art and playful learning. We encourage creativity through art activities that inspire imagination and self-expression.",
    tone: "bg-goldenYellow",
    offset: "",
  },
  {
    title: "Bilingual Immersion",
    body: "We encourage bilingual learning in Filipino (Tagalog) and English, helping children build early language skills that will benefit them throughout their lives. Language immersion builds strong communication abilities.",
    tone: "bg-skyBlue",
    offset: "md:mt-12",
  },
  {
    title: "Age-Appropriate Play",
    body: "Infants and toddlers explore with age-appropriate toys that inspire curiosity and creativity. Our mixed-age environment promotes cooperation, empathy, and peer learning among children.",
    tone: "bg-brightTeal",
    offset: "",
  },
  {
    title: "Daily Enrichment",
    body: "Each day is filled with fun and enriching activities—from alphabet and number time to arts and crafts, reading, music, movement, and playtime—all designed to make learning joyful!",
    tone: "bg-white ring-1 ring-ink/15",
    offset: "md:mt-12",
  },
];

const HIGHLIGHTS = [
  ["Art-Based Learning", "Encouraging creativity through hands-on art activities"],
  ["Creative Curriculum", "A well-rounded approach supporting every child's development"],
  ["Language Immersion", "Building communication skills in English and Filipino"],
  ["Movement, Music & Academics", "Blending play, rhythm, and learning"],
  ["Mixed-Age Environment", "Promoting cooperation and peer learning"],
  ["Nutritious Meals", "Daily healthy meals provided"],
];

const VALUES = [
  ["Love", "Every interaction is rooted in care and compassion"],
  ["Excellence", "We strive for the highest quality in all we do"],
  ["Creativity", "We encourage imagination and innovative thinking"],
  ["Joy", "Learning should be fun and filled with laughter"],
];

const WRAP = "max-w-7xl mx-auto px-5 sm:px-8";
const H2 = "text-4xl sm:text-5xl lg:text-6xl font-semibold";

export default function About() {
  return (
    <div>
      {/* Intro */}
      <section className={`${WRAP} pt-14 sm:pt-20 pb-16 lg:pb-20`}>
        <h1
          className="rise max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-[-0.035em]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          About <span className="text-deepNavy">Mae&apos;s Childcare</span>
        </h1>
        <p
          className="rise mt-7 max-w-xl text-xl leading-relaxed text-ink/80"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          A nurturing environment where children learn, play, and grow at their
          own pace
        </p>
      </section>

      {/* Mission */}
      <section className="rule-top">
        <div className={`${WRAP} py-16 lg:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20`}>
          <h2 className={`reveal ${H2}`}>
            Our <span className="text-deepNavy">Mission</span>
          </h2>
          <p className="reveal font-heading text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-tight text-ink">
            At Mae&apos;s Childcare, our mission is to provide a nurturing
            environment where children can learn, play, and grow at their own
            pace. We believe every child deserves personalized care and joyful
            learning experiences.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white/60 rule-top rule-bottom">
        <div className={`${WRAP} py-16 lg:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20`}>
          <h2 className={`reveal ${H2} lg:sticky lg:top-32 self-start`}>
            Our <span className="text-deepNavy">Philosophy</span>
          </h2>
          <ul className="rule-top">
            {PHILOSOPHY.map((p) => (
              <li
                key={p.title}
                className="reveal rule-bottom py-7 grid sm:grid-cols-[0.8fr_1.2fr] gap-2 sm:gap-8"
              >
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="text-ink/80">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Story */}
      <section className={`${WRAP} py-16 lg:py-20`}>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="reveal photo rounded-3xl relative aspect-[4/5] max-w-lg w-full">
            <Image
              src="/images/IMG_0878.jpeg"
              alt="Mae's Childcare indoor playroom facility"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="reveal">
            <h2 className={H2}>
              Our <span className="text-deepNavy">Story</span>
            </h2>
            <div className="mt-8 space-y-5 max-w-[36rem] text-lg text-ink/80">
              <p>
                Mae&apos;s Childcare was founded by <strong>Ms. Mae</strong>, an
                experienced early childhood educator who believes in holistic
                development. With a passion for nurturing young minds through
                play and discovery, Mae has dedicated over a decade to creating
                meaningful learning experiences for children.
              </p>
              <p>
                What started as a small home-based center has grown into a
                trusted learning space for families in our community. Our
                commitment to quality care, personalized attention, and creating
                a home-away-from-home environment has made Mae&apos;s Childcare a
                beloved part of many families&apos; lives.
              </p>
              <p>
                Today, we continue to uphold the values that Mae established
                from the beginning: love, respect, learning, and joy. Every
                child who walks through our doors becomes part of our extended
                family.
              </p>
            </div>

            <figure className="mt-10 max-w-[36rem] rule-top pt-6">
              <blockquote className="font-heading text-2xl font-semibold leading-snug text-ink">
                &ldquo;Every child is a gift, and it&apos;s our privilege to help
                them discover their unique potential.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-ink/70">
                — Ms. Mae, Founder
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white/60 rule-top rule-bottom">
        <div className={`${WRAP} py-16 lg:py-20`}>
          <div className="reveal grid lg:grid-cols-2 gap-6 lg:gap-16 items-end">
            <h2 className={H2}>
              Our <span className="text-deepNavy">Curriculum</span>
            </h2>
            <p className="text-lg text-ink/80 max-w-md lg:justify-self-end">
              We use a Creative Curriculum approach that makes learning joyful
              and meaningful for every child
            </p>
          </div>

          <div className="mt-12 lg:mt-16 grid md:grid-cols-2 gap-5 lg:gap-6 items-start">
            {CURRICULUM.map((c) => (
              <article
                key={c.title}
                className={`reveal chip min-h-72! ${c.tone} ${c.offset}`}
              >
                <h3 className="mt-auto text-3xl font-semibold">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/85">{c.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 lg:mt-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20">
            <h3 className="reveal text-3xl sm:text-4xl font-semibold">
              Program Highlights
            </h3>
            <ul className="reveal grid md:grid-cols-2 gap-x-10 rule-top">
              {HIGHLIGHTS.map(([title, body]) => (
                <li key={title} className="rule-bottom py-5 text-ink/80">
                  <strong className="font-heading text-lg font-semibold text-ink">
                    {title}
                  </strong>{" "}
                  – {body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values: the page's one full-strength colour field */}
      <section className="bg-ink text-creamWhite">
        <div className={`${WRAP} py-16 lg:py-20`}>
          <h2 className={`reveal ${H2}`}>
            Our Core <span className="text-goldenYellow">Values</span>
          </h2>
          <ul className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-creamWhite/20">
            {VALUES.map(([title, body]) => (
              <li
                key={title}
                className="reveal py-6 lg:py-8 lg:pr-8 border-b border-creamWhite/20 lg:border-b-0"
              >
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-creamWhite/80">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
