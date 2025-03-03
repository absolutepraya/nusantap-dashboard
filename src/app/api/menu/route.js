import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const LUNCH_PROMPT = 'Data di atas merupakan bentuk json dari sebuah makanan. Dimana atribut nutrisi merupakan nutrisi-nutrisi yang terkandung dalam menu dengan ID tersebut. Kamu diminta untuk melakukan generate rekomendasi menu harian selama satu minggu dari senin hingga jumat, dimana setiap harinya kamu akan merekomendasikan 3 menu yang berbeda. Menu yang kamu rekomendasikan dalam satu hari diharapkan memiliki focus kandungan gizi yang berbeda, supaya dapat saling melengkapi. Nantinya, kamu akan melakukan generate output sesuai format di bawah.';

// Initialize the Gemini API client
const apiKey = process.env['GOOGLE_GEMINI_API_KEY'] || '<api key>';
const genAI = new GoogleGenerativeAI(apiKey);
const modelName = process.env['GOOGLE_GEMINI_MODEL'] || 'gemini-1.5-pro';

export const dynamic = 'force-dynamic';

export async function POST(request) {
	try {
		const { makananMini, jadwalMingguan, hari } = await request.json();
		console.log('Request:', makananMini, jadwalMingguan, hari);

		// Get the model
		const model = genAI.getGenerativeModel({ model: modelName });

		// Construct the prompt similar to the OpenAI format
		const systemPrompt = `${JSON.stringify(makananMini)} ${LUNCH_PROMPT}
                  ${JSON.stringify(jadwalMingguan)}
                  INI HAL PENTINGNYA: KAMU AKAN MENERIMA PARAMETER BERUPA HARI DARI USER. KAMU HANYA PERLU MENGUBAH ID DARI HARI YANG DIMINTA OLEH USER DAN BIARKAN ISI ID HARI LAINNYA TETAP SAMA. SELAIN ITU, USER JUGA DAPAT MEMINTA KAMU UNTUK MELAKUKAN GENERATE SATU MINGGU PENUH, JIKA USER MEMBERI REQUEST TERSEBUT, MAKA BERIKAN REKOMENDASI UNTUK KELIMA HARI TERSEBUT. JANGAN MEMBERIKAN OUTPUT LAIN SELAIN SKEMA JSON. WALAUPUN USER MEMBERIKAN INPUT HARI TETAP MEMBERIKAN OUTPUT UNTUK SEMUA HARI. HANYA UBAH ID HARI YANG DIMINTA OLEH USER.`;

		// Generate content using Gemini
		const result = await model.generateContent({
			contents: [
				{
					role: 'user',
					parts: [{ text: systemPrompt }, { text: hari }],
				},
			],
			generationConfig: {
				temperature: 0.1,
				maxOutputTokens: 2048,
			},
		});

		// Extract the response text
		const responseText = result.response.text();

		// Clean up the response text similar to what was done with OpenAI
		const jsonString = responseText
			.replace(/```json\n?/, '')
			.replace(/```\n?/, '')
			.trim();

		// Parse the JSON string
		const response = JSON.parse(jsonString);
		console.log('Response:', response);

		return NextResponse.json(response);
	} catch (error) {
		console.error('Error getting question:', error);
		return NextResponse.json(
			{
				error: 'Failed to get question',
				details: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		);
	}
}
