import { RouteHandler, validate_payload } from '../..';
import * as Types from '../../types';

export interface MenuItemPayload {
	title: string;
	url: string;
}

export const getMenuItems: RouteHandler = async (req, res, options) => {
	const { query } = req;

	let filters = {};

	// XXX: Restrict `all` to admins only
	if (!query.all) {
		filters = { active: true };
	}

	const menu_items = <Types.menu_items[]>(
		await options.db.public.menu_items.find(filters, {
			fields: ['title', 'url', 'id']
		})
	);

	res.json(menu_items);
};

export const createMenuItem: RouteHandler = async (req, res, options) => {
	validate_payload(req, ['title', 'url']);

	const { body } = req;
	const { title, url }: MenuItemPayload = JSON.parse(body);

	await options.db.public.menu_items.insert({ title, url });

	res.json({
		message: 'ok'
	});
};
