import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      year: 2024,
      title: 'Foundation',
      description: 'Prince AI Automation was founded with a vision to revolutionize business processes through AI-powered automation.'
    },
    {
      year: 2025,
      title: 'Expansion',
      description: 'Planned expansion into multiple sectors including healthcare, finance, and manufacturing.'
    },
    {
      year: 2027,
      title: 'Global Reach',
      description: 'Targeting international markets with tailored AI solutions for diverse business environments.'
    },
    {
      year: 2030,
      title: 'Industry Leadership',
      description: 'Working toward becoming a household name for businesses seeking automation solutions worldwide.'
    }
  ];

  return (
    <motion.section 
      className="timeline-section mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-forum font-bold mb-10 text-center text-primary">Our Journey</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <div className="date">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </motion.section>
  );
};

export default Timeline;
