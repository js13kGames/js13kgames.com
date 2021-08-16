import React, { FC, useEffect, useState } from 'react';
import { useEditionByNameLazyQuery } from '../graphql';
import { YearProps } from '../pages/_app';

export const EditionContext = React.createContext({});
const EditionRawProvider = EditionContext.Provider;

export interface EditionData {
	name: string;
	id?: string;
	theme?: string;
	startsAt?: string;
	endsAt?: string;
}

export const EditionProvider: FC<YearProps> = ({ children, year }) => {
	const [edition, set_edition] = useState<EditionData>({ name: year });

	const [fetchEdition, { data: editionByNameData, loading, error }] =
		useEditionByNameLazyQuery();

	useEffect(() => {
		fetchEdition({
			variables: {
				name: year
			}
		});

		if (editionByNameData?.editionByName) {
			set_edition(editionByNameData.editionByName);
		}
	}, [year, fetchEdition]);

	return <EditionRawProvider value={edition}>{children}</EditionRawProvider>;
};
