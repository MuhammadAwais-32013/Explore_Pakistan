import React from 'react';
import Link from 'next/link';

const destinations: { title: string; href: string; description: string }[] = [
  {
    title: "Stardu Valley",
    href: "/destinations/stardu-valley",
    description:
      "Stardu Valley is known for its stunning landscapes and adventure opportunities in northern Pakistan.",
  },
  {
    title: "Shangrila",
    href: "/destinations/shangrilla",
    description:
      "Often called 'Heaven on Earth', Shangrila is famed for its breathtaking natural beauty.",
  },
  {
    title: "Lahore",
    href: "/destinations/lahore",
    description:
      "A cultural and historical hub offering rich heritage sites and vibrant street life.",
  },
  {
    title: "Islamabad",
    href: "/destinations/islamabad",
    description:
      "The serene capital city known for its lush greenery and modern architecture.",
  },
  {
    title: "Karachi",
    href: "/destinations/karachi",
    description:
      "Pakistan's largest city with a unique blend of tradition and urban vibrancy.",
  },
  {
    title: "Hunza Valley",
    href: "/destinations/hunza-valley",
    description:
      "Renowned for its majestic mountains and tranquil valleys, perfect for trekking.",
  },
];

export default function DestinationDropdown() {
  return (
    // The outer container uses group hover to control the visibility of the dropdown
    <div className="relative group">
      {/* Dropdown trigger */}
      <span className="cursor-pointer text-secondary hover:text-secondary-light transition-colors">
        Destinations
      </span>
      {/* Dropdown panel with smooth transition and two-column grid layout */}
      <div
        className="
          absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5
          transition-all duration-300 transform opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          z-10
        "
      >
        <ul className="grid grid-cols-2 gap-3 p-4">
          {destinations.map((dest) => (
            <li key={dest.title}>
              <Link
                href={dest.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <div className="font-medium">{dest.title}</div>
                <p className="mt-1 text-xs text-gray-500">
                  {dest.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
