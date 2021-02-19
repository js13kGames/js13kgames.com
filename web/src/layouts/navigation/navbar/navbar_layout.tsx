import Link from 'next/link';
import styles from './navbar.module.scss';
import NavItem from './navItem';

const NavbarLayout = ({ loading, menuItems, year }) => {
	if (loading) {
		return <h1>Loading</h1>;
	}

	return (
		<nav className={styles.navWrapper}>
			<div className={styles.navWrapperTop}>
				<Link href={'/' + year}>
					<a>js13kgames logo</a>
				</Link>
				<div className={styles.loginWrapper}>
					<Link href='/login'>
						<a>login</a>
					</Link>
				</div>
			</div>
			<div className={styles.navWrapperBottom}>
				<ul className={styles.navItems}>
					{menuItems.map(({ url, title }) => (
						<NavItem href={`/${year}${url}`} content={title} key={title} />
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavbarLayout;
