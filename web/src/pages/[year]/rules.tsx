import Head from 'next/head';
import { Header } from '../../layouts';

export async function getServerSideProps({ params }) {
	return {
		props: {
			year: params?.year
		}
	};
}

const heroData = {
	primaryText: 'js13kgames rules'
};

const Rules = () => {
	return (
		<>
			<Head>
				<title>Rules</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Header primaryText={heroData.primaryText} />
		</>
	);
};

export default Rules;
