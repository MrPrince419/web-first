import { 
  FaRocket, FaEnvelope, FaCalendarAlt, FaBook, 
  FaLink, FaPaperPlane, FaRobot, FaComments, 
  FaSyncAlt, FaDatabase, FaChartLine, FaShoppingCart
} from 'react-icons/fa';

// Icons for responses
export const chatIcons = {
  robot: FaRobot,
  email: FaEnvelope,
  calendar: FaCalendarAlt,
  book: FaBook,
  link: FaLink,
  contact: FaPaperPlane,
  schedule: FaCalendarAlt,
  social: FaComments,
  crm: FaSyncAlt,
  data: FaDatabase,
  growth: FaChartLine,
  ecommerce: FaShoppingCart,
  service: FaRocket
};

// Quick reply options
export const quickReplies = [
  {
    text: "Learn About Our Services",
    value: "What services do you offer?",
    icon: chatIcons.service
  },
  {
    text: "See Our Projects",
    value: "Show me your portfolio",
    icon: chatIcons.link
  },
  {
    text: "Set Up a Consultation",
    value: "I want to book a consultation",
    icon: chatIcons.schedule
  },
  {
    text: "Read Our Blog",
    value: "Do you have blog posts?",
    icon: chatIcons.book
  },
  {
    text: "Contact Us",
    value: "How can I contact you?",
    icon: chatIcons.contact
  }
];

