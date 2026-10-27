'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface GalleryImage {
  src: string
  alt: string
  category: string
}

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'playtime', label: 'Playtime & Activities' },
  { id: 'learning', label: 'Learning Moments' },
  { id: 'arts', label: 'Arts & Crafts' },
  { id: 'events', label: 'Events & Celebrations' },
]

const galleryImages: GalleryImage[] = [
  { src: '/images/IMG_0919.jpeg', alt: 'Children drawing on art easels', category: 'playtime' },
  { src: '/images/IMG_0921.jpeg', alt: 'Child enjoying outdoor playground slide', category: 'playtime' },
  { src: '/images/IMG_0927.jpeg', alt: 'Children on outdoor playground climbing equipment', category: 'learning' },
  { src: '/images/IMG_0894.jpeg', alt: 'Child creating artwork on easel', category: 'arts' },
  { src: '/images/IMG_0878.jpeg', alt: 'Indoor playroom with colorful foam mats and toys', category: 'arts' },
  { src: '/images/IMG_0912.jpeg', alt: 'Art activity time with easels and drawing', category: 'arts' },
  { src: '/images/IMG_0853.jpeg', alt: 'Indoor playroom with colorful foam mats and toys', category: 'playtime' },
  { src: '/images/IMG_0856.jpeg', alt: 'Indoor playroom with colorful foam mats and toys', category: 'playtime' },
  { src: '/images/IMG_0909.jpeg', alt: 'Art activity time with easels and drawing', category: 'events' },
]

// Repeating mosaic spans (desktop) so the grid stays asymmetric under any filter.
const SPANS = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5 lg:row-span-2',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-5 lg:row-span-2',
  'lg:col-span-7 lg:row-span-2',
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const open = (image: GalleryImage, el: HTMLElement) => {
    triggerRef.current = el
    setSelectedImage(image)
  }
  const close = () => {
    setSelectedImage(null)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!selectedImage) return
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        triggerRef.current?.focus()
      }
      // Close button is the only focusable control: keep focus inside the dialog.
      if (e.key === 'Tab') {
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [selectedImage])

  return (
    <div>
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-10 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <h1
            className="rise text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1]"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            Our <span className="text-deepNavy">gallery</span>
          </h1>
          <p
            className="rise text-xl text-ink/80 max-w-xl lg:justify-self-end leading-relaxed"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            A joyful look into our daily activities, celebrations, and learning experiences
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter photos by category"
          className="rise mt-10 flex gap-2 overflow-x-auto sm:flex-wrap sm:gap-3 sm:overflow-visible -mx-5 px-5 sm:mx-0 sm:px-0 pb-1"
          style={{ '--i': 3 } as React.CSSProperties}
        >
          {CATEGORIES.map(c => {
            const active = selectedCategory === c.id
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(c.id)}
                className={`btn !min-h-11 !px-4 !py-2 !text-base shrink-0 whitespace-nowrap ${active ? 'btn-ink' : 'btn-ghost'}`}
              >
                {c.label}
              </button>
            )
          })}
        </div>
      </section>

      {/* Mosaic */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 lg:pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 auto-rows-[11rem] sm:auto-rows-[14rem] gap-3 sm:gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Enlarge photo: ${image.alt}`}
              onClick={e => open(image, e.currentTarget)}
              className={`photo reveal rounded-3xl relative cursor-zoom-in ${
                index % 3 === 0 ? 'col-span-2' : ''
              } ${SPANS[index % SPANS.length]}`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="py-12 text-xl text-ink/70" role="status">
            No photos in this category yet.
          </p>
        )}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="btn btn-yellow absolute top-4 right-4 min-h-11"
          >
            Close
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-ink text-creamWhite">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-end">
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Want to see more?
          </h2>
          <div className="reveal">
            <p className="text-xl text-creamWhite/80">
              Schedule a visit to see our facilities and meet our wonderful staff in person!
            </p>
            <Link href="/contact" className="btn btn-orange mt-8">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
