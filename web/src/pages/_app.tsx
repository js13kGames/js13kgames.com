import React from 'react';
import { AppContextProvider } from '../core/AppContextProvider';
import { Footer, Navbar } from '../layouts';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<Navbar year={pageProps.year} />
			<Component {...pageProps} />
			<Footer />
		</AppContextProvider>
	);
}

export default MyApp;
