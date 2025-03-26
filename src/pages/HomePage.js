import React from 'react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <main>
      <SEO 
        title="Prince AI Automation | Custom AI Solutions for Business"
        description="Streamline your business operations with custom AI automation solutions. Based in Sault Ste. Marie, Ontario, serving clients worldwide remotely."
        url="/"
      />
      <HeroSection />
      <CTASection 
        title="Ready to Transform Your Business With AI?" 
        subtitle="Schedule a free consultation to discuss how automation can save you time and money."
      />
    </main>
  );
};

export default HomePage;
