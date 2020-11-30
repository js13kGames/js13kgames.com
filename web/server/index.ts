import { NextApiRequest, NextApiResponse } from 'next';
import { create_db_connection } from './db';
import { PgDbType } from './types';

export type RouteHandler = (
	req: NextApiRequest,
	res: NextApiResponse,
	options: DefaultOptions
) => void;

export enum RouteHandlerMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH'
}

export interface DefaultOptions {
	db: PgDbType;
}

export type RouteMap = {
	[key in RouteHandlerMethods]?: RouteHandler;
};

// XXX: This isn't nice. Can I somehow pass data between
// handler calls without globals?
let db;

export const map_routes = (route_map: RouteMap) => async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { method } = req;

	console.log(`${req.method.toUpperCase()}: ${req.url}`);

	if (!db) {
		console.log('DB not initialized, connecting...');
		db = await create_db_connection();
	}

	if (route_map[method] && typeof route_map[method] === 'function') {
		res.status(200);
		return route_map[method](req, res, { db });
	} else {
		return res.status(404).json({
			error: 404,
			message: `Api route ${req.method.toUpperCase()}: ${req.url} doesn't exist`
		});
	}
};
