export const knowledgeBase = {
  services: {
    crm_integration: {
      title: "CRM Integration",
      description: "Our CRM integration service connects and synchronizes your customer data across multiple platforms for seamless workflow.",
      details: `We help businesses automate their customer relationship management by:
        - Automating lead scoring and qualification
        - Synchronizing customer data across platforms
        - Creating automated follow-up sequences
        - Generating intelligent sales reports
        - Integrating with popular CRM platforms like HubSpot and Salesforce`,
      benefits: [
        "25% higher conversion rates",
        "50% faster lead qualification",
        "Improved customer data accuracy",
        "Automated customer journey tracking"
      ],
      case_study: "We helped a B2B software company achieve 25% higher conversion rates through our AI-powered lead scoring system.",
      pricing: "Included in Business Plan ($1,200/month) and Enterprise Plan",
      technologies: ["HubSpot", "Salesforce", "Python", "TensorFlow"]
    },
    email_automation: {
      title: "Email Automation",
      description: "Set up automated email sequences for customer onboarding, follow-ups, and marketing campaigns.",
      details: `Our email automation service includes:
        - Personalized response systems
        - Smart follow-up sequences
        - Newsletter campaign automation
        - Inbox management and prioritization
        - Customer engagement tracking`,
      benefits: [
        "Save 5-10 hours per week per employee",
        "Improved response times",
        "Higher customer engagement",
        "Consistent communication"
      ],
      case_study: "An e-commerce client reduced response times by 80% while saving 15 hours weekly on email management.",
      pricing: "Available in all plans, starting at $500/month",
      technologies: ["Zapier", "Mailchimp", "Custom API Integration"]
    },
    social_media: {
      title: "Social Media Management",
      description: "Automate content publishing, engagement tracking, and analytics reporting across platforms.",
      details: `Our social media automation includes:
        - Scheduled content publishing
        - Engagement monitoring
        - Performance analytics
        - Content recycling
        - Automated responding to common interactions`,
      benefits: [
        "40% increase in engagement",
        "10 hours saved weekly",
        "Consistent brand presence",
        "Data-driven content strategy"
      ],
      case_study: "Helped a restaurant chain increase social media engagement by 40% while saving 10 hours weekly on management.",
      pricing: "Starting at $500/month with Starter Plan",
      technologies: ["Buffer", "Canva", "Social Media APIs"]
    }
  },
  pricing: {
    starter: {
      name: "Starter Plan",
      price: "$500/month",
      features: [
        "1 workflow automation setup",
        "Monthly monitoring",
        "Email support"
      ],
      best_for: "Small businesses just beginning their automation journey"
    },
    business: {
      name: "Business Plan",
      price: "$1,200/month",
      features: [
        "Up to 3 workflow automations",
        "Weekly performance reports",
        "Priority chat support",
        "One-hour training session"
      ],
      best_for: "Growing businesses needing multiple automations"
    },
    enterprise: {
      name: "Enterprise Plan",
      price: "$1,500+/month",
      features: [
        "Unlimited workflow automations",
        "Custom API development",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      best_for: "Large organizations with complex automation needs"
    }
  },
  company: {
    about: {
      description: "Prince AI Automation specializes in helping businesses streamline operations through custom AI workflows.",
      location: "Based in Sault Ste. Marie, Ontario, Canada",
      remote: "Serving clients worldwide through remote collaboration",
      expertise: "Years of experience in AI automation and business process optimization"
    },
    hours: {
      schedule: "Monday through Sunday, 8:00 AM to 10:00 PM EST",
      flexibility: "Flexible scheduling available for clients in different time zones",
      response_time: "24-hour response guarantee for support inquiries"
    },
    contact: {
      email: "uwagboe.o.p@gmail.com",
      phone: "+1 249-356-4705",
      consultation: "Free initial consultation with $150 CAD fee applied to first invoice"
    }
  }
};

export const getTopicInfo = (topic, subtopic = null) => {
  const topicData = knowledgeBase[topic];
  if (!topicData) return null;
  if (subtopic && topicData[subtopic]) return topicData[subtopic];
  return topicData;
};
