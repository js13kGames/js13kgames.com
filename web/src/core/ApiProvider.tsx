import { ApolloProvider } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import React, { FC, useEffect, useState } from 'react';
import { createApolloClient } from './ApolloClient';

export const ApiProvider: FC = ({ children }) => {
	const {
		isAuthenticated,
		getAccessTokenSilently,
		getIdTokenClaims
	} = useAuth0();
	const [token, setToken] = useState('');

	useEffect(() => {
		const getToken = async () => {
			if (isAuthenticated) {
				const _token = await getAccessTokenSilently();
				const claims = await getIdTokenClaims();
				setToken(_token);
				Cookies.set('token', _token, {
					expires: claims.exp / 60 / 60 / 24
				});
			}
		};

		getToken();
	}, [isAuthenticated]);

	const apolloClient = createApolloClient({ token });

	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
