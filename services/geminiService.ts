import { GoogleGenAI } from "@google/genai";
import { RelationshipType, ToneType } from "../types";

// Check for API key existence safely
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateWeddingWish = async (
  name: string,
  relationship: RelationshipType,
  tone: ToneType
): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key missing, returning mock data");
    return "¡Felicidades a los novios! Que seáis muy felices para siempre. (Modo demo: añade tu API key)";
  }

  try {
    const prompt = `
      Actúa como un invitado de boda. Escribe un mensaje corto para el libro de visitas de la boda de Silvia y Joan.
      
      Quien escribe: ${name}
      Relación con los novios: ${relationship}
      Tono deseado: ${tone}
      
      Restricciones:
      - Menos de 60 palabras.
      - En español.
      - Elegante pero personal.
      - No uses emojis excesivos.
      - Solo devuelve el texto del mensaje.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "¡Felicidades Silvia y Joan!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Que el amor que sentís el uno por el otro siga creciendo cada día. ¡Muchas felicidades!";
  }
};