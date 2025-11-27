import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
  const { message } = await req.json();
  const resumePath = path.join(process.cwd(), 'src/data/resume.json');
  const resumeText = fs.readFileSync(resumePath, 'utf-8');

  const systemPrompt = `
      You are Jeevan Suvarna's AI portfolio assistant.
      Answer questions **based on the resume below**.
      
      Resume Content:
      ${resumeText}
    `;

  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  try {
    const result = await model.generateContent(
      `${systemPrompt}\nUser: ${message}`
    );
    const reply = result.response.text();
    return Response.json({ reply });
  } catch (err) {
    console.error('Gemini Error:', err);
    return Response.json({
      reply: 'AI is sleeping right now. Try again later.',
    });
  }
}
