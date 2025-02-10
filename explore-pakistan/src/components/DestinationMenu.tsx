'use client';

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
    // Outer container: using "group" enables hover-based visibility for the dropdown panel
    <div className="relative group">
      {/* Dropdown trigger with consistent styling */}
      <span className="cursor-pointer text-white hover:text-white transition-colors">
        Destinations
      </span>
      {/* Dropdown panel with a wider width (500px), gradient background, and smooth transition */}
      <div
        className="
          absolute left-0 mt-2 w-[500px] rounded-lg 
          bg-gradient-to-r from-indigo-500 to-purple-500
          shadow-lg ring-1 ring-black ring-opacity-50
          transition-all duration-300 transform opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100 z-10
        "
      >
        <ul className="grid grid-cols-2 gap-4 p-6">
          {destinations.map((dest) => (
            <li key={dest.title}>
              <Link
                href={dest.href}
                className="
                  block px-4 py-3 text-base text-white 
                  hover:bg-white hover:text-indigo-500 
                  transition-colors rounded-md
                "
              >
                <div className="font-bold">{dest.title}</div>
                <p className="mt-1 text-sm opacity-90">
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
