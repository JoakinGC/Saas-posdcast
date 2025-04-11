import { v } from "convex/values";
import { action } from "./_generated/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})


export const generateAudioAction = action({
    args:{input: v.string(),voice:v.string()},
  handler: async (_,{voice,input}) => {

    const mp3 = await openai.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice,
      input: input,
    });
    
    const buffer = await mp3.arrayBuffer();
    
    return buffer;
  },
});