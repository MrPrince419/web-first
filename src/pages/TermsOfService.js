import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <main className="pt-20">
      <SEO
        title="Terms of Service | Prince AI Automation"
        description="Terms and conditions for using Prince AI Automation services."
        schema={{
          "@context": "https://schema.org",
          "@type": "TermsOfService",
          "name": "Prince AI Automation Terms of Service",
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
            <h1 className="text-4xl font-forum font-bold mb-8">Terms of Service</h1>
            <p className="mb-4">Last Updated: February 14, 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2>1. Service Agreement</h2>
              <p>By accessing or using Prince AI Automation services, you agree to these terms. If you disagree with any part, you may not access the service.</p>

              <h2>2. Service Description</h2>
              <p>We provide AI automation solutions including but not limited to:</p>
              <ul>
                <li>Custom automation development</li>
                <li>Workflow optimization</li>
                <li>Integration services</li>
                <li>Consulting and support</li>
              </ul>

              <h2>3. Pricing and Payment</h2>
              <ul>
                <li>A non-refundable consultation fee of $150 CAD is required before service begins</li>
                <li>Service fees are due according to the agreed payment schedule</li>
                <li>Late payments incur a 2% monthly interest charge</li>
                <li>Prices may be adjusted with 30 days notice</li>
              </ul>

              <h2>4. Client Responsibilities</h2>
              <p>Clients must:</p>
              <ul>
                <li>Provide accurate information for service delivery</li>
                <li>Maintain necessary access and permissions</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Secure required third-party permissions</li>
                <li>Pay fees according to the agreed schedule</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <ul>
                <li>We retain ownership of our automation systems and methodologies</li>
                <li>Clients retain ownership of their data and content</li>
                <li>Clients receive a non-exclusive license to use our solutions during the service period</li>
                <li>Custom developments are licensed, not sold</li>
              </ul>

              <h2>6. Confidentiality</h2>
              <p>Both parties agree to:</p>
              <ul>
                <li>Maintain strict confidentiality of shared information</li>
                <li>Use appropriate security measures</li>
                <li>Return or destroy confidential information upon request</li>
                <li>Report any unauthorized disclosure immediately</li>
              </ul>

              <h2>7. Limitation of Liability</h2>
              <ul>
                <li>Our liability is limited to the amount paid for services in the past 3 months</li>
                <li>We are not liable for indirect, consequential, or special damages</li>
                <li>Force majeure events excuse performance obligations</li>
              </ul>

              <h2>8. Service Level Agreement</h2>
              <ul>
                <li>99.9% uptime guarantee for hosted solutions</li>
                <li>24-hour response time for critical issues</li>
                <li>Regular maintenance windows with advance notice</li>
                <li>Backup and recovery procedures in place</li>
              </ul>

              <h2>9. Termination</h2>
              <p>Either party may terminate services:</p>
              <ul>
                <li>With 30 days written notice</li>
                <li>Immediately for material breach</li>
                <li>If the other party becomes insolvent</li>
              </ul>

              <h2>10. Dispute Resolution</h2>
              <ul>
                <li>Disputes will be resolved under Ontario, Canada law</li>
                <li>Mandatory mediation before litigation</li>
                <li>Exclusive jurisdiction in Ontario courts</li>
                <li>Prevailing party entitled to reasonable legal fees</li>
              </ul>

              <h2>11. Changes to Terms</h2>
              <p>We may modify these terms with:</p>
              <ul>
                <li>30 days advance notice for material changes</li>
                <li>Immediate effect for non-material updates</li>
                <li>Continued use constitutes acceptance</li>
              </ul>

              <h2>12. Contact Information</h2>
              <p>For legal notices and all other inquiries, please use our <a href="/contact" className="text-gold hover:text-orange">Contact Page</a>.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
