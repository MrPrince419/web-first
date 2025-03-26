import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default
  
  // Updated FAQ questions specific to the About page
  const faqs = [
    {
      question: "Who is Prince AI Automation?",
      answer: "Prince AI Automation is a specialized AI consultancy founded by Prince Uwagboe, based in Sault Ste. Marie, Ontario. We focus on designing custom AI automation solutions for businesses of all sizes to streamline operations, reduce costs, and increase productivity."
    },
    {
      question: "What is your company's mission?",
      answer: "Our mission is to democratize access to AI technologies by making them accessible and useful for businesses of all sizes. We believe that effective automation should be available to everyone, not just large corporations with massive IT budgets."
    },
    {
      question: "Do you work with clients globally?",
      answer: "Yes! While we're based in Ontario, Canada, we serve clients worldwide through remote collaboration. Our digital-first approach means we can deliver exceptional results regardless of geographical location."
    },
    {
      question: "What makes Prince AI Automation different from other services?",
      answer: "Our difference lies in our personalized approach. We don't offer one-size-fits-all solutions. Instead, we take the time to understand your specific business challenges and create custom automation workflows that address your unique needs. Additionally, we prioritize building solutions that your team can manage with minimal technical expertise."
    },
    {
      question: "What is your company's background and expertise?",
      answer: "Prince AI Automation combines years of experience in software development, business process optimization, and artificial intelligence. Our team members have backgrounds in computer science, data engineering, and business operations, allowing us to approach automation from both technical and business perspectives."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-forum font-bold mb-10 text-center text-primary">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 md:p-8">
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
      </motion.div>
    </section>
  );
};

export default FAQ;
