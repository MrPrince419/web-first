import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaRegHandshake } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-forum font-bold mb-4">Hi, I'm Prince</h3>
          <p className="text-lg mb-10">
            An AI automation specialist based in Sault Ste. Marie, Ontario 🍁. With years of experience helping small businesses streamline their operations, I specialize in designing custom workflows that save you time and money 💼. Whether it's automating repetitive tasks like social media posting, email campaigns, or CRM updates, I deliver solutions tailored to your unique needs. My goal is to empower businesses like yours to focus on growth while I handle the backend processes ⚙️. Let me help you unlock the full potential of AI automation 🌟.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Card sections with icons instead of images */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRobot className="text-gold text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Passion for AI</h4>
            <p>
              My journey with AI began with fascination and evolved into expertise. I continuously explore new AI applications to bring cutting-edge solutions to businesses.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <FaChartLine className="text-gold text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Proven Results</h4>
            <p>
              I've helped businesses achieve 30-50% time savings through strategic automation. My solutions are designed to show clear ROI and measurable improvements.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <FaRegHandshake className="text-gold text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Client-Focused</h4>
            <p>
              I prioritize understanding your unique needs before suggesting solutions. Your success is my success, and I'm committed to providing ongoing support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;