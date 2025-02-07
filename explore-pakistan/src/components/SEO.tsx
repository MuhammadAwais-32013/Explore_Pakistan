// components/SEO.tsx
import Head from 'next/head'

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'travel, pakistan, tourism, destinations',
  url = 'https://explorepakistan.com',
  image = '/images/hero.jpg'
}) => {
  return (
    <Head>
      <title>{title} | Explore Pakistan</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

export default SEO
