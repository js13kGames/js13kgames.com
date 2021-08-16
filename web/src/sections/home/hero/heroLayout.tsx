import Countdown, { zeroPad } from 'react-countdown';
import { Button } from '../../../components';
import { useBurgerVisible } from '../../../utils/useBurgerVisible';
import styles from './hero.module.scss';

export type HeroLayoutProps = {
	heroData: {
		primaryText: string;
		secondaryText: string;
		countdownDate?: string;
		backgroundImage: string;
		callToActionText: string;
		callToActionUrl: string;
	};
	loading: boolean;
};

const HeroLayout = ({ heroData, loading }: HeroLayoutProps) => {
	const isBurgerVisible = useBurgerVisible();

	// if (loading) {
	//   return <h1>Loading</h1>;
	// }
	const {
		primaryText,
		secondaryText,
		countdownDate,
		callToActionUrl,
		callToActionText
		// backgroundImage
	} = heroData || {};

	const rerender = ({ hours, minutes, days, seconds }) => {
		return (
			<span>
				{days} {days <= 1 ? 'day' : 'days'} {zeroPad(hours)}:{zeroPad(minutes)}:
				{zeroPad(seconds)}
			</span>
		);
	};

	return (
		<section className={`${styles.container}`}>
			<div className={`${styles.middleWrapper}`}>
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<p>{primaryText}</p>
						<p>
							{secondaryText}{' '}
							<Countdown date={new Date(countdownDate)} renderer={rerender} />
						</p>
					</>
				)}
			</div>
			{isBurgerVisible || loading ? null : (
				<Button href={callToActionUrl} buttonClass='heroBtn'>
					{callToActionText}
				</Button>
			)}
		</section>
	);
};

export default HeroLayout;
