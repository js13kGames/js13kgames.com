import { map_routes, RouteHandlerMethods } from '../../../../server';
import {
	createMenuItem,
	getMenuItems
} from '../../../../server/controllers/menu_items';

export default map_routes({
	[RouteHandlerMethods.GET]: getMenuItems,
	[RouteHandlerMethods.POST]: createMenuItem
});
