import Head from 'next/head';
import { Hero } from '../../sections';

export function getServerSideProps({ params }) {
	return {
		props: {
			year: params?.year
		}
	};
}

const heroData = {
	primaryText: 'previous edition',
	secondaryText:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. '
};

const PriviousEditions = ({ year }) => {
	return (
		<>
			<Head>
				<title>Previous Editions</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Hero
				primaryText={heroData.primaryText}
				secondaryText={heroData.secondaryText}
				prevEdition='prevEditionWrapper'
			/>
		</>
	);
};

export default PriviousEditions;
