import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const IMPROVED_PROMPT = `You are a nutrition expert tasked with generating weekly meal recommendations for Indonesian children. 

**CRITICAL REQUIREMENTS:**
1. You must return ONLY valid JSON - no explanations, no code blocks, no additional text
2. Each menu item must have ALL required fields: id, nama, harga_total, nutrisi, image_url, bahan_pokok, deskripsi, sayur, buah
3. The "bahan_pokok" field must be an array of objects with "nama_bahan" and "jumlah" fields
4. Select menu IDs from the provided menu database based on nutritional balance
5. Each day should have 3 different menus that complement each other nutritionally

**EXPECTED JSON STRUCTURE:**
[
  {
    "hari": "Senin",
    "menu": [
      {
        "id": 1,
        "nama": "Menu Name",
        "harga_total": "15000",
        "nutrisi": "Nutrition info",
        "image_url": "image_url_here",
        "bahan_pokok": [
          {
            "nama_bahan": "Ingredient Name",
            "jumlah": 0.3
          }
        ],
        "deskripsi": "Description",
        "sayur": "Vegetable",
        "buah": "Fruit"
      }
    ]
  }
]

**INSTRUCTIONS:**
- For each day (Senin-Jumat), select 3 menu IDs from the provided database
- Ensure nutritional variety: one high-protein, one high-carb, one vitamin-rich menu per day
- Only modify the requested day(s), keep other days unchanged if they already have menus
- Match the exact structure shown above`;

// Initialize the Gemini API client
const apiKey = process.env['GOOGLE_GEMINI_API_KEY'] || '<api key>';
const genAI = new GoogleGenerativeAI(apiKey);
const modelName = process.env['GOOGLE_GEMINI_MODEL'] || 'gemini-2.0-flash-exp';

export const dynamic = 'force-dynamic';

export async function POST(request) {
	try {
		const { makananMini, jadwalMingguan, hari } = await request.json();
		console.log('Request:', makananMini, jadwalMingguan, hari);

		// Get the model
		const model = genAI.getGenerativeModel({ model: modelName });

		// Construct a comprehensive prompt
		const systemPrompt = `**MENU DATABASE:**
${JSON.stringify(makananMini, null, 2)}

**CURRENT SCHEDULE:**
${JSON.stringify(jadwalMingguan, null, 2)}

**USER REQUEST:** ${hari}

${IMPROVED_PROMPT}

**IMPORTANT RULES:**
- If user requests "semua hari dalam satu minggu", update ALL 5 days (Senin-Jumat)
- If user requests specific day, only update that day
- Always return complete weekly schedule (all 5 days)
- Each menu object must include ALL fields from the database
- Return ONLY the JSON array, nothing else`;

		// Generate content using Gemini
		const result = await model.generateContent({
			contents: [
				{
					role: 'user',
					parts: [{ text: systemPrompt }],
				},
			],
			generationConfig: {
				temperature: 0.2,
				maxOutputTokens: 4096,
				topP: 0.8,
				topK: 40,
			},
		});

		// Extract the response text
		const responseText = result.response.text();
		console.log('Raw AI Response:', responseText);

		// Clean up the response text - remove code blocks and trim
		const jsonString = responseText
			.replace(/```json\s*/g, '')
			.replace(/```\s*/g, '')
			.replace(/^\s*[\r\n]/gm, '')
			.trim();

		console.log('Cleaned JSON String:', jsonString);

		// Parse the JSON string
		const response = JSON.parse(jsonString);
		console.log('Parsed Response:', JSON.stringify(response, null, 2));

		return NextResponse.json(response);
	} catch (error) {
		console.error('Error getting menu recommendation:', error);
		console.error('Error details:', error.message);
		return NextResponse.json(
			{
				error: 'Failed to generate menu recommendation',
				details: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		);
	}
}
