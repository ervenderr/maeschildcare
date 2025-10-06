'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/the-importance-of-play-in-child-development.jpg',
    alt: 'Children playing together',
    category: 'playtime'
  },
  {
    src: '/images/AdobeStock_229647792_Resized-1024x752.jpeg',
    alt: 'Learning activities',
    category: 'learning'
  },
  {
    src: '/images/Baby-Child-Care-1-1.jpg',
    alt: 'Infant care',
    category: 'learning'
  },
  {
    src: '/images/50b2a597-79f8-4206-907c-0d895c51c242.jpg',
    alt: 'Children activities',
    category: 'playtime'
  },
  {
    src: '/images/Childcare-vs-Kindergarten-Making-the-Right-Choice-for-your-Kids-1.jpg',
    alt: 'Kindergarten activities',
    category: 'learning'
  },
  {
    src: '/images/wmremove-transformed.jpeg',
    alt: 'Fun time with friends',
    category: 'events'
  },
  {
    src: '/images/DSC2967-scaled.jpg',
    alt: 'Teacher with children',
    category: 'learning'
  },
  {
    src: '/images/iStock-1069933778.jpg',
    alt: 'Happy children playing',
    category: 'playtime'
  },
  {
    src: '/images/Child-care-checklist-narrow.jpg',
    alt: 'Arts and crafts',
    category: 'arts'
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-skyBlue to-softTeal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-4 animate-scaleIn">
            Our Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-scaleIn">
            A joyful look into our daily activities, celebrations, and learning experiences
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-creamWhite sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-heading font-semibold transition ${
                selectedCategory === 'all'
                  ? 'bg-lightCoral text-white shadow-lg'
                  : 'bg-white text-navyText hover:bg-gray-100'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setSelectedCategory('playtime')}
              className={`px-6 py-3 rounded-full font-heading font-semibold transition ${
                selectedCategory === 'playtime'
                  ? 'bg-softTeal text-white shadow-lg'
                  : 'bg-white text-navyText hover:bg-gray-100'
              }`}
            >
              Playtime & Activities
            </button>
            <button
              onClick={() => setSelectedCategory('learning')}
              className={`px-6 py-3 rounded-full font-heading font-semibold transition ${
                selectedCategory === 'learning'
                  ? 'bg-skyBlue text-white shadow-lg'
                  : 'bg-white text-navyText hover:bg-gray-100'
              }`}
            >
              Learning Moments
            </button>
            <button
              onClick={() => setSelectedCategory('arts')}
              className={`px-6 py-3 rounded-full font-heading font-semibold transition ${
                selectedCategory === 'arts'
                  ? 'bg-pastelYellow text-navyText shadow-lg'
                  : 'bg-white text-navyText hover:bg-gray-100'
              }`}
            >
              Arts & Crafts
            </button>
            <button
              onClick={() => setSelectedCategory('events')}
              className={`px-6 py-3 rounded-full font-heading font-semibold transition ${
                selectedCategory === 'events'
                  ? 'bg-lightCoral text-white shadow-lg'
                  : 'bg-white text-navyText hover:bg-gray-100'
              }`}
            >
              Events & Celebrations
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-heading font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-navyText/60">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-creamWhite to-pastelYellow/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-navyText mb-6">
            Want to See <span className="text-lightCoral">More?</span>
          </h2>
          <p className="text-xl text-navyText/80 mb-8">
            Schedule a visit to see our facilities and meet our wonderful staff in person!
          </p>
          <a
            href="/contact"
            className="inline-block bg-lightCoral text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  )
}
