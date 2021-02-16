import { MenuItemsQuery, useMenuItemsQuery } from '../../../graphql';

export type MenuItems = MenuItemsQuery['menuItems']['nodes'];

const NavbarIO = ({ children }) => {
	const {
		data: menuItemsData,
		loading: menuItemsLoading,
		error: menuItemsError
	} = useMenuItemsQuery();

	const menuItems: MenuItems = menuItemsData?.menuItems?.nodes;

	return (
		<>
			{children({
				menuItems,
				loading: menuItemsLoading
			})}
		</>
	);
};

export default NavbarIO;
