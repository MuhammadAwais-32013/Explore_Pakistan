// app/page.tsx
import Image from 'next/image'
import DestinationCard from '../components/DestinationCard'
import { Destination } from '../types/destination'

export default function Home() {
  const destinations: Destination[] = [
    {
      title: 'Lahore Fort',
      description: 'Discover the rich history and architecture of Lahore Fort.',
      imageUrl: '/images/lahore-fort.jpg',
      slug: 'lahore-fort',
    },
    {
      title: 'Lahore Fort',
      description: 'Discover the rich history and architecture of Lahore Fort.',
      imageUrl: '/images/lahore-fort.jpg',
      slug: 'lahore-fort',
    },
    {
      title: 'Lahore Fort',
      description: 'Discover the rich history and architecture of Lahore Fort.',
      imageUrl: '/images/lahore-fort.jpg',
      slug: 'lahore-fort',
    },
    {
      title: 'Hunza Valley',
      description: 'Experience breathtaking views and natural beauty in Hunza Valley.',
      imageUrl: '/images/hunza-valley.jpg',
      slug: 'hunza-valley',
    },
    {
      title: 'Hunza Valley',
      description: 'Experience breathtaking views and natural beauty in Hunza Valley.',
      imageUrl: '/images/hunza-valley.jpg',
      slug: 'hunza-valley',
    },
    {
      title: 'Hunza Valley',
      description: 'Experience breathtaking views and natural beauty in Hunza Valley.',
      imageUrl: '/images/hunza-valley.jpg',
      slug: 'hunza-valley',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="mb-12 relative h-96 rounded-lg overflow-hidden">
        <Image src="/images/hero.jpg" alt="Explore Pakistan" fill className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary">
          <h1 className="text-4xl font-bold mb-4">Discover Pakistan</h1>
          <p className="text-xl">Explore the hidden gems and popular destinations.</p>
        </div>
      </section>
      {/* Featured Destinations */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} {...dest} />
          ))}
        </div>
      </section>
    </>
  )
}
