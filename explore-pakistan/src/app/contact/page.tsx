// pages/contact.tsx
import type { NextPage } from 'next'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'

const Contact: NextPage = () => (
  <div className="min-h-screen flex flex-col bg-secondary text-text">
  
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>Please reach out to us at <a href="mailto:contact@explorepakistan.com" className="text-accent underline">contact@explorepakistan.com</a>.</p>
    </main>
  
  </div>
)

export default Contact
