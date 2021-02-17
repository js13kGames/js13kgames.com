import { useSocialLinksQuery } from '../../graphql';

const SocialLinksIO = ({ children }) => {
	const { data, loading, error } = useSocialLinksQuery();

	const socialLinks = data?.socialLinks?.nodes;

	return (
		<>
			{children({
				socialLinks,
				loading
			})}
		</>
	);
};

export default SocialLinksIO;
