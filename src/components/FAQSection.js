import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      className="border-b border-gray-200 py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <button 
        className="flex items-center justify-between w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? <FaChevronUp className="text-gold" /> : <FaChevronDown className="text-gray-400" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = ({ title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default
  
  const faqs = [
    {
      question: "What is AI automation and how can it help my business?",
      answer: "AI automation uses artificial intelligence to handle repetitive tasks like email campaigns, data entry, and customer support. It saves you time, reduces costs, and lets you focus on growing your business. Our clients typically see 30-50% efficiency improvements within months of implementation."
    },
    {
      question: "How long does it take to implement an automation solution?",
      answer: "Most solutions take 1-4 weeks to set up, depending on complexity. We'll provide a timeline after the initial consultation. Simple email automation might be ready in days, while more complex CRM integrations could take a few weeks to perfect."
    },
    {
      question: "Do I need technical knowledge to use the automation systems?",
      answer: "No! Our systems are user-friendly, and we provide comprehensive training and support to ensure you're comfortable. We design intuitive interfaces and provide documentation, so you can focus on your business while the automation works for you."
    },
    {
      question: "What's the return on investment for automation services?",
      answer: "Clients typically see 30-50% time savings and cost reductions within the first 3 months, with ROI growing over time. Many businesses recover their investment within 6 months through reduced operational costs and increased productivity."
    },
    {
      question: "Can you integrate with my existing software and tools?",
      answer: "Yes, we specialize in custom integrations to ensure our solutions work seamlessly with your current tools. We have experience connecting with major platforms like Salesforce, HubSpot, Zapier, and hundreds of other business applications."
    },
    {
      question: "Is there a long-term contract requirement?",
      answer: "No, we offer flexible month-to-month plans. You can cancel anytime after the initial consultation period. We're confident you'll see the value in our services, but we don't believe in locking clients into long contracts."
    },
    {
      question: "What are your business hours?",
      answer: "We're available Monday to Friday, 9 AM to 5 PM EST. Remote support is available worldwide, and we can accommodate clients in different time zones as needed."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-forum font-bold mb-4">{title}</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                toggleOpen={() => toggleQuestion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
