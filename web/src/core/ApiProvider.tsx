import { ApolloProvider } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { createApolloClient } from './ApolloClient';

export const ApiProvider: FC = ({ children }) => {
	const apolloClient = createApolloClient();
	const { isAuthenticated, getAccessTokenSilently, getIdTokenClaims } =
		useAuth0();

	useEffect(() => {
		const getToken = async () => {
			if (isAuthenticated) {
				const token = await getAccessTokenSilently();
				const claims = await getIdTokenClaims();

				console.log({ claims, token });
				Cookies.set('token', token, {
					expires: claims.exp / 60 / 60 / 24
				});
			}
		};

		getToken();
	}, [isAuthenticated]);

	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
