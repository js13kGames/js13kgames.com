import React from 'react';
import { Footer, Navbar } from '../layouts';
import '../styles/globals.scss';
import { AppContextProvider } from '../utils/AppContextProvider';

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
