import { map_routes, RouteHandlerMethods } from '../../server';

export default map_routes({
	[RouteHandlerMethods.POST]: (req, res) => {
		res.statusCode = 200;
		res.json({ name: 'John Doe' });
	}
});
