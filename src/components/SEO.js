import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Prince AI Automation | Custom AI Solutions for Business', 
  description = 'Streamline your business operations with custom AI automation solutions by Prince AI Automation. Save time, reduce costs, and scale efficiently.',
  image = '/images/seo-default.jpg',
  url = '/'
}) => {
  const siteUrl = 'https://princeaiautomation.com';
  const fullUrl = `${siteUrl}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
