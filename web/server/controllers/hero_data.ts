import { RouteHandler } from '..';
import * as Types from '../types';

export const getHeroData: RouteHandler = async (req, res, options) => {
	const social_links = <Types.social_links[]>(
		await options.db.public.social_links.findAll({
			fields: ['title', 'url', 'id']
		})
	);

	const hero_data = <Types.hero_data>(
		await options.db.public.hero_data.findOne({ active: true })
	);

	res.json({
		primaryText: hero_data.primary_text,
		secondaryText: hero_data.secondary_text,
		backgroundImage: hero_data.background_image,
		countdownDate: hero_data.countdown_date,
		callToAction: {
			text: hero_data.call_to_action_text,
			url: hero_data.call_to_action_url
		},
		socialLinks: social_links
	});
};
