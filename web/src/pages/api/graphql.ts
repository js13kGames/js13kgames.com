import { NextApiRequest, NextApiResponse } from 'next';

// XXX: This isn't nice. Can I somehow pass data between
// handler calls without globals?
let db;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	return res.status(200).json({
		message: 'NO DZIAŁA KURWA A CO?'
	});
};
