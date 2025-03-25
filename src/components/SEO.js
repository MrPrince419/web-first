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
  schema = null
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
      "https://twitter.com/PrinceAIAuto",
      "https://www.linkedin.com/in/prince-uwagboe/"
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
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="author" content="Prince Uwagboe" />
      <meta name="publisher" content="Prince AI Automation" />
      
      {/* Robots Tags - Ensuring X-Robots-Tag is implemented properly */}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta http-equiv="X-Robots-Tag" content={robots} />
      
      {/* Language */}
      <html lang="en" />
      <meta property="og:locale" content={locale} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Prince AI Automation" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@PrinceAIAuto" />
      <meta name="twitter:site" content="@PrinceAIAuto" />
      
      {/* Hreflang for English */}
      <link rel="alternate" href={fullUrl} hrefLang="en" />
      <link rel="alternate" href={fullUrl} hrefLang="x-default" />
      
      {/* Security headers */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      
      {/* Schema.org JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