// Chat knowledge base with better topical organization
export const chatResponses = [
  // Greetings
  {
    keywords: ['hi', 'hello', 'hey', 'howdy', 'greetings'],
    response: "Hey there! I'm your AI assistant for Prince AI Automation. How can I help you today? 🤖",
    icon: chatIcons.robot,
    contextTopic: "greeting",
    suggestions: ['What services do you offer?', 'Tell me about your portfolio', 'How much does it cost?']
  },
  
  // Business Help
  {
    keywords: ['business help', 'help with my business', 'help me', 'i need help'],
    response: "I'd love to help with your business! We offer AI automation services including Email Automation, Social Media Management, CRM Integration, and Data Processing. Which area are you interested in? 🤖",
    icon: chatIcons.service,
    contextTopic: "services",
    suggestions: ['Email Automation', 'Social Media', 'CRM Integration', 'Data Processing'],
    decisionTree: "needHelp"
  },
  
  // Service-related
  {
    keywords: ['service', 'offer', 'help', 'automation', 'automate', 'what do you do'],
    response: "We offer AI automation services including Email Automation, Social Media Management, CRM Integration, and Data Processing. Which area are you interested in? 🤖",
    icon: chatIcons.service,
    contextTopic: "services",
    suggestions: ['Email Automation', 'Social Media', 'CRM Integration', 'Data Processing']
  },
  
  // Email automation
  {
    keywords: ['email', 'mail', 'newsletter', 'campaign', 'inbox'],
    response: "Email Automation can streamline your communication and boost conversions! We've done projects like an abandoned cart recovery system that increased sales by 15%. What kind of email automation are you looking for? 📧",
    icon: chatIcons.email,
    contextTopic: "emailAutomation",
    category: "email",
    suggestions: ['Show me examples', 'How much does it cost?', 'Book a consultation'],
    decisionTree: "emailAutomation"
  },
  
  // Social media
  {
    keywords: ['social', 'facebook', 'instagram', 'twitter', 'linkedin', 'post', 'media'],
    response: "Social Media Management automation can save you time and improve engagement! We've built tools like an automated content calendar for a restaurant chain. What social media needs do you have? 📅",
    icon: chatIcons.social,
    contextTopic: "socialMedia",
    category: "social",
    suggestions: ['Show me examples', 'How much does it cost?', 'Book a consultation']
  },
  
  // CRM Integration
  {
    keywords: ['crm', 'customer', 'relationship', 'salesforce', 'hubspot', 'zoho', 'lead'],
    response: "CRM Integration can help you manage leads and customers more effectively! We've developed an AI-powered lead scoring system for a B2B company. What CRM challenges are you facing? 📊",
    icon: chatIcons.crm,
    contextTopic: "crmIntegration",
    category: "crm",
    suggestions: ['Show me examples', 'How much does it cost?', 'Book a consultation']
  },
  
  // Data processing
  {
    keywords: ['data', 'process', 'analysis', 'analytics', 'report', 'insight'],
    response: "Our Data Processing automation can help you extract insights, generate reports, and make informed decisions. One client reduced reporting time by 98%! What kind of data processing needs do you have? 📈",
    icon: chatIcons.data,
    contextTopic: "dataProcessing",
    category: "data",
    suggestions: ['Show me examples', 'Tell me about analytics automation', 'Book a consultation']
  },
  
  // Analytics specific
  {
    keywords: ['analytics automation', 'analytics', 'dashboard'],
    response: "Analytics automation can help you turn raw data into actionable insights! For example, we built a data pipeline for an e-commerce platform that cut reporting time by 40%. What kind of analytics are you looking to automate? 📊",
    icon: chatIcons.data,
    contextTopic: "dataProcessing",
    category: "data",
    suggestions: ['Show me examples', 'How much does it cost?', 'Book a consultation']
  },
  
  // Portfolio questions
  {
    keywords: ['portfolio', 'project', 'case', 'study', 'example', 'work', 'your work'],
    response: "We have 9 projects in our portfolio, covering Email Automation, Social Media, CRM Integration, and Data Processing. Want to see projects in a specific category? 🔗",
    icon: chatIcons.link,
    contextTopic: "portfolio",
    suggestions: ['Email Automation projects', 'Social Media projects', 'CRM projects', 'Data Processing projects'],
    decisionTree: "portfolioCategories"
  },
  
  // Examples request
  {
    keywords: ['example', 'examples', 'showcase', 'show me', 'done before'],
    response: "I'd be happy to share some examples! Which type of automation are you interested in seeing examples for? 🔗",
    icon: chatIcons.link,
    contextTopic: "examples",
    suggestions: ['Email Automation examples', 'Social Media examples', 'CRM examples', 'Data Processing examples']
  },
  
  // E-commerce specific
  {
    keywords: ['ecommerce', 'e-commerce', 'shop', 'store', 'retail', 'product', 'cart'],
    response: "We've helped e-commerce businesses automate order management, abandoned cart recovery, and inventory tracking. One client reduced manual work by 85% and increased sales by 15%! Would you like to discuss your e-commerce automation needs? 🛒",
    icon: chatIcons.ecommerce,
    contextTopic: "ecommerce",
    category: "ecommerce",
    suggestions: ['E-commerce portfolio', 'Abandoned cart automation', 'Book a consultation']
  },
  
  // Pricing related
  {
    keywords: ['price', 'cost', 'fee', 'budget', 'expensive', 'cheap', 'affordable', 'pricing', 'how much'],
    response: "Our pricing starts at $500 CAD/month for our Starter Plan, $900 CAD/month for our Growth Plan, and $1500+ CAD/month for our Enterprise Plan. Would you like to learn more about a specific plan? 💰",
    icon: chatIcons.link,
    contextTopic: "pricing",
    suggestions: ['Tell me about the Starter Plan', 'Tell me about the Growth Plan', 'Tell me about the Enterprise Plan', 'Book a consultation']
  },
  
  // Starter Plan
  {
    keywords: ['starter plan', 'basic plan', 'starter'],
    response: "The Starter Plan at $500 CAD/month is perfect for small businesses beginning their automation journey. It includes email automation setup, basic social media scheduling, a monthly strategy call, email support, and 1 workflow automation. Would you like to book a consultation to discuss this plan? 🗓️",
    icon: chatIcons.link,
    contextTopic: "pricing",
    category: "starter_plan",
    suggestions: ['Book a consultation', 'Tell me about the Growth Plan', "What's included in workflow automation?"]
  },
  
  // Growth Plan
  {
    keywords: ['growth plan', 'professional plan', 'growth'],
    response: "Our popular Growth Plan at $900 CAD/month includes everything in Starter plus advanced CRM integration, customer support automation, bi-weekly strategy calls, 3 workflow automations, and priority email support. It's designed for businesses ready to scale their automation. Interested in discussing this plan? 🚀",
    icon: chatIcons.growth,
    contextTopic: "pricing",
    category: "growth_plan",
    suggestions: ['Book a consultation', 'Tell me about the Enterprise Plan', 'What are the payment terms?']
  },
  
  // Enterprise Plan
  {
    keywords: ['enterprise plan', 'advanced plan', 'enterprise'],
    response: "Our Enterprise Plan at $1500+ CAD/month includes everything in Growth plus full marketing automation, custom AI implementation, weekly strategy calls, unlimited workflow automations, custom integrations, and priority support. It's ideal for larger businesses with complex automation needs. Shall we discuss if this is right for you? 🏢",
    icon: chatIcons.link,
    contextTopic: "pricing",
    category: "enterprise_plan",
    suggestions: ['Book a consultation', 'Enterprise plan case studies', "What's the onboarding process?"]
  },
  
  // Consultation requests
  {
    keywords: ['consult', 'book', 'schedule', 'call', 'meet', 'talk', 'appointment'],
    response: "Great! You can set up a consultation by filling out our Contact form. Would you like me to take you to our contact page where you can schedule a convenient time? 🗓️",
    icon: chatIcons.calendar,
    contextTopic: "consultation",
    suggestions: ['Yes, take me there', 'What happens in a consultation?', 'Tell me about your services first']
  },
  
  // Consultation details
  {
    keywords: ['what happens', 'consultation like', 'what to expect', 'consultation process'],
    response: "In a consultation, we'll discuss your business goals, identify areas where AI automation can help, and create a custom plan for you. It's a 30-minute call with one of our experts, and it's completely free! Ready to book? 🗓️",
    icon: chatIcons.calendar,
    contextTopic: "consultation",
    suggestions: ['Yes, book now', 'Tell me about pricing first', 'Tell me about your services first']
  },
  
  // Contact info
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'touch'],
    response: "You can reach us by email at uwagboe.o.p@gmail.com or by filling out our Contact form. We're based in Sault Ste. Marie, Ontario, Canada, but work with clients worldwide remotely. Would you like to go to our contact page? ✉️",
    icon: chatIcons.contact,
    contextTopic: "contact",
    suggestions: ['Go to Contact page', 'Book a consultation', 'What are your hours?']
  },
  
  // Blog related
  {
    keywords: ['blog', 'article', 'post', 'read', 'insight', 'tip'],
    response: "We have a blog with articles on AI automation, small business tips, marketing automation, and more. Our most popular post is '7 Ways AI Automation Can Boost Your Small Business'. Would you like to read it? 📖",
    icon: chatIcons.book,
    contextTopic: "blog",
    suggestions: ['Read that blog post', 'Go to Blog page', 'Show me other blog topics']
  },
  
  // Small business specific
  {
    keywords: ['small business', 'startup', 'entrepreneur', 'sole', 'local'],
    response: "We specialize in helping small businesses leverage AI automation to compete with larger companies. Our blog post '7 Ways AI Automation Can Boost Your Small Business' covers how automation saves time and reduces costs. Would you like to read it? 🚀",
    icon: chatIcons.growth,
    contextTopic: "smallBusiness",
    suggestions: ['Read the blog post', 'Small business pricing', 'Book a consultation']
  },
  
  // Working hours
  {
    keywords: ['hour', 'time', 'schedule', 'open', 'available', 'when'],
    response: "We're available Monday through Sunday, 8:00 AM to 10:00 PM EST. We offer flexible scheduling to accommodate clients in different time zones. When would be a good time for you to connect? 🗓️",
    icon: chatIcons.calendar,
    contextTopic: "hours",
    suggestions: ['Book a consultation', 'Contact now', 'Tell me about your services']
  },
  
  // Industries served
  {
    keywords: ['industry', 'sector', 'market', 'field', 'niche'],
    response: "We work with businesses across various industries including e-commerce, healthcare, real estate, marketing agencies, and financial services. Our automation solutions are customized to your specific industry needs. What industry are you in? 🏢",
    icon: chatIcons.service,
    contextTopic: "industries",
    suggestions: ['E-commerce automation', 'Healthcare automation', 'Real estate automation', 'Marketing automation'],
    decisionTree: "industrySpecific"
  },
  
  // Project timeline
  {
    keywords: ['time', 'long', 'duration', 'timeline', 'when', 'finish', 'how long'],
    response: "Project timelines vary based on complexity, but typically range from 2-8 weeks for implementation. We always begin with a discovery phase to set clear expectations. Would you like to discuss your project timeline? ⏱️",
    icon: chatIcons.calendar,
    contextTopic: "timeline",
    suggestions: ['Book a discovery call', 'Typical project phases', 'Start now']
  }
];

