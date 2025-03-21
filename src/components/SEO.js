import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Prince AI Automation | Custom AI Solutions for Business', 
  description = 'Streamline your business operations with custom AI automation solutions by Prince AI Automation. Save time, reduce costs, and scale efficiently.',
  image = '/images/seo-default.jpg',
  url = '/',
  type = 'website',
  article = false,
  publishedTime,
  author = 'Prince Uwagboe',
  keywords = 'AI automation, business automation, workflow automation, AI solutions, custom automation'
}) => {
  const siteUrl = 'https://princeaiautomation.com';
  const fullUrl = `${siteUrl}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  // Create JSON-LD structured data
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prince AI Automation',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://linkedin.com/in/prince-uwagboe',
      // Add other social profiles here
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'uwagboe.o.p@gmail.com',
      contactType: 'customer service'
    }
  };
  
  const pageSchema = article 
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        image: imageUrl,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Prince AI Automation',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`
          }
        },
        datePublished: publishedTime || new Date().toISOString(),
        url: fullUrl
      }
    : null;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Standard meta tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Prince AI Automation" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
        </>
      )}
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
      
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
