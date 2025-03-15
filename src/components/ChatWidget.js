import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaRobot, FaPaperPlane } from 'react-icons/fa';
import ChatAssistant from '../services/ChatAssistant';

// Enhanced responses database with more contextual intelligence
const _responseDatabase = {
  // Service-related questions
  services: {
    triggers: ['services', 'what do you do', 'what do you offer', 'what services', 'type of services', 'offer', 'provide'],
    response: "We offer AI automation services including email management, social media automation, CRM integration, data processing, and custom workflow solutions. Would you like more details on any specific service?"
  },
  
  // Pricing questions
  pricing: {
    triggers: ['cost', 'price', 'fee', 'how much', 'pricing', 'expensive', 'charge', 'budget', 'affordable'],
    response: "Our pricing depends on your specific needs. We offer custom solutions starting at $500 CAD per month. There's a $150 CAD consultation fee to get started, which includes an audit of your current processes."
  },
  
  // Timeline questions
  timeline: {
    triggers: ['time', 'long', 'duration', 'take', 'timeline', 'when', 'fast', 'quickly', 'completion', 'finish'],
    response: "Most implementations take 2-4 weeks from start to finish, depending on the complexity of your needs and your team's availability."
  },
  
  // Location questions
  location: {
    triggers: ['location', 'office', 'remote', 'where', 'based', 'visit', 'in person'],
    response: "We're based in Sault Ste. Marie, Ontario, Canada, but we serve clients worldwide through remote collaboration. No in-person meetings are required for our services."
  },
  
  // Background questions
  experience: {
    triggers: ['experience', 'background', 'expertise', 'qualification', 'skilled', 'trained', 'education'],
    response: "Prince has several years of experience in AI automation and has helped businesses across various industries streamline their operations and reduce costs through custom automation solutions."
  },
  
  // Payment questions
  payment: {
    triggers: ['payment', 'invoice', 'pay', 'billing', 'card', 'transfer', 'transaction'],
    response: "We accept payments via credit card, PayPal, and direct bank transfer. Invoices are sent monthly for ongoing services, with payment due within 15 days."
  },
  
  // Consultation questions
  consultation: {
    triggers: ['consultation', 'meeting', 'schedule', 'appointment', 'book', 'call', 'discuss', 'talk'],
    response: "Great! Please head over to our contact page and fill out the form. Prince will get back to you within 24 hours to schedule a consultation."
  },
  
  // Refund questions
  refund: {
    triggers: ['refund', 'cancel', 'money back', 'cancelation', 'stop', 'discontinue'],
    response: "The upfront consultation fee is non-refundable, but monthly service plans can be canceled with 30 days' notice. For specific situations, please contact us directly."
  },
  
  // Support questions
  support: {
    triggers: ['support', 'help', 'issue', 'problem', 'trouble', 'assistance', 'error', 'bug'],
    response: "We provide email support for all clients and priority support for enterprise clients. Response times are typically within 24 hours for standard support and 4 hours for priority support."
  },
  
  // Contract questions
  contract: {
    triggers: ['contract', 'agreement', 'terms', 'commitment', 'sign', 'legal', 'obligations'],
    response: "Our service agreements typically run month-to-month after the initial implementation. You can find more details in our Terms of Service page."
  },
  
  // ROI/Value questions
  roi: {
    triggers: ['roi', 'return', 'benefit', 'value', 'worth it', 'savings', 'profitable', 'advantage'],
    response: "Our clients typically see ROI within 3-6 months through time savings, error reduction, and improved customer experiences. We'll analyze your specific processes to estimate potential returns for your business."
  },
  
  // Integration questions
  integration: {
    triggers: ['integration', 'connect', 'compatibility', 'work with', 'sync', 'existing systems'],
    response: "We integrate with most major business tools including Google Workspace, Microsoft 365, Salesforce, Zapier, HubSpot, and many more. We'll assess your tech stack during consultation."
  },
  
  // Specific plan questions
  starterPlan: {
    triggers: ['starter plan', 'basic plan', 'entry level', 'beginning tier'],
    response: "Our Starter Plan is perfect for small businesses just beginning their automation journey. For $500/month, you get email automation setup, basic workflow design, and up to 3 integrations between your existing tools. This plan includes monthly maintenance and one revision cycle per quarter."
  },
  
  businessPlan: {
    triggers: ['business plan', 'standard plan', 'mid tier', 'medium plan'],
    response: "The Business Plan ($1,200/month) is our most popular option. It includes everything in the Starter Plan plus custom AI workflow development, social media automation, CRM integration, and up to 50 automated tasks per month. You'll also receive priority support and bi-weekly check-ins."
  },
  
  enterprisePlan: {
    triggers: ['enterprise plan', 'premium plan', 'advanced plan', 'top tier'],
    response: "Our Enterprise Plan ($2,500+/month) is a fully customized solution for businesses with complex automation needs. It includes dedicated support, unlimited automation tasks, custom API development, advanced analytics, and monthly strategy sessions. Contact us for a tailored quote."
  },
  
  // Industry-specific questions
  retail: {
    triggers: ['retail', 'store', 'shop', 'ecommerce', 'inventory'],
    response: "For retail businesses, we offer inventory management automation, order processing workflows, customer support chatbots, and marketing automation that can help increase sales while reducing manual work."
  },
  
  healthcare: {
    triggers: ['healthcare', 'medical', 'doctor', 'hospital', 'clinic', 'patient'],
    response: "Our healthcare solutions focus on patient engagement automation, appointment scheduling, secure document processing, and compliance-friendly workflows that save staff time while improving patient experience."
  },
  
  legal: {
    triggers: ['legal', 'law firm', 'attorney', 'lawyer'],
    response: "For legal practices, we build document automation systems, client intake workflows, deadline management tools, and billing automation that can save attorneys and paralegals several hours per week."
  },
  
  // Specific automation questions
  emailAutomation: {
    triggers: ['email automation', 'email workflow', 'email campaigns', 'newsletters', 'email marketing'],
    response: "Our email automation solutions include personalized response systems, follow-up sequences, newsletter campaigns, and inbox management tools that can save hours of manual work while ensuring no important messages fall through the cracks."
  },
  
  socialMediaAutomation: {
    triggers: ['social media', 'facebook', 'instagram', 'twitter', 'linkedin', 'posting'],
    response: "Our social media automation tools help you maintain a consistent presence across platforms through scheduled posts, content recycling, engagement monitoring, and performance analytics, all managed through a single dashboard."
  },
  
  crmAutomation: {
    triggers: ['crm', 'customer relationship', 'leads', 'pipeline', 'sales automation'],
    response: "We can automate your CRM workflows including lead scoring, follow-up sequences, deal progression, and sales reporting. This ensures your team focuses on closing deals rather than manual data entry."
  },
  
  // Enhanced plan recommendations based on business type
  smallBusinessRecommendation: {
    triggers: ['which plan', 'recommend', 'suggestion', 'best for me', 'small business', 'just starting', 'cafe', 'shop', 'restaurant', 'bakery', 'one person', 'solo', 'few employees'],
    response: "Based on your small cafe business, I'd recommend our Starter Plan ($500/month). It's perfect for small businesses like cafes because it provides the essential automations you'd need: email management for customer inquiries, basic social media scheduling for promotions, and simple workflow automations for inventory alerts. Small-scale businesses typically don't need the advanced features of higher tiers, and this plan gives you the best ROI while you focus on growing your core business."
  },
  
  mediumBusinessRecommendation: {
    triggers: ['medium business', 'growing company', 'multiple locations', 'scaling up', 'team of', '10 employees', '20 employees', 'franchise'],
    response: "For a medium-sized business with multiple locations, our Business Plan ($1,200/month) would be the best fit. It provides the advanced workflow automations you'll need for managing operations across locations, more sophisticated customer engagement tools, and CRM integrations to handle your growing customer base. This plan is ideal for businesses that have outgrown basic automations and need more customized solutions to support their scaling operations."
  },
  
  largeBusinessRecommendation: {
    triggers: ['large company', 'enterprise', 'corporation', 'complex needs', 'many employees', 'nationwide', 'international'],
    response: "For large-scale operations with complex automation needs, our Enterprise Plan ($2,500+/month) is designed specifically for businesses like yours. It includes custom API development, advanced data analysis, multi-system integrations, and can handle the volume and complexity your business requires. The enterprise plan is fully customizable and includes dedicated support and regular strategy sessions to continually optimize your automation ecosystem."
  },
  
  // Website-specific questions
  websiteNavigation: {
    triggers: ['find', 'locate', 'where is', 'can\'t find', 'looking for', 'website', 'navigation', 'menu'],
    response: "Our website has a simple navigation structure. At the top, you'll find links to Home, About, Services, Portfolio, Blog, and Contact pages. If you're looking for specific information about our services, the Services page breaks down our offerings and pricing plans. For case studies, check the Portfolio section. Is there something specific you're trying to find?"
  },
  
  websiteIssues: {
    triggers: ['website issue', 'not working', 'error', 'broken', 'can\'t access', 'problem with', 'bug', 'glitch', 'won\'t load', 'broken link'],
    response: "I'm sorry you're experiencing issues with our website. Could you please describe what specifically isn't working? Common fixes include clearing your browser cache, trying a different browser, or disabling extensions. If the problem persists, please email us at uwagboe.o.p@gmail.com with details including your device, browser, and screenshots if possible."
  },
  
  portfolioAccess: {
    triggers: ['portfolio', 'case studies', 'examples', 'previous work', 'clients', 'projects', 'results'],
    response: "You can view our portfolio of automation projects by clicking on the 'Portfolio' link in the navigation menu. There, you'll find case studies organized by industry and automation type, complete with the challenges faced, solutions implemented, and measurable results achieved. Each case study demonstrates how our solutions have saved time and money for businesses similar to yours."
  },
  
  blogContent: {
    triggers: ['blog', 'articles', 'read more', 'information about', 'learn about', 'resources'],
    response: "Our blog section contains helpful articles about automation trends, implementation strategies, and success stories. You can access it via the 'Blog' link in the main navigation. We regularly publish new content to help businesses understand the potential of AI automation and how to get the most out of these technologies."
  },
  
  // Implementation questions with more detail
  implementationProcess: {
    triggers: ['implementation process', 'getting started', 'onboarding', 'how does it work', 'process', 'steps', 'begin'],
    response: "Our implementation process follows 5 key steps: 1) Initial consultation to understand your needs (2-3 days), 2) Process audit and automation planning (1 week), 3) Solution development and testing (1-2 weeks), 4) Deployment and user training (2-3 days), and 5) Ongoing monitoring and optimization. Throughout this process, you'll have a dedicated point of contact who will keep you informed and address any questions or concerns."
  },
  
  customizationOptions: {
    triggers: ['customize', 'customization', 'tailor', 'specific needs', 'adapt', 'modify', 'adjust'],
    response: "All our automation solutions are fully customizable to your specific business needs. During the initial consultation and process audit phases, we identify your unique requirements and design solutions accordingly. Even after implementation, we can adjust workflows as your needs evolve. The level of customization available increases with each pricing tier, with the Enterprise plan offering unlimited customization options."
  },
  
  // Training and support with more detail
  trainingDetails: {
    triggers: ['training', 'learn how', 'teach', 'tutorial', 'instructions', 'guide', 'how to use'],
    response: "We provide comprehensive training for all users who will interact with the automated systems. This includes live demo sessions, step-by-step guides, video tutorials, and a knowledge base you can reference anytime. For Business and Enterprise plans, we also offer regular refresher training sessions. Our goal is to ensure everyone in your team feels comfortable and confident using the new automation tools."
  },
  
  supportDetails: {
    triggers: ['support', 'help', 'assistance', 'question', 'issue', 'problem'],
    response: "Our support structure includes email support for all plans with a 24-hour response time guarantee. Business plans include priority email support (8-hour response) and scheduled check-in calls. Enterprise plans feature dedicated support with direct phone access during business hours and emergency weekend support. We also maintain a comprehensive help center with troubleshooting guides and frequently asked questions."
  },
  
  // Industry-specific solutions with more concrete examples
  retailAutomation: {
    triggers: ['retail automation', 'store automation', 'shop automation', 'ecommerce'],
    response: "For retail businesses, our automation solutions include inventory management systems that automatically reorder products when stock is low, customer engagement tools that send personalized offers based on purchase history, and sales analytics that identify trends and opportunities. For example, we helped a boutique clothing store increase sales by 30% through automated personalized email campaigns triggered by specific customer behaviors."
  },
  
  restaurantAutomation: {
    triggers: ['restaurant', 'cafe', 'bakery', 'food', 'menu', 'reservation', 'order'],
    response: "Our restaurant automation solutions include reservation management systems, inventory tracking that alerts you when ingredients are running low, automated marketing campaigns for slow periods, and customer feedback analysis. For example, we helped a local cafe reduce food waste by 25% through smart inventory management and increased repeat customers by 40% through an automated loyalty program."
  },
  
  professionalServicesAutomation: {
    triggers: ['professional services', 'consultant', 'consulting', 'accountant', 'lawyer', 'designer', 'agency'],
    response: "For professional service businesses, we create automation solutions for client onboarding, document management, time tracking, billing, and follow-up communications. For example, we helped a design agency reduce project management time by 60% through automated workflow systems that track project milestones and trigger appropriate actions and communications at each stage."
  },
  
  // Concrete ROI examples
  roiExamples: {
    triggers: ['roi example', 'actual results', 'case study', 'success story', 'savings', 'return', 'benefit example'],
    response: "Here's a concrete ROI example: We implemented email and CRM automation for a real estate agency that was spending 15 hours per week on manual follow-ups and data entry. Our solution reduced this to 2 hours per week, saving 676 hours annually. At an average cost of $30/hour for administrative work, that's a direct saving of $20,280/year against an investment of $14,400 for our Business Plan, resulting in a first-year ROI of 41% and increasing in subsequent years."
  }
};

// Context-aware conversation handler
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, _setConversationContext] = useState([]); // Changed to indicate unused setter
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
