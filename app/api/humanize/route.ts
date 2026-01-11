import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { text, tone } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "Text is required" }, { status: 400 });
        }

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OpenAI API Key not configured" }, { status: 500 });
        }

        let systemPrompt = "You are an expert editor. Rewrite the following AI-generated text to make it sound more natural, human, and engaging. Avoid repetitive sentence structures and robotic phrasing.";

        if (tone === "casual") {
            systemPrompt += " Use a casual, conversational tone. It's okay to use idioms and contractions.";
        } else if (tone === "academic") {
            systemPrompt += " Use a formal, academic tone suitable for research papers.";
        } else if (tone === "aggressive") {
            systemPrompt += " Rewrite heavily to completely change the structure while keeping the meaning. Make it undetectable as AI.";
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: text },
            ],
            temperature: 0.7,
        });

        const humanizedText = response.choices[0]?.message?.content || "";

        return NextResponse.json({ text: humanizedText });
    } catch (error) {
        console.error("Error humanizing text:", error);
        return NextResponse.json({ error: "Failed to humanize text" }, { status: 500 });
    }
}
