import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Terms of Service | Prince AI Automation"
        description="The terms and conditions governing your use of Prince AI Automation services."
        url="/terms"
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-forum font-bold mb-4 text-center">Terms of Service</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p>Last Updated: January 1, 2025</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the services offered by Prince AI Automation ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.</p>
            
            <h2>2. Description of Services</h2>
            <p>Prince AI Automation provides AI automation solutions for businesses, including email automation, social media management, CRM integration, data processing, and related services. The specific services provided will be outlined in the service agreement between Prince AI Automation and the client.</p>
            
            <h2>3. Service Fees and Payment</h2>
            <p>Fees for our services are specified in the service agreement. An upfront consultation fee of $150 CAD is required, which will be applied to your first invoice upon proceeding with our services. This fee is non-refundable after the consultation has been provided.</p>
            <p>Monthly service fees are due on the first of each month and are payable via the methods specified in your service agreement.</p>
            
            <h2>4. Cancellation and Refunds</h2>
            <p>Services may be canceled with 30 days' written notice. No refunds will be provided for the current billing period. The initial consultation fee is non-refundable once the consultation has been provided.</p>
            
            <h2>5. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate and complete information necessary for service delivery</li>
              <li>Maintaining the confidentiality of account credentials</li>
              <li>Ensuring their use of our services complies with applicable laws and regulations</li>
              <li>Obtaining necessary permissions for any third-party content or data provided to us</li>
            </ul>
            
            <h2>6. Intellectual Property</h2>
            <p>Prince AI Automation retains ownership of all intellectual property rights in our automation systems, methodologies, and processes. Clients retain ownership of their data and content. We grant clients a limited license to use our services for their intended purpose during the service period.</p>
            
            <h2>7. Confidentiality</h2>
            <p>We maintain strict confidentiality regarding client information and data. We will not disclose confidential information to third parties without client consent, except as required by law or to provide the agreed-upon services.</p>
            
            <h2>8. Limitation of Liability</h2>
            <p>Prince AI Automation's liability is limited to the amount paid by the client for services in the preceding three months. We are not liable for indirect, incidental, special, or consequential damages arising from the use of our services.</p>
            
            <h2>9. Service Availability and Modifications</h2>
            <p>We strive to maintain continuous service availability but do not guarantee uninterrupted service. We may modify, suspend, or discontinue any aspect of our services with notice to clients. Material changes to these terms will be communicated to active clients.</p>
            
            <h2>10. Governing Law</h2>
            <p>These terms are governed by the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario.</p>
            
            <h2>11. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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

export default TermsOfService;
