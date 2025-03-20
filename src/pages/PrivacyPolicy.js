import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Privacy Policy | Prince AI Automation"
        description="Our commitment to protecting your privacy and how we handle your data."
        url="/privacy"
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-forum font-bold mb-4 text-center">Privacy Policy</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p>Last Updated: January 1, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>At Prince AI Automation, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Contact form submissions</li>
              <li>Usage data (how you interact with our website)</li>
              <li>Marketing preferences</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
            
            <h2>4. Data Protection</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
            
            <h2>5. Third-Party Services</h2>
            <p>We may employ third-party companies and individuals to facilitate our website, provide the service on our behalf, perform service-related activities, or assist us in analyzing how our website is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
            
            <h2>6. Your Data Protection Rights</h2>
            <p>You have the following data protection rights:</p>
            <ul>
              <li>The right to access, update or delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.</p>
            
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: uwagboe.o.p@gmail.com</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
