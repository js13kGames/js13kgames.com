import Head from 'next/head';
import { Accordion } from '../../components';
import {
	AccordionNav,
	GamesList,
	Header,
	WinnersGold,
	WinnersSmallWrapper
} from '../../layouts';
import styles from '../../styles/winners.module.scss';
import { useAccordionToggle } from '../../utils/useAccordionToggle';

export async function getServerSideProps({ params }) {
	return {
		props: {
			year: params?.year
		}
	};
}

const headerData = {
	primaryText: "meet 2019's edition winners",
	navigation: [
		{
			title: 'overall'
		},
		{
			title: 'mobile'
		},
		{
			title: 'server'
		},
		{
			title: 'webxr'
		},
		{
			title: 'web monetization'
		}
	],
	years: [
		{
			year: '2019'
		},
		{
			year: '2018'
		},
		{
			year: '2017'
		},
		{
			year: '2016'
		},
		{
			year: '2015'
		},
		{
			year: '2014'
		},
		{
			year: '2013'
		}
	]
};

const winnersData = {
	overoll: []
};

for (let i = 0; i < 100; i++) {
	winnersData.overoll.push({
		name: `${i + 1}. Place game`,
		category: 'category',
		gameImg: 'https://picsum.photos/600/300',
		author: 'author name',
		authorUrl: '/author',
		gameUrl: '/game'
	});
}
const accordion_content = {
	overall: (
		<>
			{winnersData.overoll.slice(0, 20).map((props, id) => (
				<WinnersGold {...props} key={id} place={id} />
			))}
			{winnersData.overoll.slice(20, 51).map((props, id) => (
				<WinnersSmallWrapper {...props} key={id} place={id} />
			))}

			<GamesList gamesList={winnersData.overoll.slice(51, 61)} place='51-60' />
			<GamesList gamesList={winnersData.overoll.slice(61, 71)} place='61-70' />
			<GamesList gamesList={winnersData.overoll.slice(71, 81)} place='71-80' />
			<GamesList gamesList={winnersData.overoll.slice(81, 91)} place='81-90' />
			<GamesList
				gamesList={winnersData.overoll.slice(91, 101)}
				place='91-100'
			/>
			<GamesList
				gamesList={winnersData.overoll.slice(101, 111)}
				place='101-110'
				fontSize='.7em'
			/>
			<GamesList
				gamesList={winnersData.overoll.slice(111, 121)}
				place='111-120'
				fontSize='.7em'
			/>
			<GamesList
				gamesList={winnersData.overoll.slice(121, 131)}
				place='121-130'
				fontSize='.7em'
			/>
			<GamesList
				gamesList={winnersData.overoll.slice(141, 151)}
				place='131-140'
				fontSize='.7em'
			/>
		</>
	),
	mobile: <p>rap</p>,
	server: <p>techno</p>,
	webxr: <p>hiphop</p>,
	'web monetization': <p>pop</p>
};
const Winners = ({ year }) => {
	const [isOpen, onAccordionToggle] = useAccordionToggle({
		title1: false,
		title2: false,
		title3: false
	});

	return (
		<>
			<Head>
				<title>{year} Winners</title>
			</Head>
			<Header primaryText={headerData.primaryText} />
			<div className={styles.mainContainer}>
				<AccordionNav
					isActive={isOpen}
					onClick={onAccordionToggle}
					headerData={headerData.navigation}
					yearOptions={headerData.years}
					// allOnClick={() => onAllAccordionToggle(true)}
				/>
				<div className={styles.middleWrapper}>
					{headerData.navigation.map(({ title }) => (
						<Accordion
							key={title}
							title={title}
							onClick={() => onAccordionToggle(title)}
							isOpen={isOpen}
							category='winners'
						>
							{accordion_content[title]}
						</Accordion>
					))}
				</div>
			</div>
		</>
	);
};

export default Winners;
