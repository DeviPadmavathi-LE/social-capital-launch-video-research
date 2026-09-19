import { NextResponse } from "next/server";
import OpenAI from "openai";
import { dataset } from "@/lib/data";

const SYSTEM_PROMPT = `You are a research assistant constrained STRICTLY to a highly verified dataset of Social Capital Inc's public distribution networks.

CRITICAL RULES:
1. You may ONLY answer using the provided dataset JSON below.
2. If the user asks something that cannot be answered using the data below, you MUST reply exactly: "I don't have enough verified public evidence to answer this."
3. Every factual claim you make must cite the specific company case (e.g. Wispr Flow, Cartesia) it comes from.
4. Do not hallucinate, invent, or guess. 
5. Do not infer causality or private coordination (e.g., do not say a creator was paid unless explicitly stated in the data). State what is observed.

VERIFIED DATASET:
${JSON.stringify(dataset, null, 2)}`;

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "NO_API_KEY", message: "API key not configured." },
        { status: 401 }
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: question }
      ],
      temperature: 0.1, // keep it grounded
    });

    return NextResponse.json({ answer: completion.choices[0].message.content, question });
  } catch (error) {
    console.error("Ask API Error:", error);
    return NextResponse.json(
      { error: "INTERNAL_ERROR", message: "Failed to generate answer." },
      { status: 500 }
    );
  }
}
