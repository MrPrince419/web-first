import { websiteContent } from '../data/websiteContent';
import NLPService from './NLPService';
import { getTopicInfo } from '../data/knowledgeBase';

class ChatAssistant {
  constructor() {
    this.conversationContext = [];
    this.nlpService = NLPService;  // Initialize NLPService
  }

  async processMessage(message, currentContext = {}) {
    try {
      const normalizedInput = this.normalizeInput(message);
      
      // Check if it's a question
      const isQuestion = this.isQuestion(normalizedInput);
      
      // Get direct response from content
      let response = await this.findRelevantContent(normalizedInput);
      
      // If no direct match found but it's a question, generate a response
      if (!response && isQuestion) {
        response = this.generateQuestionResponse(normalizedInput);
      }

      // If still no response, provide a fallback
      if (!response) {
        return {
          type: 'fallback',
          content: "I'm not sure about that. Could you rephrase your question or ask something else?",
          suggestions: [
            "What services do you offer?",
            "What are your business hours?",
            "How much do your services cost?"
          ]
        };
      }

      return {
        type: 'answer',
        content: response,
        suggestions: this.generateSuggestions(normalizedInput)
      };
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        type: 'error',
        content: "I'm having trouble understanding. Please try asking in a different way."
      };
    }
  }

  normalizeInput(input) {
    return input.toLowerCase().trim();
  }

  updateContext(input, currentContext) {
    // Update context based on input and current state
    this.conversationContext = {
      ...this.conversationContext,
      ...currentContext,
      lastTopic: this.detectTopic(input)
    };
  }

  async findRelevantContent(input) {
    // Search through website content for relevant information
    const relevantContent = await this.searchContent(input);
    
    if (relevantContent) {
      return this.formatResponse(relevantContent);
    }
    
    return null;
  }

  isUnclearQuery(input) {
    // Check if query is too vague or ambiguous
    return input.length < 3 || /^(hi|hey|hello|help)$/i.test(input);
  }

  detectTopic(input) {
    // Implement topic detection logic
    const topics = {
      services: /service|automation|workflow|integrate/i,
      pricing: /price|cost|fee|pay/i,
      hours: /hour|time|open|available/i,
      contact: /contact|email|phone|reach/i
    };

    for (const [topic, pattern] of Object.entries(topics)) {
      if (pattern.test(input)) return topic;
    }
    
    return null;
  }

  async searchContent(query) {
    if (!websiteContent || !Array.isArray(websiteContent)) {
      return null;
    }
    return websiteContent.find(content => 
      content.keywords?.some(keyword => 
        this.calculateSimilarity(query, keyword) > 0.8
      )
    );
  }

  calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    return s1.includes(s2) || s2.includes(s1) ? 1 : 0;
  }

  formatResponse(content) {
    // Format the response based on content type
    if (content.type === 'link') {
      return `${content.text} [Click here](${content.url})`;
    }
    return content.text;
  }

  isQuestion(text) {
    return text.includes('?') || 
           /^(what|when|where|who|how|why|can|could|would|will|do|does|is|are|should)/i.test(text);
  }

  generateQuestionResponse(text) {
    // Check for specific service inquiries
    if (text.match(/crm|customer relationship|lead/i)) {
      const crmInfo = getTopicInfo('services', 'crm_integration');
      return `${crmInfo.description}\n\nKey benefits include:\n${crmInfo.benefits.join('\n')}\n\n${crmInfo.case_study}`;
    }

    if (text.match(/email|inbox|newsletter/i)) {
      const emailInfo = getTopicInfo('services', 'email_automation');
      return `${emailInfo.description}\n\nThis service helps you:\n${emailInfo.details}`;
    }

    if (text.match(/social|media|content|post/i)) {
      const socialInfo = getTopicInfo('services', 'social_media');
      return `${socialInfo.description}\n\nOur clients typically see:\n${socialInfo.benefits.join('\n')}`;
    }

    // Check for pricing inquiries
    if (text.match(/price|cost|plan|package/i)) {
      const plans = getTopicInfo('pricing');
      return `We offer three main plans:\n\n1. ${plans.starter.name} (${plans.starter.price})\n2. ${plans.business.name} (${plans.business.price})\n3. ${plans.enterprise.name} (${plans.enterprise.price})\n\nWould you like details about a specific plan?`;
    }

    // Check for company information
    if (text.match(/hour|time|open|available/i)) {
      const hours = getTopicInfo('company', 'hours');
      return `${hours.schedule}. ${hours.flexibility}`;
    }

    // Default to general company information
    const about = getTopicInfo('company', 'about');
    return `${about.description}. ${about.expertise}. Would you like to know about our specific services?`;
  }

  generateSuggestions(input) {
    const suggestions = [];
    
    // Add service-specific suggestions
    if (input.match(/crm|customer|lead/i)) {
      suggestions.push(
        "What are the benefits of CRM integration?",
        "How much does CRM automation cost?",
        "Can you share a CRM success story?"
      );
    }

    // Add pricing suggestions
    if (input.match(/price|cost|plan/i)) {
      suggestions.push(
        "Tell me about the Starter Plan",
        "What's included in the Business Plan?",
        "Enterprise Plan features"
      );
    }

    return suggestions;
  }
}

export default ChatAssistant;
