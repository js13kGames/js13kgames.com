import { map_routes, RouteHandlerMethods } from '../../../../server';
import {
	createMenuItem,
	getMenuItems
} from '../../../../server/controllers/menuItems';

export default map_routes({
	[RouteHandlerMethods.GET]: getMenuItems,
	[RouteHandlerMethods.POST]: createMenuItem
});
