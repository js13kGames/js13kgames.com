import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import Logo from '../../../assets/logo/js13kgames-logo.svg';
import { NavSkeleton } from '../../../components';
import styles from './header.module.scss';
import Login from './login';

const Header = ({ year, years }) => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <NavSkeleton header />;
	}

	return (
		<header id='header' className={styles.navHeader}>
			<Link href={'/'}>
				<img className={styles.logo} src={Logo} alt='logo' />
			</Link>
			<div>
				{/* let's disable edition selection in Beta */}
				{/* <Select yearOptions={years} /> */}
			</div>
			<div className={styles.loginWrapper}>
				<Login />
			</div>
		</header>
	);
};

export default Header;
