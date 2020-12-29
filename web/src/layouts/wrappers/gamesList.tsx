import Link from "next/link";
import styles from "./gamesList.module.scss";

export interface GamesListProps {
  gamesList: any;
  place: string;
  fontSize?: string;
}

const GamesList = ({gamesList, place, fontSize}: GamesListProps) => {
  return (
    <div className={styles.container}>
      <p style={{fontSize: `${fontSize}`}}>{place}. </p>
      {gamesList.map(({gameUrl, name}) => (
        <Link href={gameUrl}>
          <a style={{fontSize: `${fontSize}`}}>{name}, </a>
        </Link>
      ))}
    </div>
  );
};

export default GamesList;
