
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTasteRecommendation = async (userMood: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User mood: "${userMood}". Recommend something from Lola's Café menu in Abraka. Menu includes: Coffee (Latte, Macchiato), Cold (Smoothies, Zobo Hibiscus), Pastries (Croissants), and Snacks (Spiced Wraps). Keep it warm, elegant, and inviting.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            pairing: { type: Type.STRING }
          },
          required: ["recommendation", "reasoning", "pairing"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return {
      recommendation: "Abraka Gold Latte",
      reasoning: "It's our house favorite and always hits the spot.",
      pairing: "A warm Butter Croissant."
    };
  }
};
