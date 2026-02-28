import { NextRequest, NextResponse } from "next/server";
import { chatWithPortfolio } from "@/services/ai-service";
import { ChatMessage } from "@/types/portfolio";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required and must be an array" },
        { status: 400 },
      );
    }

    const aiResponse = await chatWithPortfolio(messages as ChatMessage[]);

    return NextResponse.json({ message: aiResponse });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
