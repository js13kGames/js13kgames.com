import { useHeroDataQuery } from '../../../graphql';

const HeroIO = ({ children }) => {
	const { data, loading, error } = useHeroDataQuery();

	const heroData = data?.heroData?.nodes[0];

	return (
		<>
			{children({
				heroData,
				loading
			})}
		</>
	);
};

export default HeroIO;
