import {
	faFacebookF,
	faInstagram,
	faSlack,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styles from './socialIcons.module.scss';

const iconsMap = {
	twitter: faTwitter,
	facebook: faFacebookF,
	slack: faSlack,
	instagram: faInstagram
};

const SocialLinksLayout = ({ socialLinks, loading }) => {
	if (loading) {
		return <h1>Loading</h1>;
	}
	return (
		<div className={`${styles.socialIcons}`}>
			{socialLinks.map(({ url, title }) => (
				<li className={styles.iconWrapper} key={title}>
					<Link href={url}>
						<a title={title}>
							<FontAwesomeIcon className={styles.icon} icon={iconsMap[title]} />
						</a>
					</Link>
				</li>
			))}
		</div>
	);
};

export default SocialLinksLayout;
