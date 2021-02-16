import Countdown, { zeroPad } from 'react-countdown';
import { Button, SocialIcons } from '../../../components';
import { HeroDataQuery } from '../../../graphql';
import { ArrayElement } from '../../../utils';
import styles from './hero.module.scss';

export type HeroLayoutProps = {
	heroData: ArrayElement<HeroDataQuery['heroData']['nodes']>;
	loading: boolean;
};

const HeroLayout = ({ heroData, loading }: HeroLayoutProps) => {
	if (loading) {
		return <h1>Loading</h1>;
	}
	const {
		primaryText,
		secondaryText,
		countdownDate,
		callToActionUrl,
		callToActionText,
		backgroundImage
	} = heroData;

	const rerender = ({ hours, minutes, days, seconds }) => {
		return (
			<span>
				{days} {days <= 1 ? 'day' : 'days'} {zeroPad(hours)}:{zeroPad(minutes)}:
				{zeroPad(seconds)}
			</span>
		);
	};

	return (
		<section
			className={`${styles.container}`}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<SocialIcons />
			<div className={`${styles.middleWrapper}`}>
				<p>{primaryText}</p>
				<p className={styles.description}>
					{secondaryText}{' '}
					<Countdown date={new Date(countdownDate)} renderer={rerender} />
				</p>
			</div>
			<Button href={callToActionUrl} buttonClass='heroBtn'>
				{callToActionText}
			</Button>
		</section>
	);
};

export default HeroLayout;
