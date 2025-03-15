import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200 py-6 last:border-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-xl font-bold">{question}</h3>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
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
            <div className="pt-4 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = ({ title = "Frequently Asked Questions" }) => {
  const faqs = [
    {
      question: "What is AI automation and how can it help my business?",
      answer: "AI automation uses artificial intelligence to perform tasks that typically require human intervention. It can help your business by streamlining repetitive processes, reducing human error, saving time, cutting operational costs, and allowing your team to focus on more strategic activities. Common examples include email automation, document processing, customer service chatbots, and data analysis."
    },
    {
      question: "How long does it take to implement an automation solution?",
      answer: "Implementation time varies based on the complexity of the automation and your existing systems. Simple workflows can be set up in 1-2 weeks, while more complex integrations might take 4-8 weeks. During our initial consultation, we'll provide a timeline estimate specific to your project needs."
    },
    {
      question: "Do I need technical knowledge to use the automation systems?",
      answer: "No technical knowledge is required. We design user-friendly interfaces and provide training to ensure your team can manage the automation systems confidently. Our solutions are built to be intuitive, and we offer ongoing support to help you maximize their value."
    },
    {
      question: "What's the return on investment for automation services?",
      answer: "Most clients see ROI within 2-3 months of implementation. The returns come from time savings, error reduction, increased productivity, and expanded capacity. We'll help you calculate the potential ROI during our initial assessment based on your specific business metrics."
    },
    {
      question: "Can you integrate with my existing software and tools?",
      answer: "Yes, our solutions are designed to integrate with most popular business software and platforms. We specialize in connecting different systems to create seamless workflows. During our consultation, we'll review your current tech stack and ensure compatibility with our automation solutions."
    },
    {
      question: "Is there a long-term contract requirement?",
      answer: "Our standard service plans are month-to-month with a 30-day notice for cancellation. While we do offer discounted rates for annual commitments, there's no obligation to lock into a long-term contract. We want to earn your business each month through results and excellent service."
    },
    {
      question: "What are your business hours?",
      answer: "We are open Monday through Sunday, 8:00 AM to 10:00 PM EST. However, we are flexible and can accommodate clients in different time zones or with specific scheduling needs to ensure the best possible service."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Get answers to the most common questions about our services and automation solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
