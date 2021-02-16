import SocialLinksIO from './socialLinksIO';
import SocialLinksLayout from './socialLinksLayout';

const SocialIcons = () => {
	return (
		<SocialLinksIO>
			{({ socialLinks, loading }) => (
				<SocialLinksLayout socialLinks={socialLinks} loading={loading} />
			)}
		</SocialLinksIO>
	);
};

export default SocialIcons;
