import Link from "next/link";
import {Button} from "../../components";
import styles from "./winnersGold.module.scss";

export interface WrapperProps {
  wrapper?: string;
  place?: number;
  name?: string;
  category?: string;
  author?: string;
  gameUrl?: string;
  authorUrl?: string;
  gameImg?: string;
}

const WinnersGold = ({
  wrapper,
  place,
  name,
  category,
  author,
  authorUrl,
  gameUrl,
  gameImg,
}: WrapperProps) => {
  return (
    <div className={`${styles.container} ${wrapper && styles[wrapper]}`}>
      <h3 className={styles.place}>{place}</h3>
      <div
        className={`${styles.img} `}
        style={{backgroundImage: `url(${gameImg})`}}
      />
      <div className={styles.description}>
        {!gameImg ? (
          <Link href={gameUrl}>
            <a className={styles.titleLink}>
              {name} by {author}
            </a>
          </Link>
        ) : (
          <h2>
            {name} by {author}
          </h2>
        )}

        <p className={styles.category}>{category}</p>
        <div className={`${styles.buttonsWrapper} `}>
          <Button href={authorUrl} buttonClass="heroBtn">
            about the author
          </Button>
          <Button href={gameUrl} buttonClass="heroBtn">
            about the game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WinnersGold;
