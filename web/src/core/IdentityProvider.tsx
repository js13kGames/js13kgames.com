import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { useGetOrCreateUserMutation } from '../graphql';

export const IdentityProvider: FC = ({ children }) => {
	const { isAuthenticated, getAccessTokenSilently, getIdTokenClaims } =
		useAuth0();

	const [getOrCreateUserMutation] = useGetOrCreateUserMutation();

	useEffect(() => {
		const getToken = async () => {
			if (isAuthenticated) {
				const token = await getAccessTokenSilently();
				const claims = await getIdTokenClaims();

				console.log({ claims, token });

				await getOrCreateUserMutation({
					variables: {
						name: claims?.name || '',
						avatar: claims?.picture || '',
						email: claims?.email || '',
						identity: claims?.sub || '',
						userName: claims?.nickname || ''
					}
				});

				Cookies.set('token', token, {
					expires: claims.exp / 60 / 60 / 24
				});
			}
		};

		getToken();
	}, [isAuthenticated]);

	return <>{children}</>;
};
