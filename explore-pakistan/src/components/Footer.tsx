// src/components/Footer.tsx
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} Explore Pakistan. All rights reserved.</p>
      </div>
    </footer>
  )
}
