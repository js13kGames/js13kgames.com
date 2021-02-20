import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { Button } from '../../../components';
import styles from './navbar.module.scss';
import NavItem from './navItem';

const NavbarLayout = ({ loading, menuItems, year }) => {
	const {
		loginWithRedirect,
		logout,
		user,
		isAuthenticated,
		isLoading
	} = useAuth0();

	if (loading || isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<nav className={styles.navWrapper}>
			<div className={styles.navWrapperTop}>
				<Link href={'/' + year}>
					<a>js13kgames logo</a>
				</Link>
				<div className={styles.loginWrapper}>
					{isAuthenticated ? (
						<div className={styles.loggedInWrapper}>
							<img src={user.picture} className={styles.avatar}></img>
							<p className={styles.name}>
								{user.name}
								<span
									className={styles.logout}
									onClick={() => logout({ returnTo: window.location.origin })}
								>
									(log out)
								</span>
							</p>
						</div>
					) : (
						<Button onClick={() => loginWithRedirect()}>login</Button>
					)}
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
