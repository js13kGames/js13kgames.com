import { RouteHandler, validate_payload } from '../..';
import * as Types from '../../types';

export const getMenuItems: RouteHandler = async (req, res, options) => {
	const menu_items = <Types.menu_items[]>(
		await options.db.public.menu_items.find(
			{ active: true },
			{ fields: ['title', 'url', 'id'] }
		)
	);

	res.json(menu_items);
};

export const createMenuItem: RouteHandler = async (req, res, options) => {
	const query = req.body;

	await validate_payload(req, ['title', 'url']);

	// const menu_items = <Types.menu_items[]>(
	// 	await options.db.public.menu_items.find(
	// 		{ active: true },
	// 		{ fields: ['title', 'url', 'id'] }
	// 	)
	// );

	res.json(query);
};
