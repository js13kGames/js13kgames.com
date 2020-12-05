import { map_routes, RouteHandlerMethods } from '../../../../server';
import { getHeroData } from '../../../../server/controllers/hero_data';

export default map_routes({
	[RouteHandlerMethods.GET]: getHeroData
});
