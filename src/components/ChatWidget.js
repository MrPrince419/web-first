import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaCommentDots, FaTimes, FaRobot, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { 
  quickReplies, 
  getRandomFallback, 
  findResponseByKeywords,
  getDecisionTree,
  getChatResponse,
  getFollowUpResponse
} from '../data/chatData';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState({
    currentTopic: 'greeting',
    lastTopic: null,
    currentCategory: null,
    history: []
  });
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 100], [1, 0.3]);
  
  useEffect(() => {
    if (isOpen && chatMessages.length === 0) {
      handleBotResponse("Hi! I'm your AI assistant for Prince AI Automation. How can I help you today? 🤖", 
        ['What services do you offer?', 'Tell me about your portfolio', 'How much does it cost?']);
    }
    
    scrollToBottom();
  }, [chatMessages, isOpen]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleDrag = (event, info) => {
    if (info.offset.x > 50) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
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

      // Update conversation history
      const updatedContext = {
        ...conversationContext,
        history: [...conversationContext.history, text]
      };
      
      // Check for navigation intents
      if ((text.toLowerCase().includes('contact') && text.toLowerCase().includes('page')) || 
          (conversationContext.currentTopic === 'consultation' && 
           (text.toLowerCase().includes('yes') || text.toLowerCase().includes('take me')))) {
        setTimeout(() => {
          navigate('/contact');
          setIsOpen(false);
        }, 1000);
        
        const botMessage = {
          id: Date.now() + 1,
          text: "Taking you to our contact page...",
          sender: 'bot'
        };
        
        setChatMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        return;
      }
      
      if ((text.toLowerCase().includes('blog') && text.toLowerCase().includes('page')) || 
          text.toLowerCase().includes('read article')) {
        setTimeout(() => {
          navigate('/blog');
          setIsOpen(false);
        }, 1000);
        
        const botMessage = {
          id: Date.now() + 1,
          text: "Taking you to our blog page...",
          sender: 'bot'
        };
        
        setChatMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        return;
      }
      
      if ((text.toLowerCase().includes('portfolio') && text.toLowerCase().includes('page')) || 
          text.toLowerCase().includes('see projects')) {
        setTimeout(() => {
          navigate('/portfolio');
          setIsOpen(false);
        }, 1000);
        
        const botMessage = {
          id: Date.now() + 1,
          text: "Taking you to our portfolio page...",
          sender: 'bot'
        };
        
        setChatMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        return;
      }
      
      // Handle conversation based on context
      let response;
      const lowercaseText = text.toLowerCase();

      // First check if this is a follow-up to the current topic
      if (conversationContext.currentTopic && conversationContext.currentTopic !== 'greeting') {
        response = getFollowUpResponse(lowercaseText, conversationContext);
        
        if (response) {
          // Update context based on the detected follow-up
          if (response.newTopic) {
            updatedContext.lastTopic = conversationContext.currentTopic;
            updatedContext.currentTopic = response.newTopic;
          }
          
          if (response.category) {
            updatedContext.currentCategory = response.category;
          }
        }
      }
      
      // If no specific follow-up response was found, look for a general response
      if (!response) {
        // Try to match to a specific response based on keywords
        const matchedResponse = findResponseByKeywords(lowercaseText);
        
        if (matchedResponse) {
          response = {
            text: matchedResponse.response,
            suggestions: matchedResponse.suggestions,
            icon: matchedResponse.icon
          };
          
          // Update conversation context based on the matched response
          if (matchedResponse.contextTopic) {
            updatedContext.lastTopic = conversationContext.currentTopic;
            updatedContext.currentTopic = matchedResponse.contextTopic;
          }
          
          if (matchedResponse.category) {
            updatedContext.currentCategory = matchedResponse.category;
          }
          
          // If there's a decision tree associated with this response, use it
          if (matchedResponse.decisionTree) {
            const decisionTree = getDecisionTree(matchedResponse.decisionTree);
            if (decisionTree) {
              response = {
                text: decisionTree.question,
                options: decisionTree.options
              };
            }
          }
        } else {
          // Try to get a response based on the current context
          response = getChatResponse(lowercaseText, conversationContext);
          
          // If no context-specific response, use fallback
          if (!response) {
            const fallback = getRandomFallback();
            response = {
              text: fallback.response,
              suggestions: fallback.suggestions
            };
          }
        }
      }
      
      // Update conversation context
      setConversationContext(updatedContext);

      // Simulate typing delay
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: response.text,
          suggestions: response.suggestions,
          options: response.options,
          icon: response.icon,
          sender: 'bot'
        };
        
        setChatMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        
        // If this is a consultation response that should lead to contact page
        if (response.navigateTo === 'contact') {
          setTimeout(() => {
            const followUpMsg = {
              id: Date.now() + 2,
              text: "Taking you to our contact page...",
              sender: 'bot'
            };
            setChatMessages(prev => [...prev, followUpMsg]);
            
            setTimeout(() => {
              navigate('/contact');
              setIsOpen(false);
            }, 1000);
          }, 2000);
        }
      }, 1200);

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I couldn't process your request. Please try again.",
        type: 'error',
        sender: 'bot'
      };
      setChatMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleQuickReply = (reply) => {
    const text = reply.value || reply;
    handleSendMessage(text);
  };
  
  const handleOptionSelect = (option) => {
    // First, add the selected option as a user message
    const userMessage = {
      id: Date.now(),
      text: option.text,
      sender: 'user'
    };
    setChatMessages(prev => [...prev, userMessage]);
    
    // Then process the option's response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: option.response,
        suggestions: option.suggestions,
        icon: option.icon,
        sender: 'bot'
      };
      
      setChatMessages(prev => [...prev, botMessage]);
      
      // Update conversation context
      if (option.contextTopic) {
        setConversationContext(prev => ({
          ...prev,
          lastTopic: prev.currentTopic,
          currentTopic: option.contextTopic,
          currentCategory: option.category || prev.currentCategory
        }));
      }
    }, 800);
  };
  
  const renderMessage = (message) => {
    // Render icon if available
    const MessageIcon = message.icon;
    
    return (
      <div>
        {MessageIcon && (
          <div className="flex items-center mb-2">
            <MessageIcon className="text-gold mr-2" />
          </div>
        )}
        <div className="whitespace-pre-wrap">{message.text}</div>
        
        {/* Decision tree options */}
        {message.options && message.options.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="bg-navy/10 hover:bg-navy/20 text-navy px-3 py-2 rounded-md text-sm transition-colors"
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
        
        {/* Regular suggestions */}
        {message.suggestions && message.suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(suggestion)}
                className="bg-gray-100 hover:bg-gray-200 text-navy px-3 py-1 rounded-full text-sm transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  const handleBotResponse = (message, suggestions = []) => {
    const botMsg = {
      id: Date.now(),
      text: message,
      suggestions: suggestions,
      sender: 'bot'
    };
    
    setChatMessages(prev => [...prev, botMsg]);
  };
  
  return (
    <>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 100 }}
        onDragEnd={handleDrag}
        animate={{ x: isExpanded ? 0 : 80 }}
        style={{ x, opacity }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed bottom-4 right-4 z-40"
      >
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-12 h-12 bg-gold text-navy shadow-lg rounded-full"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <FaTimes className="text-sm" /> : <FaCommentDots className="text-sm" />}
        </button>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 right-4 z-40 w-72 sm:w-80 rounded-lg shadow-xl overflow-hidden bg-white"
          >
            {/* Chat Header */}
            <div className="p-3 bg-gold text-navy flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="text-lg mr-2" />
                <h3 className="font-medium">AI Assistant</h3>
              </div>
              <button 
                onClick={toggleChat} 
                className="text-navy hover:text-gray-700 p-1 rounded-full"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="h-72 overflow-y-auto p-4">
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
                      onClick={() => handleQuickReply(reply)}
                      className="flex items-center text-xs py-1 px-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {reply.icon && <reply.icon className="mr-1 text-gold text-xs" />} {reply.text}
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
