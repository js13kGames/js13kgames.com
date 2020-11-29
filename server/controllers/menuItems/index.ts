import { RouteHandler } from "../..";
import { MENU_ITEMS } from "./temp_data";

export const getMenuItems: RouteHandler = (req, res) => {
    const menu_items = MENU_ITEMS
        .filter((item) => item.active)
        .map(item => ({
            title: item.title,
            url: item.url
        }));
	res.status(200).json(menu_items);
};
