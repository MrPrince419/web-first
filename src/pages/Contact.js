import React from 'react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Contact | Prince AI Automation"
        description="Get in touch to discuss how AI automation can transform your business operations."
        url="/contact"
      />
      <ContactSection />
    </main>
  );
};

export default Contact;
