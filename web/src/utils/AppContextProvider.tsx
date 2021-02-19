import { FC } from 'react';
import { ApiProvider } from '../graphql/apollo_provider';

export const AppContextProvider: FC = ({ children }) => {
	return <ApiProvider>{children}</ApiProvider>;
};
