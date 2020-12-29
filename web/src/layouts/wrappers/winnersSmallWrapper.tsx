import Link from "next/link";
import styles from "./winnersSmall.module.scss";

const WinnersSmallWrapper = ({name, author, gameUrl, place}) => {
  return (
    <div className={styles.container}>
      <Link href={gameUrl}>
        <a>
          {place}. {name} by {author}
        </a>
      </Link>
    </div>
  );
};

export default WinnersSmallWrapper;
