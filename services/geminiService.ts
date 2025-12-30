
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "../constants";

export const getTasteRecommendation = async (userMood: string) => {
  try {
    // Re-initialize to ensure the latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

    // Create a detailed menu string for the AI to understand the options
    const menuContext = MENU_ITEMS.map(item => `- ${item.name} (${item.category}): ${item.description}`).join('\n');

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The guest is feeling: "${userMood}". 
      From our curated menu below, recommend the single best item to match this feeling and provide a sophisticated reason.
      
      Our Menu:
      ${menuContext}`,
      config: {
        systemInstruction: "You are the elegant and intuitive digital concierge for Lola's Café, a premium spot in Abraka. Your responses must be highly varied, poetic, and never repetitive. Match the user's emotional state with a specific item from the menu. Use warm, inviting language.",
        temperature: 0.9,
        topP: 0.95,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: {
              type: Type.STRING,
              description: "The name of the recommended item from the menu."
            },
            reasoning: {
              type: Type.STRING,
              description: "A unique, creative explanation linking the mood to the choice."
            },
            pairing: {
              type: Type.STRING,
              description: "An aesthetic suggestion for the setting (e.g., 'paired with the soft jazz playing in our lounge')."
            }
          },
          required: ["recommendation", "reasoning", "pairing"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI");

    // Strip markdown code blocks if the model accidentally includes them
    const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Gemini recommendation error:", error);

    // Randomized fallbacks to ensure variety even during errors
    const fallbacks = [
      {
        recommendation: "Abraka Gold Latte & Warm Croissant",
        reasoning: "When words fail, our signature gold-hued latte and a buttery croissant provide the ultimate comfort.",
        pairing: "A quiet corner by the window as the world goes by."
      },
      {
        recommendation: "Tropical Zest Smoothie",
        reasoning: "It sounds like you need a burst of pure energy. This vibrant blend of local fruits is a total reset button.",
        pairing: "The sun-drenched outdoor terrace."
      },
      {
        recommendation: "The Lola Burger",
        reasoning: "Indulgence is the best remedy for a long day. Our brioche bun and savory beef are here to save the evening.",
        pairing: "A lively table with good music and better company."
      },
      {
        recommendation: "Iced Hibiscus Bliss",
        reasoning: "For a moment of pure, chilled elegance, our zesty hibiscus infusion is unmatched.",
        pairing: "A comfortable armchair with no notifications on your phone."
      }
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
};
