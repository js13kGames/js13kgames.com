import { ApiProvider } from '../graphql/apollo_provider';
import { Footer, Navbar } from '../layouts';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<ApiProvider>
			<Navbar year={pageProps.year} />
			<Component {...pageProps} />
			<Footer />
		</ApiProvider>
	);
}

export default MyApp;
