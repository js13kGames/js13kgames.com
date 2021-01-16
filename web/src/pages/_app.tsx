import { Footer, Navbar } from '../layouts';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar year={pageProps.year} />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
