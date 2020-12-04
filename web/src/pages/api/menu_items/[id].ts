import { map_routes, RouteHandlerMethods } from '../../../../server';
import {
	deleteMenuItem,
	editMenuItem
} from '../../../../server/controllers/menuItems';

export default map_routes({
	[RouteHandlerMethods.PUT]: editMenuItem,
	[RouteHandlerMethods.DELETE]: deleteMenuItem
});
