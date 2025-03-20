import React from 'react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <main>
      <SEO 
        title="Prince AI Automation | Custom AI Solutions for Business"
        description="Streamline your business operations with custom AI automation solutions. Save time, reduce costs, and scale efficiently."
        url="/"
      />
      <HeroSection />
    </main>
  );
};

export default HomePage;
