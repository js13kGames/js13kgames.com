import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { EditionContext, EditionData } from '../../../core/EditionProvider';
import { usePageByEditionAndKeyLazyQuery } from '../../../graphql';
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

const Rules = ({ year, page_id }) => {
	const editionData = useContext<EditionData>(EditionContext);

	const [fetchPage, { data, loading, error }] =
		usePageByEditionAndKeyLazyQuery();

	useEffect(() => {
		if (editionData?.id) {
			fetchPage({
				variables: {
					editionId: editionData.id,
					key: page_id
				}
			});
		}
	}, [editionData, fetchPage]);

	if (loading) {
		return <h1>Loading</h1>;
	}

	if (!data?.page.id) {
		return (
			<>
				<Head>
					<title>Page not found</title>
				</Head>
				<Header primaryText={'Page not found'} />
			</>
		);
	}

	return (
		<>
			<Head>
				<title>{data?.page?.title || 'Page with no title'}</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Header primaryText={data?.page?.title || 'Page with no title'} />
			<div
				className={styles.mainContainer}
				dangerouslySetInnerHTML={{
					__html: data?.page?.content || 'Page with no content'
				}}
			></div>
		</>
	);
};

export default Rules;
