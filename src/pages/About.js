import React from 'react';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SEO from '../components/SEO';

const About = () => {
  return (
    <main>
      <SEO
        title="About Prince AI Automation | AI Specialist"
        description="Learn about Prince Uwagboe, an AI automation specialist based in Ontario, Canada, helping businesses save time and reduce costs."
        url="/about"
      />
      <AboutSection />
      <TestimonialsSection />
      {/* Footer is already included via App.js for all pages */}
    </main>
  );
};

export default About;
