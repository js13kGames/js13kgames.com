import {
	ApolloClient,
	ApolloClientOptions,
	createHttpLink,
	from,
	InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import crossFetch from 'cross-fetch';
import getNextConfig from 'next/config';

export interface ClientFactoryProps {
	app?: any;
}

let persistedClient: ApolloClient<unknown> | null = null;

export const createApolloClient = ({
	app
}: ClientFactoryProps): ApolloClient<unknown> => {
	const {
		publicRuntimeConfig: { APP_HOSTNAME }
	} = getNextConfig();

	const isSSR = typeof window === 'undefined';

	const url = `${window.location.origin}/graphql`;

	const httpLink = createHttpLink({
		fetch: crossFetch,
		uri: url
	});

	const authLink = setContext(async function (_, { headers }) {
		// const token = await getSessionToken(app);

		return {
			headers: {
				...headers
				// authorization: `Bearer ${token}`
			}
		};
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

	const link = from([errorLink, authLink, httpLink]);

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
