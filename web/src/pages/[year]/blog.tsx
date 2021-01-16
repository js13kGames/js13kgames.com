import Head from 'next/head';
import { Hero } from '../../sections';

const heroData = {
	primaryText: 'blog lid sentence'
};

export async function getServerSideProps({ params }) {
	return {
		props: {
			year: params?.year
		}
	};
}

const Blog = () => {
	return (
		<>
			<Head>
				<title>Blog</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Hero
				primaryText={heroData.primaryText}
				variant2
				mainClass='blogContainer'
			/>
		</>
	);
};

export default Blog;
