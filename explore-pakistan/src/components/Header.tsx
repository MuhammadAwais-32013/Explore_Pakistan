'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Site Title */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"  // Ensure this image exists in the public/images folder
            alt="Explore Pakistan Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="ml-2 text-2xl font-bold text-accent">
            Explore Pakistan
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <span className="cursor-pointer text-secondary hover:text-secondary-light transition-colors">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/destinations">
                <span className="cursor-pointer text-secondary hover:text-secondary-light transition-colors">
                  Destinations
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="cursor-pointer text-secondary hover:text-secondary-light transition-colors">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer text-secondary hover:text-secondary-light transition-colors">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary">
          <ul className="px-6 pb-4">
            <li className="py-2">
              <Link href="/">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block text-secondary hover:text-secondary-light transition-colors"
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/destinations">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block text-secondary hover:text-secondary-light transition-colors"
                >
                  Destinations
                </span>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block text-secondary hover:text-secondary-light transition-colors"
                >
                  About
                </span>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block text-secondary hover:text-secondary-light transition-colors"
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
