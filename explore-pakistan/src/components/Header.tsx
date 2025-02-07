// src/components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-primary text-secondary shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Image
            src="/images/logo.png" 
            alt="Explore Pakistan Logo" 
            width={50} 
            height={50}
            className="rounded-full"
          />
          <span className="ml-2 text-2xl font-bold">Explore Pakistan</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
