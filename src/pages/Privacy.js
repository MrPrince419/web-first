import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <main className="pt-20 pb-16">
      <SEO 
        title="Privacy Policy | Prince AI Automation" 
        description="Privacy Policy for Prince AI Automation. Learn how we collect, use, and protect your personal information."
        url="/privacy"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <h1 className="text-3xl md:text-4xl font-forum font-bold mb-6">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
              
              <h2>1. Introduction</h2>
              <p>At Prince AI Automation, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul>
                <li>To provide you with the services you have requested</li>
                <li>To improve our website and services</li>
                <li>To communicate with you about our services</li>
                <li>To comply with legal obligations</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
              
              <h2>5. Data Retention</h2>
              <p>We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
              
              <h2>6. Your Legal Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <h2>7. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: uwagboe.o.p@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
