import { RouteHandler } from '../..';
import * as Types from '../../types';

export const getMenuItems: RouteHandler = async (req, res, options) => {
	const menu_items = <Types.menu_items[]>(
		await options.db.public.menu_items.find({ active: true })
	);

	res.json(
		menu_items.map(({ title, url, id }) => ({
			title,
			url,
			id
		}))
	);
};
