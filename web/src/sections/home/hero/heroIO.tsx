import { useHeroDataQuery } from '../../../graphql';
import { HeroLayoutProps} from './heroLayout'

const HeroIO = ({ children }) => {
	const { data, loading, error } = useHeroDataQuery();

	const heroData = data?.heroData?.nodes[0];

	const heroIoData: HeroLayoutProps = {
		loading,
		heroData
	};
	return <>{children(heroIoData)}</>;
};

export default HeroIO;
