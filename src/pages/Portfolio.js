import React from 'react';
import SEO from '../components/SEO';
import PortfolioSection from '../components/PortfolioSection';
import CTASection from '../components/CTASection';

const Portfolio = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="Portfolio" 
        description="Explore our successful automation projects including email systems, data processing, CRM integrations and the measurable results we've delivered for our clients."
        url="/portfolio"
      />
      <PortfolioSection />
      <CTASection 
        title="Ready to Create Your Success Story?" 
        subtitle="Join our satisfied clients and transform your business operations with custom automation solutions."
        buttonLink="/contact"
      />
    </main>
  );
};

export default Portfolio;
