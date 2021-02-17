import HeroIO from './heroIO';
import HeroLayout from './heroLayout';

const Hero = () => {
	return (
		<HeroIO>
			{({ heroData, loading }) => (
				<HeroLayout heroData={heroData} loading={loading}></HeroLayout>
			)}
		</HeroIO>
	);
};

export default Hero;
