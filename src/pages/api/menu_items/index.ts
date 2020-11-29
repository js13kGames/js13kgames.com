import { map_routes, RouteHandlerMethods } from '../../../../server';
import { getMenuItems } from '../../../../server/controllers/menuItems';

export default map_routes({
	[RouteHandlerMethods.GET]: getMenuItems
});
