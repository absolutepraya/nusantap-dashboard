import type { NextApiRequest, NextApiResponse } from 'next';
import gis from 'async-g-i-s';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { q } = req.query;

	if (!q || typeof q !== 'string') {
		res.status(400).json({ error: 'Missing query parameter "q"' });
		return;
	}

	try {
		const results = await gis(q);
		res.status(200).json(results);
	} catch (error) {
		res.status(500).json({ error: 'Error fetching images' });
	}
}
