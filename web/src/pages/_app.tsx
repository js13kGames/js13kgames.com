import React from 'react';
import { AppContextProvider } from '../core/AppContextProvider';
import { Footer, Navbar } from '../layouts';
import '../styles/globals.scss';

export interface YearProps {
	year: string;
}

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider year={pageProps.year}>
			<Navbar year={pageProps.year} />
			<Component {...pageProps} />
			<Footer />
		</AppContextProvider>
	);
}

export default MyApp;
