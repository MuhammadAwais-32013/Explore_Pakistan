// src/app/layout.tsx
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Explore Pakistan',
  description: 'Discover popular tourist destinations in Pakistan',
  keywords: 'travel, pakistan, tourism, destinations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral text-text">
        <Header />
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