// Enhanced follow-up responses based on context
export const followUpResponses = [
  // Follow-ups for email automation
  {
    context: "emailAutomation",
    keywords: ['example', 'examples', 'show me', 'case study', 'portfolio'],
    response: "Here are some examples of our email automation projects: 1) An abandoned cart recovery system for an e-commerce store that increased sales by 15%. 2) An onboarding email sequence for a SaaS company that boosted user activation by 20%. 3) A newsletter system that increased open rates by 40% through smart segmentation. Want to discuss your email automation needs? 📧",
    suggestions: ['Book a consultation', 'Tell me about pricing', 'What other services do you offer?']
  },
  {
    context: "emailAutomation",
    keywords: ['price', 'cost', 'pricing', 'how much'],
    response: "Email automation pricing starts at $500 CAD/month with our Starter Plan. The exact cost depends on complexity, volume, and integrations needed. For a more accurate quote based on your specific needs, we recommend booking a consultation. 💰",
    suggestions: ['Book a consultation', 'Tell me about plans', 'What does email automation include?'],
    newTopic: "pricing"
  },
  {
    context: "emailAutomation",
    keywords: ['book', 'consult', 'schedule', 'talk', 'call'],
    response: "Great! You can book a consultation to discuss your email automation needs by filling out our contact form. Would you like me to take you to our contact page? 🗓️",
    suggestions: ['Yes, take me there', 'What happens in a consultation?', 'Tell me about pricing first'],
    newTopic: "consultation",
    navigateTo: "contact"
  },
  
  // Follow-ups for social media
  {
    context: "socialMedia",
    keywords: ['example', 'examples', 'show me', 'case study', 'portfolio'],
    response: "Here are some examples of our social media automation: 1) A content calendar system for a restaurant chain that increased engagement by 45%. 2) An ad management platform for a retail brand that boosted ROI by 30%. 3) A social listening tool that helped a B2B company identify and engage with potential leads. Want to learn more? 📱",
    suggestions: ['Book a consultation', 'Tell me about pricing', 'What other services do you offer?']
  },
  {
    context: "socialMedia",
    keywords: ['price', 'cost', 'pricing', 'how much'],
    response: "Social media automation pricing starts at $500 CAD/month with our Starter Plan. The exact cost depends on the platforms, posting frequency, and analytics needs. For a personalized quote, we recommend booking a consultation. 💰",
    suggestions: ['Book a consultation', 'Tell me about plans', 'What does social media automation include?'],
    newTopic: "pricing"
  },
  {
    context: "socialMedia",
    keywords: ['book', 'consult', 'schedule', 'talk', 'call'],
    response: "Great! You can book a consultation to discuss your social media automation needs by filling out our contact form. Would you like me to take you to our contact page? 🗓️",
    suggestions: ['Yes, take me there', 'What happens in a consultation?', 'Tell me about pricing first'],
    newTopic: "consultation",
    navigateTo: "contact"
  },
  
  // Follow-ups for CRM integration
  {
    context: "crmIntegration",
    keywords: ['example', 'examples', 'show me', 'case study', 'portfolio'],
    response: "Our CRM integration projects include: 1) An AI lead scoring system for a B2B company that improved conversion by 45%. 2) A customer support chatbot for a SaaS company that handles 70% of inquiries automatically. 3) A unified CRM dashboard that connects sales, marketing, and support data. Would you like to discuss your CRM needs? 📊",
    suggestions: ['Book a consultation', 'Tell me about pricing', 'What other services do you offer?']
  },
  {
    context: "crmIntegration",
    keywords: ['price', 'cost', 'pricing', 'how much'],
    response: "CRM integration pricing typically starts at $900 CAD/month with our Growth Plan due to its complexity. The exact cost depends on your CRM platform, integrations needed, and customization requirements. Let's discuss your needs for an accurate quote. 💰",
    suggestions: ['Book a consultation', 'Tell me about plans', 'What does CRM integration include?'],
    newTopic: "pricing"
  },
  {
    context: "crmIntegration",
    keywords: ['book', 'consult', 'schedule', 'talk', 'call'],
    response: "Great! You can book a consultation to discuss your CRM integration needs by filling out our contact form. Would you like me to take you to our contact page? 🗓️",
    suggestions: ['Yes, take me there', 'What happens in a consultation?', 'Tell me about pricing first'],
    newTopic: "consultation",
    navigateTo: "contact"
  },
  
  // Follow-ups for data processing
  {
    context: "dataProcessing",
    keywords: ['example', 'examples', 'show me', 'case study', 'portfolio'],
    response: "Our data processing projects include: 1) An invoice processing system for an accounting firm that cut manual work by 85%. 2) A data pipeline for e-commerce analytics that reduced reporting time by 40%. 3) An automated report generation system for a marketing agency that delivers daily insights. Interested in discussing your data needs? 📈",
    suggestions: ['Book a consultation', 'Tell me about pricing', 'What other services do you offer?']
  },
  {
    context: "dataProcessing",
    keywords: ['price', 'cost', 'pricing', 'how much'],
    response: "Data processing automation typically starts at $900 CAD/month with our Growth Plan. The exact cost depends on data volume, complexity of processing, and integration requirements. For data-intensive enterprises, our Enterprise Plan at $1500+ CAD/month might be more suitable. 💰",
    suggestions: ['Book a consultation', 'Tell me about plans', 'What does data processing include?'],
    newTopic: "pricing"
  },
  {
    context: "dataProcessing",
    keywords: ['book', 'consult', 'schedule', 'talk', 'call'],
    response: "Great! You can book a consultation to discuss your data processing needs by filling out our contact form. Would you like me to take you to our contact page? 🗓️",
    suggestions: ['Yes, take me there', 'What happens in a consultation?', 'Tell me about pricing first'],
    newTopic: "consultation",
    navigateTo: "contact"
  },
  {
    context: "dataProcessing",
    keywords: ['analytics', 'analytics automation', 'dashboard', 'reporting'],
    response: "Analytics automation can transform raw data into actionable insights automatically. We've built dashboards that update in real-time, automated report generation systems, and predictive analytics tools that forecast trends. What kind of analytics are you looking to implement? 📊",
    suggestions: ['Book a consultation', 'Show me analytics examples', 'Tell me about pricing']
  },
  
  // Follow-ups for pricing
  {
    context: "pricing",
    keywords: ['starter plan', 'basic', 'starter'],
    response: "The Starter Plan at $500 CAD/month is perfect for small businesses beginning their automation journey. It includes email automation setup, basic social media scheduling, a monthly strategy call, email support, and 1 workflow automation. Would you like to book a consultation to discuss this plan? 🗓️",
    suggestions: ['Book a consultation', 'Tell me about the Growth Plan', "What's included in workflow automation?"],
    category: "starter_plan"
  },
  {
    context: "pricing",
    keywords: ['growth plan', 'professional', 'growth'],
    response: "Our popular Growth Plan at $900 CAD/month includes everything in Starter plus advanced CRM integration, customer support automation, bi-weekly strategy calls, 3 workflow automations, and priority email support. It's designed for businesses ready to scale their automation. Interested in discussing this plan? 🚀",
    suggestions: ['Book a consultation', 'Tell me about the Enterprise Plan', 'What are the payment terms?'],
    category: "growth_plan"
  },
  {
    context: "pricing",
    keywords: ['enterprise plan', 'advanced', 'enterprise'],
    response: "Our Enterprise Plan at $1500+ CAD/month includes everything in Growth plus full marketing automation, custom AI implementation, weekly strategy calls, unlimited workflow automations, custom integrations, and priority support. It's ideal for larger businesses with complex automation needs. Shall we discuss if this is right for you? 🏢",
    suggestions: ['Book a consultation', 'Enterprise plan case studies', "What's the onboarding process?"],
    category: "enterprise_plan"
  },
  {
    context: "pricing",
    keywords: ['book', 'consult', 'schedule', 'talk', 'call'],
    response: "Great! You can book a consultation to discuss our pricing plans and which would best suit your needs. Would you like me to take you to our contact page? 🗓️",
    suggestions: ['Yes, take me there', 'What happens in a consultation?', 'Tell me more about plans first'],
    newTopic: "consultation",
    navigateTo: "contact"
  },
  {
    context: "pricing",
    keywords: ['workflow', 'automation', 'what include', 'what is workflow'],
    response: "A workflow automation refers to automating a sequence of tasks in your business process. For example, automatically sending follow-up emails when a lead fills out your contact form, or processing incoming data and updating your CRM. Each plan includes a different number of these custom workflows. 🔄",
    suggestions: ['Book a consultation', 'Tell me about the plans', 'What services do you offer?']
  },
  {
    context: "pricing",
    keywords: ['payment', 'terms', 'contract', 'commitment'],
    response: "We offer monthly subscription plans with no long-term contracts. There's a one-time setup fee of $150 CAD which is applied to your first month's payment. We also have annual plans that offer a 10% discount compared to monthly billing. 💰",
    suggestions: ['Book a consultation', 'Tell me more about plans', 'Do you offer custom pricing?']
  },
  
  // Follow-ups for consultation
  {
    context: "consultation",
    keywords: ['yes', 'take me', 'contact page', 'book', 'schedule'],
    response: "Great! I'll take you to our contact page where you can schedule your consultation. Looking forward to discussing your automation needs! 🗓️",
    navigateTo: "contact"
  },
  {
    context: "consultation",
    keywords: ['what happen', 'detail', 'expect', 'process', 'like'],
    response: "In a consultation, we'll discuss your business goals, identify areas where AI automation can help, and create a custom plan for you. It's a 30-minute call with one of our experts, and it's completely free! Ready to book? 🗓️",
    suggestions: ['Yes, take me to contact page', 'Tell me about pricing first', 'What should I prepare?']
  },
  {
    context: "consultation",
    keywords: ['prepare', 'bring', 'need to', 'should i'],
    response: "For the consultation, it helps to think about your current business processes, pain points you'd like to solve, and any specific goals you have for automation. But don't worry if you're not sure - we'll guide the conversation and help identify the best opportunities! 🗓️",
    suggestions: ['Schedule a consultation', 'Tell me about pricing first', 'Learn about your services']
  },
  
  // Follow-ups for portfolio
  {
    context: "portfolio",
    keywords: ['email', 'mail', 'newsletter', 'campaign'],
    response: "In our email automation portfolio, we've developed abandoned cart recovery systems, customer onboarding sequences, and newsletter automation tools. One e-commerce client saw a 15% increase in recovered sales with our abandoned cart system. Would you like to learn more about our email automation services? 📧",
    suggestions: ['Tell me about email automation', 'Show me other projects', 'Book a consultation'],
    newTopic: "emailAutomation"
  },
  {
    context: "portfolio",
    keywords: ['social', 'facebook', 'instagram', 'twitter', 'media'],
    response: "Our social media portfolio includes projects like an automated content calendar for a restaurant chain that increased engagement by 45% and an ad management platform that boosted ROI by 30% for a retail brand. Interested in learning more about our social media automation? 📱",
    suggestions: ['Tell me about social media automation', 'Show me other projects', 'Book a consultation'],
    newTopic: "socialMedia"
  },
  {
    context: "portfolio",
    keywords: ['crm', 'customer', 'relationship'],
    response: "Our CRM integration projects include an AI lead scoring system that improved conversion by 45% for a B2B company and a customer support chatbot that handles 70% of inquiries for a SaaS provider. Would you like to discuss how we could improve your CRM systems? 📊",
    suggestions: ['Tell me about CRM integration', 'Show me other projects', 'Book a consultation'],
    newTopic: "crmIntegration"
  },
  {
    context: "portfolio",
    keywords: ['data', 'process', 'analytics', 'report'],
    response: "In our data processing portfolio, we've built an invoice processing system for an accounting firm and a data pipeline for e-commerce analytics that reduced reporting time by 40%. What kind of data challenges is your business facing? 📈",
    suggestions: ['Tell me about data processing', 'Show me other projects', 'Book a consultation'],
    newTopic: "dataProcessing"
  }
];

