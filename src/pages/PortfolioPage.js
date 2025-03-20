import React from 'react';
import SEO from '../components/SEO';
import PortfolioSection from '../components/PortfolioSection';

const PortfolioPage = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="Our Portfolio | Prince AI Automation"
        description="Explore our successful AI automation projects and see the real results we've delivered for our clients."
        url="/portfolio"
      />
      <PortfolioSection />
    </main>
  );
};

export default PortfolioPage;
