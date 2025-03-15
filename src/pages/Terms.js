import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <main className="pt-20 pb-16">
      <SEO 
        title="Terms of Service | Prince AI Automation" 
        description="Terms of Service for Prince AI Automation. Read about our terms and conditions for using our AI automation services."
        url="/terms"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <h1 className="text-3xl md:text-4xl font-forum font-bold mb-6">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
              
              <h2>1. Introduction</h2>
              <p>Welcome to Prince AI Automation. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.</p>
              
              <h2>2. Services</h2>
              <p>Prince AI Automation provides AI-powered automation solutions for businesses. Our services include but are not limited to email automation, social media management, CRM integration, data processing, and custom automation workflows.</p>
              
              <h2>3. Consultation Fee</h2>
              <p>An upfront consultation fee of $150 CAD is required to secure your spot. This fee covers the initial audit and planning phase and is non-refundable after the consultation.</p>
              
              <h2>4. Payments</h2>
              <p>Payment terms are specified in your service agreement. All fees are non-refundable unless otherwise stated in writing. Late payments may result in service suspension.</p>
              
              <h2>5. Client Responsibilities</h2>
              <p>Clients are responsible for providing accurate information, necessary access to systems, and timely feedback to ensure successful implementation of automation solutions.</p>
              
              <h2>6. Service Delivery</h2>
              <p>We commit to delivering services according to the agreed timeline. Delays caused by client actions or inactions may affect project timelines.</p>
              
              <h2>7. Intellectual Property</h2>
              <p>All intellectual property rights for materials created during service delivery remain with Prince AI Automation unless otherwise specified in writing. Clients retain ownership of their data and pre-existing materials.</p>
              
              <h2>8. Confidentiality</h2>
              <p>We treat all client information as confidential and will not share it with third parties without your consent, except as required by law.</p>
              
              <h2>9. Limitation of Liability</h2>
              <p>Prince AI Automation shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
              
              <h2>10. Termination</h2>
              <p>Either party may terminate the service agreement with 30 days written notice. Termination does not relieve the client of the obligation to pay for services rendered.</p>
              
              <h2>11. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Continued use of our services following any changes constitutes acceptance of the revised Terms.</p>
              
              <h2>12. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada.</p>
              
              <h2>13. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at: uwagboe.o.p@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
