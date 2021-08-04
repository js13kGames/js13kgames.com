import { ApolloProvider } from '@apollo/client';
import React, { FC } from 'react';
import { createApolloClient } from './ApolloClient';

export const ApiProvider: FC = ({ children }) => {
	const apolloClient = createApolloClient();

	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
