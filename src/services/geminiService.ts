import { GoogleGenAI } from "@google/genai";

/**
 * Returns an initialized GoogleGenAI instance using the environment's API key.
 */
export async function getGenAIInstance(): Promise<GoogleGenAI> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Gemini API key not found in environment variables.');
  }
  return new GoogleGenAI({ apiKey });
}
