import React from 'react';
import AboutContent from '../components/about/AboutContent';
import SEO from '../components/SEO';

const About = () => {
  return (
    <main>
      <SEO
        title="About Prince AI Automation | AI Specialist"
        description="Learn about Prince Uwagboe, an AI automation specialist based in Ontario, Canada, helping businesses save time and reduce costs."
        url="/about"
      />
      <AboutContent />
      {/* Footer is already included via App.js for all pages */}
    </main>
  );
};

export default About;
