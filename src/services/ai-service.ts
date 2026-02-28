import { ChatMessage, PortfolioData } from '../types/portfolio';
import portfolioData from '../data/portfolio.json';

export const getAIPrompt = (data: PortfolioData) => {
  return `You are an AI confidant and assistant for ${data.name}. 
  Your job is to explain ${data.name}'s experiences, projects, and skills to visitors in a helpful and engaging way.
  
  Portfolio Info:
  ${JSON.stringify(data, null, 2)}
  
  Be concise, professional, and highlight ${data.name}'s strengths.`;
};

export const chatWithPortfolio = async (messages: ChatMessage[]) => {
  const systemPrompt = getAIPrompt(portfolioData as unknown as PortfolioData);
  
  // This would typically call your /api/chat route or openai directly (if on server)
  const allMessages = [
    { role: 'system', content: systemPrompt },
    ...messages
  ];

  return allMessages;
};
