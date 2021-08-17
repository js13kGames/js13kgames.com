import { useAuth0 } from '@auth0/auth0-react';
import { Button, Input } from '../components';
import styles from '../styles/submit.module.scss';

const Submit = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	// const [value, setValue] = useState("");

	// const onInputSubmit = (e) => {
	//   e.preventDefault();
	//   console.log(value);
	//   setValue("");
	// };

	if (!isAuthenticated) {
		return (
			<div>
				<h1 className={styles.title}>
					You need to be logged in to submit a game.
				</h1>
				<Button onClick={loginWithRedirect}>Login</Button>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>submit your game</h1>
			<main className={styles.middleWrapper}>
				<div className={styles.left}>
					<div className={styles.upload}>
						<p>upload game file</p>
					</div>
					<p className={styles.info}>
						info about file lorem ipsum dolor sit amet
					</p>
					<button style={{ padding: '20px' }}>elo</button>
				</div>
				{/* <div className={styles.right}> */}
				<form className={styles.right}>
					<Input type='text' inputClass='game' placeholder='name' />
					<select
						className={styles.select}
						name='categories'
						id='categories'
						multiple
					>
						<option value='desktop'>Desktop</option>
						<option value='mobile'>Mobile</option>
						<option value='server'>Server</option>
						<option value='webxr'>Webxr</option>
						<option value='web monetization'>Web Monetization</option>
					</select>
					<textarea
						className={styles.description}
						placeholder='description...'
					/>
					<div className={styles.checkboxWrapper}>
						<Input
							type='checkbox'
							inputClass='checkbox'
							placeholder='choose category...'
						/>
						<label style={{ margin: '0 3em 0 1em' }}>one person project</label>
						<Input
							type='checkbox'
							inputClass='checkbox'
							placeholder='choose category...'
						/>
						<label style={{ margin: '0 3em 0 1em' }}>team</label>
					</div>
					<div className={styles.gameCover}>
						<p>upload game cover</p>
					</div>
					<button style={{ padding: '20px' }}>elo</button>
				</form>
				{/* </div> */}
			</main>
		</div>
	);
};

export default Submit;
