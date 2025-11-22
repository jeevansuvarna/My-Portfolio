import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { type } = await req.json();

  let prompt;
  if (type === 'summary') {
    prompt =
      "Summarize Jeevan Suvarna's career in 100 words for a portfolio bio.";
  } else if (type === 'cover-letter') {
    prompt =
      'Write a professional cover letter intro for Jeevan Suvarna, a React & Node developer.';
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });

  const reply = completion.choices[0].message.content;
  return Response.json({ reply });
}
