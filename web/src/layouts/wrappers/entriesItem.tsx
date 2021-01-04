import {useRouter} from "next/router";
import styles from "./entriesItem.module.scss";

const EntriesItem = ({gameUrl, img, name, author}) => {
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
        <h3>{author}</h3>
      </div>
    </div>
  );
};

export default EntriesItem;
