import React, { FC, useEffect } from 'react';
import { useEditionByNameLazyQuery } from '../graphql';
import { YearProps } from '../pages/_app';

export const EditionContext = React.createContext({ name: '' });
const EditionRawProvider = EditionContext.Provider;

export interface EditionData {
	name: string;
	id?: string;
	theme?: string;
	startsAt?: string;
	endsAt?: string;
}

export const EditionProvider: FC<YearProps> = ({ children, year }) => {
	const [fetchEdition, { data: editionByNameData, loading, error }] =
		useEditionByNameLazyQuery();

	useEffect(() => {
		fetchEdition({
			variables: {
				name: year
			}
		});
	}, [year, fetchEdition]);

	return (
		<EditionRawProvider value={editionByNameData?.editionByName}>
			{children}
		</EditionRawProvider>
	);
};
