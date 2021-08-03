import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../../../components';
import { useGetOrCreateUserMutation } from '../../../graphql';
import styles from './login.module.scss';

export interface LoginProps {
	mobile?: boolean;
}

const Login = ({ mobile }: LoginProps) => {
	const [openProfile, setOpenProfile] = useState(false);

	const { loginWithRedirect, logout, user, isAuthenticated, getIdTokenClaims } =
		useAuth0();

	const getOrCreateUserMutation = useGetOrCreateUserMutation();

	useEffect(() => {
		const getOrOrCreateUser = async () => {
			if (isAuthenticated) {
				const claims = await getIdTokenClaims();
				await getOrCreateUserMutation[0]({
					variables: {
						name: claims?.name || '',
						avatar: claims?.picture || '',
						email: claims?.email || '',
						identity: claims?.sub || '',
						userName: claims?.nickname || ''
					}
				});
			}
		};
		getOrOrCreateUser();
	}, [isAuthenticated]);

	return (
		<>
			{isAuthenticated ? (
				mobile ? (
					<>
						<div className={styles.loggedInMobile}>
							<Link href='/user'>
								<img src={user.picture} className={styles.avatar} />
							</Link>
							<p className={styles.name}>
								{user.name} <span>({user.email})</span>
							</p>
							<p
								className={styles.logout}
								onClick={() => logout({ returnTo: window.location.origin })}
							>
								Log Out
							</p>
						</div>
					</>
				) : (
					<div
						className={styles.loggedInWrapper}
						onClick={() => setOpenProfile(!openProfile)}
					>
						<img src={user.picture} className={styles.avatar} />
						<div
							className={`${styles.dropdown} ${
								styles[openProfile ? 'active' : '']
							}`}
						>
							<div className={styles.dropdownItem}>
								<p>
									{user.name} <span>({user.email})</span>
								</p>
							</div>
							<div className={styles.dropdownItem}>
								<Link href='/user'>
									<a>Profile</a>
								</Link>
							</div>
							<div className={styles.dropdownItem}>
								<p
									className={styles.logout}
									onClick={() => logout({ returnTo: window.location.origin })}
								>
									Log Out
								</p>
							</div>
							<Button
								buttonClass='closeBtn'
								onClick={() => setOpenProfile(!openProfile)}
							>
								X
							</Button>
						</div>
					</div>
				)
			) : (
				<Button
					buttonClass={mobile ? 'loginMobile' : 'login'}
					onClick={() => loginWithRedirect()}
				>
					Register | Login
				</Button>
			)}
			{mobile ? (
				''
			) : (
				<Button buttonClass='newSubmit' href='/submit'>
					submit the game
				</Button>
			)}
		</>
	);
};

export default Login;
