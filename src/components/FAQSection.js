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

const FAQSection = ({ 
  title = "Frequently Asked Questions", 
  faqs = [] // Add default empty array
}) => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  // Guard against undefined faqs
  if (!faqs || faqs.length === 0) {
    return null; // Or return some placeholder content
  }

  return (
    <section className="py-20 bg-gray-50">
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
