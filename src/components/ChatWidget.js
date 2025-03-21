import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import LoadingAnimation from './LoadingAnimation';
import ChatAssistant from '../services/ChatAssistant';
import NLPService from '../services/NLPService';

// Simple initial messages
const initialMessages = [
  { 
    text: "Hi there! 👋 I'm Prince's AI assistant. How can I help you today?", 
    sender: 'bot', 
    timestamp: new Date() 
  }
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Initialize services on component load, not in state
  const nlpService = new NLPService();
  const chatAssistant = new ChatAssistant(nlpService);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    
    const newUserMessage = { 
      text: userInput, 
      sender: 'user', 
      timestamp: new Date() 
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setUserInput('');
    setLoading(true);
    
    try {
      // Process with ChatAssistant service
      const response = await chatAssistant.processUserMessage(userInput);
      
      const botMessage = {
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      // Small delay to make the interaction feel more natural
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, botMessage]);
        setLoading(false);
      }, 700);
    } catch (error) {
      console.error("Chat processing error:", error);
      
      // Show error message
      const errorMessage = {
        text: "I'm sorry, I couldn't process that request. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget-container fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-gold hover:bg-orange text-navy w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        aria-controls="chat-window"
      >
        {isOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-window"
            className="chat-window bg-white rounded-lg shadow-xl overflow-hidden absolute bottom-20 right-0 w-80 sm:w-96 max-h-[600px] flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Header */}
            <div className="bg-navy text-white p-4 flex items-center justify-between">
              <h3 className="font-medium">Chat with Prince AI</h3>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200"
                aria-label="Close chat"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              className="flex-1 p-4 overflow-y-auto" 
              style={{ maxHeight: 'calc(70vh - 120px)', WebkitOverflowScrolling: 'touch' }}
              aria-live="polite" 
              role="log"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.sender === 'bot' ? 'text-left' : 'text-right'
                  }`}
                  role="article"
                  aria-label={`${message.sender === 'user' ? 'You' : 'Assistant'} message`}
                >
                  <div
                    className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                      message.sender === 'bot'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gold text-navy'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {loading && (
                <div className="text-left mb-4">
                  <div className="inline-block rounded-lg px-4 py-2 bg-gray-100">
                    <LoadingAnimation size="small" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4" aria-label="Chat message form">
              <label htmlFor="chatInput" className="sr-only">Type your message</label>
              <div className="flex">
                <input
                  id="chatInput"
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Chat message"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-orange text-navy px-4 py-2 rounded-r-lg transition-colors"
                  aria-label="Send message"
                  disabled={loading || !userInput.trim()}
                >
                  {loading ? <span className="loading-icon" aria-hidden="true"></span> : <FaPaperPlane />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
