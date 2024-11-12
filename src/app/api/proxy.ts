import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { q } = req.query;

	const response = await fetch(`http://www.google.com/search?udm=2&tbm=isch&q=${q}`);
	const data = await response.text();

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.status(200).send(data);
}
