import React from 'react';
import AboutContent from '../components/about/AboutContent';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="About Prince AI Automation"
        description="Learn about Prince AI Automation and our mission to revolutionize businesses through custom AI solutions."
        url="/about"
      />
      
      <AboutContent />
    </main>
  );
};

export default AboutPage;
