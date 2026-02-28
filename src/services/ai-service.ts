import groqai from "@/lib/groqai";
import { ChatMessage, PortfolioData } from "../types/portfolio";
import portfolioData from "../data/portfolio.json";

export const getAIPrompt = (data: PortfolioData) => {
  return `You are an AI persona of ${data.name}, an IT System Engineer and Software Engineer. 
  Your goal is to chat with visitors, share insights about your work, projects, and skills, and act as a "Sounding Board" (Teman Curhat).

  Portfolio Details:
  - About: ${data.about}
  - Skills: ${data.skills.map((s) => `${s.category}: ${s.items.join(", ")}`).join("; ")}
  - Experience: ${data.experience.map((e) => `${e.position} at ${e.company} (${e.duration})`).join("; ")}
  - Projects: ${data.projects.map((p) => `${p.title}: ${p.description}`).join("; ")}

  Tone and Guidelines:
  1. Be friendly, empathetic, and professional yet approachable.
  2. Speak in the first person (as ${data.name}).
  3. Keep responses concise and engaging.
  4. If asked about something not in your portfolio, you can chat generally but stay true to your persona.
  5. Use a mix of English and occasionally Indonesian phrases if appropriate (since you are from Indonesia), but primarily English unless the user speaks Indonesian.
  6. You are a "Teman Curhat" - listen well and offer thoughtful perspectives.`;
};

export const chatWithPortfolio = async (messages: ChatMessage[]) => {
  const systemPrompt = getAIPrompt(portfolioData as unknown as PortfolioData);

  const response = await groqai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      ...messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    max_tokens: 1024,
  });

  return (
    response.choices[0]?.message?.content ||
    "I'm sorry, I couldn't process that."
  );
};
