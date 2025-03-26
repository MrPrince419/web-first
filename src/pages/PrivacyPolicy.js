import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <main className="pt-20">
      <SEO
        title="Privacy Policy | Prince AI Automation"
        description="Our commitment to protecting your privacy and data security."
        schema={{
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          "name": "Prince AI Automation Privacy Policy",
          "version": "2.0",
          "dateModified": "2024-02-14"
        }}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-forum font-bold mb-8">Privacy Policy</h1>
            <p className="mb-4">Last Updated: February 14, 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              <p><strong>Personal Information:</strong> Name, email address, phone number, and business information provided through our contact forms or during consultations.</p>
              <p><strong>Usage Data:</strong> Information about how you interact with our website and services, including IP address, browser type, pages visited, and time spent.</p>
              <p><strong>Business Data:</strong> Information related to your business processes and workflows that you share for automation purposes.</p>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To provide and improve our automation services</li>
                <li>To communicate about your services and support needs</li>
                <li>To send relevant updates and marketing communications (with consent)</li>
                <li>To analyze and improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2>3. Data Protection</h2>
              <p>We implement industry-standard security measures including:</p>
              <ul>
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Strict access controls and authentication</li>
                <li>Secure data backup and recovery systems</li>
              </ul>

              <h2>4. Data Sharing and Third Parties</h2>
              <p>We share your information only with:</p>
              <ul>
                <li>Service providers essential to our operations (e.g., hosting, email)</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Withdraw consent for data processing</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
              </ul>

              <h2>6. Cookie Policy</h2>
              <p>We use essential cookies for website functionality and optional analytics cookies with your consent. You can control cookie preferences through your browser settings.</p>

              <h2>7. Data Retention</h2>
              <p>We retain your data for as long as necessary to provide our services or comply with legal obligations. You may request data deletion at any time.</p>

              <h2>8. International Data Transfers</h2>
              <p>Data may be processed in Canada or other countries. We ensure appropriate safeguards are in place for international transfers.</p>

              <h2>9. Children's Privacy</h2>
              <p>Our services are not intended for children under 13. We do not knowingly collect data from children.</p>

              <h2>10. Changes to This Policy</h2>
              <p>We may update this policy periodically. We will notify you of significant changes through our website or email.</p>

              <h2>11. Contact Information</h2>
              <p>For privacy-related inquiries, please use our <a href="/contact" className="text-gold hover:text-orange">Contact Page</a>.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
