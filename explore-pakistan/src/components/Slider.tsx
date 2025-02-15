'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  '/images/borrith3.jpg',
  '/images/shangrila_fort.jpg',
  '/images/shangrila_1.jpg',
]

export default function Slider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-64 relative">
            <Image src={src} alt={`Slider Image ${index + 1}`} layout="fill" className="object-cover" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`}></div>
        ))}
      </div>
    </div>
  )
}
