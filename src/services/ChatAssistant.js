/**
 * ChatAssistant handles processing user messages and generating responses
 * using the NLPService for message understanding and the chat configuration data.
 */
class ChatAssistant {
  constructor(nlpService) {
    this.nlpService = nlpService;
    
    // Default chat data if not provided
    this.chatData = {
      initialMessage: "Hi there! 👋 I'm Prince's AI assistant. How can I help you today?",
      fallbacks: [
        "I'm not sure I understand. Could you rephrase that?",
        "I don't have information on that specific topic. Is there something else about our AI automation services I can help with?",
        "That's a bit outside my knowledge area. Would you like to know about our services or pricing instead?"
      ],
      faqs: [
        {
          question: "What services do you offer?",
          answer: "We offer Email Automation, Social Media Management, CRM Integration, Customer Support, Data Entry & Processing, and Reporting & Analytics services."
        },
        {
          question: "How much do your services cost?",
          answer: "Our pricing starts at $500 CAD/month for the Starter plan. We also offer Growth ($900 CAD/month) and Enterprise ($1500 CAD/month) plans tailored to your needs."
        },
        {
          question: "Do you offer a free consultation?",
          answer: "Yes! We offer a free initial consultation to discuss your business needs and how our AI automation solutions can help. The $150 CAD consultation fee only applies to comprehensive business audits and is credited toward your first invoice if you proceed with our services."
        }
      ],
      topicHandlers: {
        pricing: () => "Our pricing starts at $500 CAD/month for the Starter plan. We also offer Growth ($900 CAD/month) and Enterprise ($1500 CAD/month) plans tailored to your needs.",
        services: () => "We offer Email Automation, Social Media Management, CRM Integration, Customer Support, Data Entry & Processing, and Reporting & Analytics services.",
        contact: () => "You can reach us through our contact form on our website or email us directly at uwagboe.o.p@gmail.com.",
        about: () => "Prince AI Automation is a leading provider of custom AI automation solutions, dedicated to helping businesses streamline their operations and achieve unprecedented efficiency."
      }
    };
    
    this.conversationHistory = [];
  }

  /**
   * Process a user message and return an appropriate response
   */
  async processUserMessage(message) {
    try {
      // Add message to history
      this.conversationHistory.push({ role: 'user', message });
      
      // Use NLP service to understand the message
      const understanding = await this.nlpService.processMessage(message);
      
      // Generate response based on understanding
      const response = this.generateResponse(understanding);
      
      // Add response to history
      this.conversationHistory.push({ role: 'assistant', message: response });
      
      return response;
    } catch (error) {
      console.error("Error processing message:", error);
      return this.getRandomFallback();
    }
  }

  /**
   * Generate a response based on message understanding
   */
  generateResponse(understanding) {
    // Check if it's a question matching our FAQs
    const faqMatch = this.findFAQMatch(understanding.intent);
    if (faqMatch) {
      return faqMatch.answer;
    }
    
    // Check if we have a topic handler for this
    if (understanding.topic && this.chatData.topicHandlers[understanding.topic]) {
      return this.chatData.topicHandlers[understanding.topic]();
    }
    
    // Handle basic intents
    switch (understanding.intent) {
      case 'greeting':
        return "Hello! How can I help you with our AI automation services today?";
      case 'thanks':
        return "You're welcome! Is there anything else I can help you with?";
      case 'goodbye':
        return "Thank you for chatting with us! If you have more questions later, feel free to come back.";
      default:
        return this.getRandomFallback();
    }
  }

  /**
   * Find a matching FAQ for the user's question
   */
  findFAQMatch(intent) {
    if (!intent || !this.chatData.faqs) return null;
    
    return this.chatData.faqs.find(faq => {
      const normalizedQuestion = faq.question.toLowerCase();
      return normalizedQuestion.includes(intent.toLowerCase());
    });
  }

  /**
   * Get a random fallback response
   */
  getRandomFallback() {
    const fallbacks = this.chatData.fallbacks || [
      "I'm not sure I understand. Could you rephrase that?"
    ];
    
    const randomIndex = Math.floor(Math.random() * fallbacks.length);
    return fallbacks[randomIndex];
  }

  /**
   * Clear the conversation history
   */
  clearHistory() {
    this.conversationHistory = [];
  }
}

export default ChatAssistant;
