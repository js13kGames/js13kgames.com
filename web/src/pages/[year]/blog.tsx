import Head from 'next/head';
import { Hero } from '../../sections';


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
			<Hero/>
		</>
	);
};

export default Blog;
