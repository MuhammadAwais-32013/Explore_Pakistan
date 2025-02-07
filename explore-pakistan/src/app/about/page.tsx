// pages/about.tsx
import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const About: NextPage = () => (
  <div className="min-h-screen flex flex-col bg-secondary text-text">

    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About Explore Pakistan</h1>
      <p>
        Welcome to Explore Pakistan! We aim to provide the best travel experience by guiding you through the rich heritage and breathtaking landscapes of Pakistan.
      </p>
    </main>

  </div>
)

export default About
