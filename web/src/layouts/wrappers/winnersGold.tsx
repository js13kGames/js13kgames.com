import {Button} from "../../components";
import styles from "./winnersGold.module.scss";

const WinnersGold = () => {
  return (
    <div className={styles.container}>
      <h3>first place</h3>
      <div className={styles.img} />
      <div className={styles.description}>
        <h2>game name by authors name</h2>
        <p>category</p>
        <div className={styles.buttonsWrapper}>
          <Button href="/author" buttonClass="heroBtn">
            about the author
          </Button>
          <Button href="/game" buttonClass="heroBtn">
            about the game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WinnersGold;
