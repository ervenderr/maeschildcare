import Image from 'next/image'
import Link from 'next/link'

const FACTS = [
  'Licensed #384005044',
  'Capacity of 8 children',
  'English & Filipino',
  'Mon–Fri, 8:30 AM–5:30 PM',
]

const PROGRAMS = [
  {
    name: 'Infant Care',
    age: '4 months – 2 years',
    body: 'Gentle care and early stimulation for your precious little one in a nurturing environment with individualized attention.',
    tone: 'bg-goldenYellow',
    offset: 'lg:mt-0',
  },
  {
    name: 'Toddler Program',
    age: '2 – 4 years',
    body: 'Play-based learning with guided activities and motor skill development through exploration and discovery.',
    tone: 'bg-brightTeal',
    offset: 'lg:mt-8',
  },
  {
    name: 'Preschool',
    age: '4 – 5 years',
    body: 'Preparing your child for kindergarten with structured lessons, social skills, and school readiness activities.',
    tone: 'bg-skyBlue',
    offset: 'lg:mt-16',
  },
]

const REASONS = [
  {
    title: 'Fully licensed & regulated',
    body: "Licensed childcare home (License #384005044) meeting all state requirements. Your child's safety is our top priority.",
  },
  {
    title: 'Bilingual education',
    body: 'English and Filipino (Tagalog) language immersion helps children develop strong communication skills from an early age.',
  },
  {
    title: 'Creative Curriculum',
    body: 'Art-based learning approach that encourages creativity, critical thinking, and hands-on exploration.',
  },
  {
    title: 'Certified staff',
    body: 'All staff are CPR and First Aid certified and trained in early childhood development and emergency response.',
  },
  {
    title: 'Nutritious meals',
    body: 'Healthy, balanced meals provided daily, catering to dietary needs and preferences to keep your child energized.',
  },
  {
    title: 'Small group setting',
    body: 'With a capacity of only 8 children, we provide personalized attention and create a home-like, nurturing environment.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1
              className="rise font-bold text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[1] tracking-[-0.035em]"
              style={{ '--i': 0 } as React.CSSProperties}
            >
              Where Learning and Care{' '}
              <span className="text-deepNavy">Grow Together</span>
            </h1>
            <p
              className="rise mt-7 max-w-[34rem] text-xl leading-relaxed text-ink/80"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              A licensed childcare home in San Francisco providing bilingual education, art-based learning, and nurturing care for children ages 4 months to 5 years.
            </p>
            <div
              className="rise mt-9 flex flex-wrap items-center gap-4"
              style={{ '--i': 3 } as React.CSSProperties}
            >
              <Link href="/contact" className="btn btn-orange">
                Book a tour
              </Link>
              <Link href="/programs" className="btn btn-ghost">
                See programs
              </Link>
            </div>
            <p
              className="rise mt-5 text-sm font-medium text-ink/70"
              style={{ '--i': 4 } as React.CSSProperties}
            >
              Licensed #384005044 · 8 children · Now enrolling
            </p>
          </div>

          <div className="relative mx-auto lg:mx-0 lg:justify-self-end w-full max-w-sm sm:max-w-md">
            <div className="arch arch-open relative aspect-[4/5] shadow-[0_30px_60px_-30px_rgb(10_37_64/0.5)]">
              <Image
                src="/images/IMG_0894.jpeg"
                alt="A child smiling beside an art easel at Mae's Childcare"
                fill
                priority
                quality={85}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <ul
          className="rise mt-12 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 rule-top"
          style={{ '--i': 6 } as React.CSSProperties}
        >
          {FACTS.map((fact) => (
            <li
              key={fact}
              className="py-4 pr-4 text-sm sm:text-base font-medium lg:border-r lg:border-[var(--rule)] lg:last:border-r-0 lg:pl-6 lg:first:pl-0"
            >
              {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* Welcome */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div className="reveal photo rounded-3xl relative aspect-[4/5] max-w-lg w-full">
            <Image
              src="/images/IMG_0853.jpeg"
              alt="Children and a caregiver in the colorful playroom"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Welcome to <span className="text-deepNavy">Mae&apos;s Childcare</span>
            </h2>
            <div className="mt-8 space-y-5 max-w-[34rem] text-lg text-ink/80">
              <p>
                At Mae&apos;s Childcare, we provide a nurturing licensed childcare home where children explore, learn, and grow through our Creative Curriculum. Our art-based learning approach encourages creativity and hands-on discovery.
              </p>
              <p>
                We offer bilingual education in English and Filipino, helping children build strong language skills from an early age. With CPR and First Aid certified staff, nutritious daily meals, and a mixed-age environment that promotes cooperation and empathy, we create a joyful, safe space for up to 8 children in San Francisco.
              </p>
            </div>
            <Link
              href="/about"
              className="link-draw mt-8 inline-block font-heading text-lg font-semibold"
            >
              Learn about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Programs: the colour cards */}
      <section className="bg-white/60 rule-top rule-bottom">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="reveal grid lg:grid-cols-2 gap-6 lg:gap-16 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Our programs</h2>
            <p className="text-lg text-ink/80 max-w-md lg:justify-self-end">
              Age-appropriate programs designed to support every stage of development.
            </p>
          </div>

          <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-5 lg:gap-6 items-start pb-0 lg:pb-0">
            {PROGRAMS.map((p) => (
              <article key={p.name} className={`reveal chip ${p.tone} ${p.offset}`}>
                <p className="font-heading text-sm font-semibold uppercase tracking-widest">{p.age}</p>
                <h3 className="mt-auto pt-10 text-4xl font-semibold">{p.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/85">{p.body}</p>
                <Link
                  href="/programs"
                  className="link-draw mt-6 self-start font-heading font-semibold"
                >
                  Program details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          <div className="reveal lg:sticky lg:top-32 self-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Why choose Mae&apos;s Childcare?
            </h2>
            <p className="mt-6 text-lg text-ink/80 max-w-md">
              We&apos;re more than just childcare — we&apos;re a nurturing community dedicated to your child&apos;s growth and happiness.
            </p>
          </div>

          <ul className="rule-top">
            {REASONS.map((r) => (
              <li
                key={r.title}
                className="reveal rule-bottom py-7 grid sm:grid-cols-[0.8fr_1.2fr] gap-2 sm:gap-8"
              >
                <h3 className="text-2xl font-semibold">{r.title}</h3>
                <p className="text-ink/80">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 lg:pb-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Happy moments</h2>
          <Link href="/gallery" className="link-draw font-heading text-lg font-semibold">
            View full gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 auto-rows-[11rem] sm:auto-rows-[14rem] gap-3 sm:gap-4">
          <div className="photo reveal rounded-3xl relative col-span-2 lg:col-span-7 row-span-2">
            <Image
              src="/images/IMG_0909.jpeg"
              alt="Children at easels in the indoor playroom"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="photo reveal rounded-3xl relative lg:col-span-5 row-span-2">
            <Image
              src="/images/IMG_0927.jpeg"
              alt="Child climbing a ladder on an outdoor playground"
              fill
              sizes="(min-width: 1024px) 40vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="photo reveal rounded-3xl relative lg:col-span-4 row-span-2 lg:row-span-1">
            <Image
              src="/images/IMG_0878.jpeg"
              alt="Children using art easels"
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="photo reveal rounded-3xl relative lg:col-span-4 row-span-2 lg:row-span-1">
            <Image
              src="/images/IMG_0919.jpeg"
              alt="Indoor playroom with colorful mats"
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="photo reveal rounded-3xl relative hidden lg:block lg:col-span-4">
            <Image
              src="/images/IMG_0856.jpeg"
              alt="Activities at Mae's Childcare"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tour CTA: the page's one full-strength colour field */}
      <section className="bg-ink text-creamWhite">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-end">
          <div className="reveal">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.98]">
              Schedule a visit or enroll today
            </h2>
            <p className="mt-6 text-xl text-creamWhite/80 max-w-lg">
              We&apos;d love to show you around and answer all your questions.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="btn btn-orange">
                Book a tour
              </Link>
              <Link href="/enrollment" className="link-draw font-heading text-lg font-semibold">
                Start enrollment →
              </Link>
            </div>
          </div>

          <dl className="reveal border-t border-creamWhite/20">
            <div className="py-5 border-b border-creamWhite/20 grid grid-cols-[6rem_1fr] gap-4">
              <dt className="text-creamWhite/60 text-sm uppercase tracking-widest pt-1">Call</dt>
              <dd><a href="tel:+14158759847" className="inline-block py-2 hover:text-goldenYellow transition-colors">415-875-9847</a></dd>
            </div>
            <div className="py-5 border-b border-creamWhite/20 grid grid-cols-[6rem_1fr] gap-4">
              <dt className="text-creamWhite/60 text-sm uppercase tracking-widest pt-1">Email</dt>
              <dd><a href="mailto:maeknox949@gmail.com" className="inline-block py-2 hover:text-goldenYellow transition-colors break-all">maeknox949@gmail.com</a></dd>
            </div>
            <div className="py-5 border-b border-creamWhite/20 grid grid-cols-[6rem_1fr] gap-4">
              <dt className="text-creamWhite/60 text-sm uppercase tracking-widest pt-1">Visit</dt>
              <dd>949 Grove Street<br />San Francisco, CA 94117</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
