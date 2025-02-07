// src/components/DestinationCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Destination } from '../types/destination'

export default function DestinationCard({ title, description, imageUrl, slug }: Destination) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-text">{description}</p>
        <Link href={`/destinations/${slug}`}>
          <span className="mt-4 inline-block text-accent hover:underline cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
    </div>
  )
}
