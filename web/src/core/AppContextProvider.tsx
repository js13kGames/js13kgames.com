import { FC } from 'react';
import { ApiProvider } from './ApiProvider';

export const AppContextProvider: FC = ({ children }) => {
	return <ApiProvider>{children}</ApiProvider>;
};
