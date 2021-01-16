import { useRouter } from 'next/router';
import { Button } from '../../components';
import styles from './accordionNav.module.scss';

const AccordionNav = ({
	isActive,
	onClick,
	headerData,
	yearOptions
	// allOnClick,
}) => {
	const router = useRouter();

	const onYearChange = (year) => {
		router.push(router.pathname.replace('[year]', year));
	};

	return (
		<nav className={styles.navWrapper}>
			<select
				onChange={(e) => {
					onYearChange(e.target.value);
				}}
			>
				{yearOptions.map(({ year }) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
			<ul className={styles.navItems}>
				{/* <Button
          isActive={!isActive}
          buttonClass="item"
          onClick={() => allOnClick()}>
          all
        </Button> */}
				{headerData.map(({ title }) => (
					<Button
						key={title}
						isActive={isActive[title]}
						buttonClass='navAccItem'
						onClick={() => onClick(title)}
					>
						{title}
					</Button>
				))}
			</ul>
		</nav>
	);
};

export default AccordionNav;
