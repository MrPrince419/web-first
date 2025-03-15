import { websiteContent } from '../data/websiteContent';

class NLPService {
  calculateSimilarity(str1, str2) {
    // Implement improved Levenshtein distance
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    return (longer.length - this.editDistance(longer, shorter)) / longer.length;
  }

  editDistance(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const costs = [];
    
    for (let i = 0; i <= str1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= str2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else if (j > 0) {
          let newValue = costs[j - 1];
          if (str1.charAt(i - 1) !== str2.charAt(j - 1)) {
            newValue = Math.min(
              Math.min(newValue, lastValue),
              costs[j]
            ) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) costs[str2.length] = lastValue;
    }
    return costs[str2.length];
  }

  extractEntities(text) {
    // Implement entity extraction
    const entities = {
      dates: text.match(/\b\d{1,2}\/\d{1,2}\/\d{4}\b/g) || [],
      times: text.match(/\b\d{1,2}:\d{2}\b/g) || [],
      money: text.match(/\$\d+(?:\.\d{2})?/g) || []
    };
    return entities;
  }

  generateSuggestions(context) {
    // Generate contextual suggestions
    return context.recentTopics
      .map(topic => websiteContent.find(c => c.id === topic))
      .filter(Boolean)
      .flatMap(content => content.suggestions || []);
  }
}

const nlpService = new NLPService();

export default nlpService;
