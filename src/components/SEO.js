import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  url,
  image = 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&auto=format&fit=crop',
  imageAlt = 'Prince AI Automation logo and branding',
  type = 'website',
  locale = 'en_US',
  twitterCard = 'summary_large_image',
  robots = 'index, follow',
  schema = null,
  defaultDescription = "Prince AI Automation - Leading provider of custom AI automation solutions for businesses. Based in Sault Ste. Marie, Ontario, helping companies save time and reduce costs through intelligent automation.",
  keywords = "AI automation, business automation, workflow automation, custom AI solutions, small business automation, Prince AI, PrinceAi Automation"
}) => {
  const siteUrl = 'https://princeaiautomation.netlify.app';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  // Default organization schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prince AI Automation",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://www.linkedin.com/in/prince05/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+12493564705",
      "contactType": "customer service",
      "email": "uwagboe.o.p@gmail.com",
      "availableLanguage": "English"
    }
  };
  
  // Use provided schema or default to organization schema
  const schemaData = schema || defaultSchema;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="author" content="Prince Uwagboe" />
      <meta name="publisher" content="Prince AI Automation" />
      
      {/* Robots Tags - Ensuring X-Robots-Tag is implemented properly */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta http-equiv="X-Robots-Tag" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Language */}
      <html lang="en" />
      <meta property="og:locale" content={locale} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Prince AI Automation" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Hreflang for English */}
      <link rel="alternate" href={fullUrl} hrefLang="en" />
      <link rel="alternate" href={fullUrl} hrefLang="x-default" />
      
      {/* Security headers */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      <meta name="application-name" content="Prince AI Automation" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Schema.org JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
