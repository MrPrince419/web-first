import React from 'react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <main>
      <SEO 
        title="Prince AI Automation - Streamline Your Business with AI Solutions"
        description="Save time and reduce costs with custom AI automation solutions for your business. Based in Ontario, Canada, serving clients worldwide."
        url="/"
      />
      
      <HeroSection />
      {/* Footer is rendered through App.js for all pages */}
    </main>
  );
};

export default Home;
