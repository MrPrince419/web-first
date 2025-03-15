export const websiteContent = [
  {
    id: 'hours',
    text: 'We are open Monday through Sunday, 8:00 AM to 10:00 PM EST. We\'re flexible and can accommodate clients in different time zones or with specific scheduling needs.',
    keywords: ['hours', 'time', 'schedule', 'open', 'available', 'weekend'],
    type: 'info'
  },
  {
    id: 'services',
    text: 'We offer AI-powered automation solutions including email management, social media automation, CRM integration, and custom workflow development.',
    keywords: ['service', 'automation', 'offer', 'provide', 'help'],
    type: 'info'
  },
  {
    id: 'contact',
    text: 'Would you like to discuss your project? Visit our contact page to schedule a consultation.',
    keywords: ['contact', 'reach', 'talk', 'connect', 'schedule'],
    type: 'link',
    url: '/contact'
  },
  {
    id: 'pricing',
    text: 'Our pricing starts at $500/month for the Starter Plan. We also offer Growth ($900/month) and Enterprise ($1500/month) plans. Each plan includes different levels of automation and support.',
    keywords: ['price', 'cost', 'plan', 'package', 'fee', 'starter', 'growth', 'enterprise'],
    type: 'info',
    suggestions: ['Tell me more about the Growth plan', 'What\'s included in Enterprise?']
  },
  {
    id: 'implementation',
    text: 'Implementation typically takes 2-4 weeks, including consultation, setup, and training. We ensure a smooth transition with comprehensive support.',
    keywords: ['implement', 'setup', 'start', 'begin', 'timeline', 'process'],
    type: 'info',
    suggestions: ['What\'s the implementation process?', 'How long is training?']
  }
  // Add more content sections as needed
];

export const commonQueries = [
  {
    pattern: 'pricing|cost|fee',
    suggestions: ['View our pricing plans', 'Schedule a consultation', 'Learn about custom solutions']
  }
  // Add more patterns...
];
