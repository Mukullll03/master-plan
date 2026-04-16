import { GoogleGenAI, Modality } from "@google/genai";

// 1. Fix the class name to 'GoogleGenAI' 
// 2. Wrap the API key in an options object `{ apiKey: ... }`
// 3. Check for process.env.GEMINI_API_KEY since you defined it in vite.config.ts
const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || (process.env as any).GEMINI_API_KEY 
});

export async function generateText(prompt: string, systemInstruction: string, base64Image?: string, mimeType?: string) {
  const parts: any[] = [{ text: prompt }];
  
  if (base64Image && mimeType) {
    parts.push({
      inlineData: {
        data: base64Image,
        mimeType: mimeType
      }
    });
  }

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview", // Note: Ensure you have access to this preview model
    contents: { parts },
    config: {
      systemInstruction: systemInstruction,
    }
  });

  return response.text || "No response generated.";
}

export async function generateImage(prompt: string) {
  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt: prompt,
    config: {
      numberOfImages: 1,
      aspectRatio: '1:1',
    },
  });

  const base64Data = response.generatedImages[0].image.imageBytes;
  return `data:image/png;base64,${base64Data}`;
}

export async function generateSpeech(text: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Speak warmly and clearly: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' },
        },
      },
    },
  });

  return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
}
