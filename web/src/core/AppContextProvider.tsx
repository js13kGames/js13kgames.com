import { Auth0Provider } from '@auth0/auth0-react';
import getConfig from 'next/config';
import { FC } from 'react';
import { YearProps } from '../pages/_app';
import { ApiProvider } from './ApiProvider';
import { EditionProvider } from './EditionProvider';
import { IdentityProvider } from './IdentityProvider';

export const AppContextProvider: FC<YearProps> = ({ children, year }) => {
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
				<EditionProvider year={year}>
					<IdentityProvider>{children}</IdentityProvider>
				</EditionProvider>
			</ApiProvider>
		</Auth0Provider>
	);
};
