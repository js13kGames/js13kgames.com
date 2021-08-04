import { Auth0Provider } from '@auth0/auth0-react';
import getConfig from 'next/config';
import { FC } from 'react';
import { ApiProvider } from './ApiProvider';
import { IdentityProvider } from './IdentityProvider';

export const AppContextProvider: FC = ({ children }) => {
	const {
		publicRuntimeConfig: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, APP_HOSTNAME }
	} = getConfig();
	return (
		<Auth0Provider
			domain={AUTH0_DOMAIN}
			clientId={AUTH0_CLIENT_ID}
			redirectUri={APP_HOSTNAME}
		>
			<ApiProvider>
				<IdentityProvider>{children}</IdentityProvider>
			</ApiProvider>
		</Auth0Provider>
	);
};