// Decision trees for multi-step conversations
export const decisionTrees = {
  needHelp: {
    question: "Let's narrow it down! What type of business do you have? For example, e-commerce, service-based, or something else? 🏢",
    options: [
      {
        text: "E-commerce",
        response: "Great! For e-commerce businesses, we can help with things like email automation for abandoned carts, inventory management, or order processing. Which area interests you most? 🛒",
        suggestions: ['Email automation', 'Inventory management', 'Order processing'],
        icon: chatIcons.ecommerce,
        contextTopic: "ecommerce",
        category: "ecommerce"
      },
      {
        text: "Service-based",
        response: "Perfect! For service-based businesses, we can help with appointment scheduling, client follow-ups, or CRM integration. What's your biggest challenge right now? 🤝",
        suggestions: ['Appointment scheduling', 'Client follow-ups', 'CRM integration'],
        icon: chatIcons.service,
        contextTopic: "service",
        category: "service"
      },
      {
        text: "Other",
        response: "No problem! We work with many different business types. What's the main challenge you're looking to solve with automation? 🤖",
        suggestions: ['Save time', 'Reduce errors', 'Improve customer experience'],
        icon: chatIcons.robot
      }
    ]
  },
  
  emailAutomation: {
    question: "What kind of email automation are you interested in? 📧",
    options: [
      {
        text: "Newsletters",
        response: "Newsletter automation can help you consistently engage with your audience. We can set up personalized newsletter systems that segment your audience for better open rates. Would you like to see some newsletter automation examples? 📧",
        suggestions: ['Show me examples', 'Newsletter pricing', 'Book a consultation'],
        icon: chatIcons.email,
        contextTopic: "emailAutomation",
        category: "newsletters"
      },
      {
        text: "Customer follow-ups",
        response: "Automated customer follow-ups can boost retention and satisfaction. We've implemented systems that increased repeat business by 40%. Would you like to discuss your follow-up automation needs? 📧",
        suggestions: ['Tell me more', 'See examples', 'Book a consultation'],
        icon: chatIcons.email,
        contextTopic: "emailAutomation",
        category: "followups"
      },
      {
        text: "Abandoned cart",
        response: "Our abandoned cart email automation can help recover potential lost sales. One client saw a 15% increase in recovered carts! Shall we discuss how this could work for your business? 🛒",
        suggestions: ['Tell me more', 'Pricing for this', 'Book a consultation'],
        icon: chatIcons.ecommerce,
        contextTopic: "emailAutomation",
        category: "carts"
      }
    ]
  },
  
  portfolioCategories: {
    question: "Which type of projects would you like to explore? 📁",
    options: [
      {
        text: "Email Automation",
        response: "We've developed email automation systems for e-commerce businesses, SaaS companies, and service providers. Our email projects have helped increase open rates by up to 40% and conversion rates by 25%. Would you like to see specific email automation examples? 📧",
        suggestions: ['E-commerce examples', 'SaaS examples', 'Service business examples'],
        icon: chatIcons.email,
        contextTopic: "emailAutomation",
        category: "email"
      },
      {
        text: "Social Media",
        response: "Our social media automation projects include content calendars, ad management systems, and engagement trackers. These have helped businesses increase their social media engagement by an average of 45%. Would you like to hear about a specific social media project? 📱",
        suggestions: ['Content calendar examples', 'Ad automation examples', 'Book a consultation'],
        icon: chatIcons.social,
        contextTopic: "socialMedia",
        category: "social"
      },
      {
        text: "CRM Integration",
        response: "We've built CRM integrations that connect sales, marketing, and customer service departments. These systems improve lead conversion by up to 45% and reduce response times by 60%. Would you like to learn about specific CRM integration projects? 🔄",
        suggestions: ['B2B examples', 'Service business examples', 'Book a consultation'],
        icon: chatIcons.crm,
        contextTopic: "crmIntegration",
        category: "crm"
      },
      {
        text: "Data Processing",
        response: "Our data processing projects include financial data analysis, invoice processing, and e-commerce analytics pipelines. These systems have reduced reporting time by up to 98% while improving accuracy. Interested in any specific data processing examples? 📊",
        suggestions: ['Financial examples', 'E-commerce examples', 'Book a consultation'],
        icon: chatIcons.data,
        contextTopic: "dataProcessing",
        category: "data"
      }
    ]
  },
  
  industrySpecific: {
    question: "Which industry are you in? 🏢",
    options: [
      {
        text: "E-commerce",
        response: "E-commerce businesses benefit greatly from our automation solutions! We can help with inventory management, order processing, abandoned cart recovery, and customer service automation. One e-commerce client increased their fulfillment speed by 65%. What's your biggest challenge right now? 🛒",
        suggestions: ['Inventory management', 'Order processing', 'Customer service', 'Marketing automation'],
        icon: chatIcons.ecommerce,
        contextTopic: "ecommerce",
        category: "ecommerce"
      },
      {
        text: "Healthcare",
        response: "For healthcare organizations, we offer HIPAA-compliant automation for appointment scheduling, patient follow-ups, and medical record processing. One clinic reduced no-shows by 35% with our system. What aspect of your healthcare business would you like to automate? 🏥",
        suggestions: ['Appointment scheduling', 'Patient engagement', 'Medical records', 'Book a consultation'],
        icon: chatIcons.service,
        contextTopic: "healthcare",
        category: "healthcare"
      },
      {
        text: "Real Estate",
        response: "Real estate businesses can benefit from our lead management, document processing, and client follow-up automation. One agency saved 15 hours per week with our system. What's your biggest real estate automation need? 🏠",
        suggestions: ['Lead management', 'Document processing', 'Client follow-ups', 'Book a consultation'],
        icon: chatIcons.crm,
        contextTopic: "realEstate",
        category: "realestate"
      },
      {
        text: "Other",
        response: "We work with many different industries! Our automation solutions can be customized to your specific business needs. What would you like to automate in your business? 🤖",
        suggestions: ['Email automation', 'Customer service', 'Book a consultation', 'See portfolio examples'],
        icon: chatIcons.robot
      }
    ]
  }
};

