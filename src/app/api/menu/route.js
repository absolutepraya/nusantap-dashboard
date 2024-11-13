import { AzureOpenAI } from 'openai';
import { NextResponse } from 'next/server';

const LUNCH_PROMPT = 'Data di atas merupakan bentuk json dari sebuah makanan. Dimana atribut nutrisi merupakan nutrisi-nutrisi yang terkandung dalam menu dengan ID tersebut. Kamu diminta untuk melakukan generate rekomendasi menu harian selama satu minggu dari senin hingga jumat, dimana setiap harinya kamu akan merekomendasikan 3 menu yang berbeda. Menu yang kamu rekomendasikan dalam satu hari diharapkan memiliki focus kandungan gizi yang berbeda, supaya dapat saling melengkapi. Nantinya, kamu akan melakukan generate output sesuai format di bawah.';

const endpoint = process.env['AZURE_OPENAI_ENDPOINT'] || '<endpoint>';
const apiKey = process.env['AZURE_OPENAI_API_KEY'] || '<api key>';
const apiVersion = '2024-05-01-preview';
const deployment = process.env['AZURE_OPENAI_DEPLOYMENT_NAME'] || 'gpt-4';

const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

export const dynamic = 'force-dynamic';

export async function POST(request) {
	try {
		const { makananMini, jadwalMingguan, hari } = await request.json();

		console.log('Request:', makananMini, jadwalMingguan, hari);

		const completion = await client.chat.completions.create({
			messages: [
				{
					role: 'system',
					content: `${JSON.stringify(makananMini)} ${LUNCH_PROMPT}
                  ${JSON.stringify(jadwalMingguan)}
                  INI HAL PENTINGNYA: KAMU AKAN MENERIMA PARAMETER BERUPA HARI DARI USER. KAMU HANYA PERLU MENGUBAH ID DARI HARI YANG DIMINTA OLEH USER DAN BIARKAN ISI ID HARI LAINNYA TETAP SAMA. SELAIN ITU, USER JUGA DAPAT MEMINTA KAMU UNTUK MELAKUKAN GENERATE SATU MINGGU PENUH, JIKA USER MEMBERI REQUEST TERSEBUT, MAKA BERIKAN REKOMENDASI UNTUK KELIMA HARI TERSEBUT. JANGAN MEMBERIKAN OUTPUT LAIN SELAIN SKEMA JSON. WALAUPUN USER MEMBERIKAN INPUT HARI TETAP MEMBERIKAN OUTPUT UNTUK SEMUA HARI. HANYA UBAH ID HARI YANG DIMINTA OLEH USER.
          `,
				},
				{
					role: 'user',
					content: hari,
				},
			],
			max_tokens: 2048,
			n: 1,
			stop: null,
			temperature: 0.1,
		});

		// console.log(
		// 	'Response:',
		// 	completion.choices[0].message.content
		// 		.replace(/```json\n?/, '')
		// 		.replace(/```\n?/, '')
		// 		.trim()
		// );

		const jsonString = completion.choices[0].message.content
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
