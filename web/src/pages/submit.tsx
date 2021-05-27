import styles from "../styles/submit.module.scss";

const Submit = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>submit your game</h1>
      <main className={styles.middleWrapper}>
        <div className={styles.left}>
          <div className={styles.upload}>
            <p>upload game file</p>
          </div>
        </div>
        <div className={styles.information}></div>
      </main>
      <div>
        <button style={{padding: "20px"}}>elo</button>
        <button style={{padding: "20px"}}>elo</button>
      </div>
    </div>
  );
};

export default Submit;