// Function to help process user messages
export const getRandomFallback = () => {
  const fallbackResponses = [
    {
      response: "I'm not sure about that, but I can help with AI automation for your business! Are you looking to automate email, social media, or something else? 🤖",
      suggestions: ['Email automation', 'Social media automation', 'CRM integration', 'Data processing']
    },
    {
      response: "I don't have information on that specific topic, but I'd be happy to connect you with our team who can help! Would you like to set up a consultation? 🗓️",
      suggestions: ['Book a consultation', 'Contact the team', 'Tell me about your services instead']
    },
    {
      response: "That's outside my area of expertise, but I can help you with business automation! What aspect of your business would you like to automate? 🤖",
      suggestions: ['Email marketing', 'Social media', 'Customer support', 'Data analysis']
    }
  ];
  
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
};

export const findResponseByKeywords = (input) => {
  for (const response of chatResponses) {
    if (response.keywords.some(keyword => input.includes(keyword))) {
      return response;
    }
  }
  
  return null;
};

export const getFollowUpResponse = (input, context) => {
  const { currentTopic } = context;
  
  // Find responses specific to the current context
  const contextResponses = followUpResponses.filter(response => 
    response.context === currentTopic
  );
  
  // Check if any match the input keywords
  for (const response of contextResponses) {
    if (response.keywords.some(keyword => input.includes(keyword))) {
      return response;
    }
  }
  
  return null;
};

export const getChatResponse = (input, context) => {
  // For now, delegate to the keyword matcher
  // This would be extended with more sophisticated context handling
  return findResponseByKeywords(input);
};

export const getDecisionTree = (treeId) => {
  return decisionTrees[treeId] || null;
};
