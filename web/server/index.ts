import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from 'next/dist/next-server/server/api-utils';
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
		try {
			res.status(200);
			return await route_map[method](req, res, { db });
		} catch (error) {
			const status_code = error.statusCode || 500;
			return res.status(status_code).json({
				error: status_code,
				message: status_code !== 500 ? error.message : 'Internal server error'
			});
		}
	} else {
		return res.status(404).json({
			error: 404,
			message: `Api route ${req.method.toUpperCase()}: ${req.url} doesn't exist`
		});
	}
};

export const validate_payload = (
	request: NextApiRequest,
	required_fields: string[]
) => {
	const { body } = request;
	let fields = [];
	try {
		fields = Object.keys(JSON.parse(body || '{}'));
	} catch (e) {
		throw new ApiError(400, `Couldn't parse payload`);
	}

	const has_all_required_fields = required_fields.every((field_name) =>
		fields.includes(field_name)
	);

	if (!has_all_required_fields) {
		throw new ApiError(
			422,
			`Couldn't find all required fields: ${JSON.stringify(required_fields)}`
		);
	} else {
		return has_all_required_fields;
	}
};
