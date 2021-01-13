import {useRouter} from "next/router";
import styles from "./entriesItem.module.scss";

export interface EntriesProps {
  gameUrl: string;
  img: string;
  name: string;
  author?: string;
  year?: string;
  variant2?: boolean;
}

const EntriesItem = ({
  gameUrl,
  img,
  name,
  author,
  year,
  variant2,
}: EntriesProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.replace(`${gameUrl}`)}
      className={styles.container}>
      <div
        className={styles.entriesImg}
        style={{backgroundImage: `url('${img}')`}}
      />
      <div className={styles.titleWrapper}>
        <h1>{name}</h1>
        {variant2 ? <h3>{year}</h3> : <h3>{author}</h3>}
      </div>
    </div>
  );
};

export default EntriesItem;
