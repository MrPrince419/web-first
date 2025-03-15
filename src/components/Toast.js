import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const toastTypes = {
  success: {
    icon: <FaCheckCircle className="text-green-500 text-xl" />,
    bgColor: 'bg-green-100',
    borderColor: 'border-green-500'
  },
  error: {
    icon: <FaExclamationCircle className="text-red-500 text-xl" />,
    bgColor: 'bg-red-100',
    borderColor: 'border-red-500'
  },
  info: {
    icon: <FaInfoCircle className="text-blue-500 text-xl" />,
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500'
  }
};

const Toast = ({ id, message, type = 'info', duration = 5000, onClose }) => {
  // Automatically close toast after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const { icon, bgColor, borderColor } = toastTypes[type] || toastTypes.info;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center p-4 rounded-lg shadow-lg border-l-4 ${borderColor} ${bgColor} max-w-md w-full`}
    >
      <div className="mr-3 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 mr-2">{message}</div>
      <button
        onClick={() => onClose(id)}
        className="text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Close notification"
      >
        <FaTimes />
      </button>
    </motion.div>
  );
};

// Toast Container Component
const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 items-end">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={removeToast}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
