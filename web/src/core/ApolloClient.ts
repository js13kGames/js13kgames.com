import {
	ApolloClient,
	ApolloClientOptions,
	createHttpLink,
	from,
	InMemoryCache
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import crossFetch from 'cross-fetch';
import getConfig from 'next/config';

export interface ClientFactoryProps {
	token?: string;
}

let persistedClient: ApolloClient<unknown> | null = null;

export const createApolloClient = ({
	token
}: ClientFactoryProps): ApolloClient<unknown> => {
	const {
		publicRuntimeConfig: { APP_HOSTNAME }
	} = getConfig();

	const isSSR = typeof window === 'undefined';

	const url = `${APP_HOSTNAME}/graphql`;

	const httpLink = createHttpLink({
		fetch: crossFetch,
		uri: url
	});

	const errorLink = onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors)
			graphQLErrors.map(({ message, locations, path }) =>
				console.warn(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
				)
			);

		if (networkError) {
			console.error(networkError);
		}
	});

	const link = from([errorLink, httpLink]);

	const baseOptions: ApolloClientOptions<unknown> = {
		link,
		cache: new InMemoryCache(),
		ssrMode: false,
		defaultOptions: {
			watchQuery: {
				fetchPolicy: 'no-cache'
			},
			query: {
				fetchPolicy: 'no-cache'
			}
		}
	};

	if (isSSR) {
		return new ApolloClient({ ...baseOptions });
	}

	if (!persistedClient) {
		persistedClient = new ApolloClient({ ...baseOptions });
	}

	return persistedClient;
};
