import Head from 'next/head';
import { Header } from '../../../layouts';
import styles from '../../../styles/rules.module.scss';

export async function getServerSideProps({ params }) {
	return {
		props: {
			year: params?.year,
			page_id: params?.page_id
		}
	};
}

const heroData = {
	primaryText: 'js13kgames rules'
};

const Rules = ({ year, page_id }) => {
	return (
		<>
			<Head>
				<title>Page</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Header primaryText={year + ' ' + page_id} />
			<div className={styles.mainContainer}>
				<h1>rules</h1>
			</div>
		</>
	);
};

export default Rules;
