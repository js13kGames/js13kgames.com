import styles from "./prizesList.module.scss";

export interface PrizesListProps {
  prizesData: any;
  gamesNumber: string;
}
export interface PrizesDataProps {
  place: string;
  name: string;
}

const PrizesList = ({gamesNumber, prizesData}: PrizesListProps) => {
  return (
    <div className={styles.container}>
      <h3>Top {gamesNumber} games</h3>
      {prizesData.map(({place, name}: PrizesDataProps) => (
        <p>
          {place} {place.length <= 3 ? "place" : "places"}: {name}
        </p>
      ))}
    </div>
  );
};

export default PrizesList;
