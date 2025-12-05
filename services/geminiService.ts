import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Using the mapped name for "Nano banana" / "Gemini Flash Image"
const MODEL_NAME = 'gemini-2.5-flash-image';

export const generateStyledPhoto = async (
  base64Image: string,
  stylePrompt: string
): Promise<string> => {
  try {
    // Clean base64 string if it contains the header
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [
          {
            text: stylePrompt + " Maintain the facial features and identity of the person in the reference image strictly. High quality, photorealistic."
          },
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: cleanBase64
            }
          }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4", 
          // imageSize is only for Pro models, Flash Image doesn't support it, so we omit it.
        }
      }
    });

    // Extract image from response
    // The model might return text + image or just image. We need to find the inlineData.
    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/jpeg;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image data found in response");

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};