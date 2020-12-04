import { RouteHandler, validate_payload } from '../..';
import * as Types from '../../types';

export interface MenuItemPayload {
	title: string;
	url: string;
}

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
	const body: MenuItemPayload = req.body;

	await validate_payload(req, ['title', 'url']);

	// const menu_items = <Types.menu_items[]>(
	// 	await options.db.public.menu_items.find(
	// 		{ active: true },
	// 		{ fields: ['title', 'url', 'id'] }
	// 	)
	// );

	res.json(body);
};
