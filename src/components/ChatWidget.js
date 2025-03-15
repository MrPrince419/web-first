import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaRobot, FaPaperPlane } from 'react-icons/fa';
import ChatAssistant from '../services/ChatAssistant';

// Initialize chat assistant
const chatAssistant = new ChatAssistant();

// Context-aware conversation handler
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState([]); // Renamed from _setConversationContext
  const messagesEndRef = useRef(null);
  
  const quickReplies = [
    "What services do you offer?",
    "How much does it cost?",
    "How long does implementation take?",
    "I'd like to schedule a consultation"
  ];
  
  useEffect(() => {
    if (isOpen && chatMessages.length === 0) {
      handleBotResponse("Hi there! 👋 I'm Prince's AI assistant. How can I help you today?");
    }
    
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [chatMessages, isOpen]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!userMessage.trim()) return;
    
    handleSendMessage(userMessage);
    setUserMessage('');
  };
  
  const handleSendMessage = async (text) => {
    try {
      setIsTyping(true);
      const userMessage = {
        id: Date.now(),
        text: text,
        sender: 'user'
      };
      setChatMessages(prev => [...prev, userMessage]);
      setUserMessage('');

      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );

      const response = await Promise.race([
        chatAssistant.processMessage(text, conversationContext),
        timeoutPromise
      ]);

      setConversationContext(prevContext => [...prevContext, { text, response }]);

      const botMessage = {
        id: Date.now() + 1,
        text: response.content,
        type: response.type,
        sender: 'bot',
        suggestions: response.suggestions
      };
      setChatMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: error.message === 'Request timeout' 
          ? "Sorry, the response took too long. Please try again."
          : "I'm sorry, I couldn't process your request. Please try again.",
        type: 'error',
        sender: 'bot'
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Add message display logic
  const renderMessage = (message) => {
    switch (message.type) {
      case 'suggestions':
        return (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(suggestion)}
                className="bg-gray-100 text-navy px-3 py-1 rounded-full text-sm hover:bg-gray-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        );
      default:
        return <div className="whitespace-pre-wrap">{message.text}</div>;
    }
  };
  
  const handleBotResponse = (message) => {
    const botMsg = {
      id: Date.now(),
      text: message,
      sender: 'bot'
    };
    
    setChatMessages(prev => [...prev, botMsg]);
  };
  
  return (
    <>
      <button
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gold text-navy shadow-lg flex items-center justify-center transition-transform hover:scale-110`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-xl" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-40 w-80 sm:w-96 rounded-lg shadow-xl overflow-hidden bg-white"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gold text-navy flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="text-xl mr-2" />
                <h3 className="font-medium">AI Assistant</h3>
              </div>
              <button 
                onClick={toggleChat} 
                className="text-navy hover:text-gray-700"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? `bg-gold text-navy`
                        : `bg-gray-100 text-navy`
                    }`}
                  >
                    {renderMessage(message)}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-navy">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Replies */}
            {chatMessages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-sm text-gray-500 mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="text-xs py-1 px-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-3 rounded-l-lg focus:outline-none bg-gray-100 text-gray-900 focus:ring-1 focus:ring-gold"
                />
                <button
                  type="submit"
                  className="py-2 px-4 rounded-r-lg flex items-center justify-center bg-navy text-white"
                  aria-label="Send message"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
