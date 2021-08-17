import Head from 'next/head';
import { useEffect } from 'react';
import { SocialIcons } from '../../components';
import { useUsersLazyQuery } from '../../graphql';
import { InfoWrapper } from '../../layouts';
import styles from '../../styles/user.module.scss';

export async function getServerSideProps({ params }) {
	return {
		props: {
			user_name: params?.user_name
		}
	};
}

const User = ({ user_name }) => {
	const [fetchUserData, { data, loading, error }] = useUsersLazyQuery();

	useEffect(() => {
		fetchUserData({
			variables: {
				userName: user_name
			}
		});
	}, [fetchUserData, user_name]);

	if (loading) {
		return <h1>Loading</h1>;
	}

	const user = data?.users?.nodes[0] || {
		name: '',
		avatar: '',
		description: ''
	};

	return (
		<>
			<Head>
				<title>{user.name}</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<SocialIcons />
			<div className={styles.container}>
				<InfoWrapper
					image={user.avatar}
					name={user.name}
					description={user.description}
					socialData={[]}
				/>
			</div>
		</>
	);
};

export default User;
