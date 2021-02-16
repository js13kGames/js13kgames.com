import Link from 'next/link';
import { MenuItemsQuery, useMenuItemsQuery } from '../../graphql';
import styles from './navbar.module.scss';
import NavItem from './navItem';

export type MenuItems = MenuItemsQuery['menuItems']['nodes'];

const Navbar = ({ year }) => {
	const {
		data: menuItemsData,
		loading: menuItemsLoading,
		error: menuItemsError
	} = useMenuItemsQuery();

	const menuItems: MenuItems = menuItemsData?.menuItems?.nodes;

	return (
		<nav className={styles.navWrapper}>
			<div className={styles.navWrapperTop}>
				<Link href={'/' + year}>
					<a>js13kgames logo</a>
				</Link>
				<div className={styles.loginWrapper}>
					<Link href='/register'>
						<a>register</a>
					</Link>
					<p> / </p>
					<Link href='/login'>
						<a>login</a>
					</Link>
				</div>
			</div>
			<div className={styles.navWrapperBottom}>
				<ul className={styles.navItems}>
					{!menuItemsLoading &&
						menuItems.map(({ url, title }) => (
							<NavItem href={`/${year}${url}`} content={title} key={title} />
						))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
