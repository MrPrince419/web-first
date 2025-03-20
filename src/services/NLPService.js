/**
 * NLPService provides natural language processing capabilities
 * for understanding user messages in the chat interface.
 */
class NLPService {
  constructor() {
    // Initialize intent and topic patterns
    this.intentPatterns = {
      greeting: [
        'hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'
      ],
      thanks: [
        'thank', 'thanks', 'appreciate', 'grateful'
      ],
      goodbye: [
        'bye', 'goodbye', 'see you', 'farewell', 'until next time'
      ],
      pricing: [
        'price', 'cost', 'pricing', 'charge', 'fee', 'how much', 'package'
      ],
      services: [
        'service', 'offer', 'provide', 'what do you do', 'automation'
      ],
      contact: [
        'contact', 'reach', 'call', 'email', 'phone', 'talk to'
      ],
      consultation: [
        'consult', 'consultation', 'meeting', 'call', 'discuss', 'book'
      ]
    };
    
    this.topicPatterns = {
      pricing: [
        'price', 'cost', 'pricing', 'charge', 'fee', 'how much', 'package'
      ],
      services: [
        'service', 'offer', 'provide', 'what do you do', 'automation', 'email', 'social', 'crm', 'support'
      ],
      contact: [
        'contact', 'reach', 'call', 'email', 'phone', 'talk to'
      ],
      about: [
        'about', 'who', 'company', 'background', 'history', 'team'
      ]
    };
  }

  /**
   * Process a message and extract intent and entities
   */
  async processMessage(message) {
    const normalizedMessage = message.toLowerCase();
    
    // Extract intent
    const intent = this.extractIntent(normalizedMessage);
    
    // Extract topic
    const topic = this.extractTopic(normalizedMessage);
    
    // Extract entities (like dates, numbers, etc.)
    const entities = this.extractEntities(normalizedMessage);
    
    return {
      intent,
      topic,
      entities
    };
  }

  /**
   * Extract the primary intent from a message
   */
  extractIntent(message) {
    for (const [intent, patterns] of Object.entries(this.intentPatterns)) {
      if (patterns.some(pattern => message.includes(pattern))) {
        return intent;
      }
    }
    
    return null;
  }

  /**
   * Extract the primary topic from a message
   */
  extractTopic(message) {
    for (const [topic, patterns] of Object.entries(this.topicPatterns)) {
      if (patterns.some(pattern => message.includes(pattern))) {
        return topic;
      }
    }
    
    return null;
  }

  /**
   * Extract entities from a message (basic implementation)
   */
  extractEntities(message) {
    // This is a simplified implementation
    const entities = {};
    
    // Extract email addresses
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
    const emails = message.match(emailRegex);
    if (emails && emails.length > 0) {
      entities.email = emails[0];
    }
    
    // Extract phone numbers (basic pattern)
    const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
    const phones = message.match(phoneRegex);
    if (phones && phones.length > 0) {
      entities.phone = phones[0];
    }
    
    return entities;
  }
}

export default NLPService;
