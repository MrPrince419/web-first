import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaChartLine, FaUsers } from 'react-icons/fa';

const ProjectStatsDashboard = () => {
  // Fixed statistics to match homepage
  const stats = {
    processesAutomated: 50,
    costReduction: 40,
    clients: 25
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <StatCard
        icon={<FaCogs />}
        value={`${stats.processesAutomated}+`}
        label="Business Processes Automated"
      />
      <StatCard
        icon={<FaChartLine />}
        value={`${stats.costReduction}%`}
        label="Average Cost Reduction"
      />
      <StatCard
        icon={<FaUsers />}
        value={`${stats.clients}+`}
        label="Satisfied Clients"
      />
    </motion.div>
  );
};

const StatCard = ({ icon, value, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-gold text-3xl mb-3">{icon}</div>
    <div className="text-3xl font-bold text-navy mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default ProjectStatsDashboard;
