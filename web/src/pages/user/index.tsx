import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const User = () => {
	const router = useRouter();
	const { user, isAuthenticated } = useAuth0();

	useEffect(() => {
		if (!isAuthenticated || !user.nickname) {
			router.push('/');
		} else {
			router.push(`/user/${user.nickname}`);
		}
	}, []);

	return <></>;
};

export default User;
