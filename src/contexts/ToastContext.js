import React, { createContext, useState, useCallback, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

// Create the toast context
export const ToastContext = createContext();

// Add a custom hook to use the toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Function to show a toast notification
  const showToast = useCallback((message, type = 'info', duration = 5000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type, duration }]);
    
    // Automatically remove toast after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
  }, []);

  // Function to remove a toast
  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  // Get the appropriate icon based on toast type
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500" />;
      case 'error':
        return <FaExclamationCircle className="text-red-500" />;
      default:
        return <FaInfoCircle className="text-blue-500" />;
    }
  };

  // Get the appropriate background color based on toast type
  const getBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      
      {/* Toast notifications container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={`${getBgColor(toast.type)} border p-3 rounded-lg shadow-md flex items-center max-w-xs sm:max-w-md w-full`}
            >
              <div className="mr-3">
                {getIcon(toast.type)}
              </div>
              <p className="flex-1 text-sm sm:text-base">{toast.message}</p>
              <button 
                onClick={() => removeToast(toast.id)} 
                className="ml-3 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
