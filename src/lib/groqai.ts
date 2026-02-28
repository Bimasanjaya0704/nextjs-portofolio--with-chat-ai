import Groq from "groq-sdk";

const groqai = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export default groqai;
