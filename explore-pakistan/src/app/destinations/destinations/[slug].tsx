// app/destinations/[slug]/page.tsx
import { Destination } from '../../../types/destination'

// Sample static data for demonstration purposes.
const sampleDestinations: Destination[] = [
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
];

// Pre-generate routes for all destinations.
export async function generateStaticParams() {
  return sampleDestinations.map((dest) => ({
    slug: dest.slug,
  }));
}

interface PageProps {
  params: { slug: string }
}

export default function DestinationDetail({ params }: PageProps) {
  const { slug } = params;
  const destination = sampleDestinations.find((dest) => dest.slug === slug);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{destination.title}</h1>
      <p>{destination.description}</p>
    </div>
  );
}
