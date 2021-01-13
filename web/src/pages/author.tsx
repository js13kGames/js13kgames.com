import Head from "next/head";
import {Button, SocialIcons} from "../components";
import {EntriesItem} from "../layouts";
import styles from "../styles/author.module.scss";

const authorsData = {
  author001: [
    {
      name: "games name",
      year: "2016",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
    {
      name: "games name",
      year: "2017",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
    {
      name: "games name",
      year: "2019",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
  ],
};

const Author = () => {
  return (
    <>
      <Head>
        <title>Rules</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <SocialIcons variant="variant2" />
      <div className={styles.container}>
        <div className={styles.infoWrapper}>
          <img
            className={styles.authorsImg}
            src="https://picsum.photos/600/300"
            alt="photo"
          />
          <div className={styles.descriptionWrapper}>
            <h1>authors name</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque est mi, faucibus vel ligula a, varius iaculis leo.
            </h3>
            <div className={styles.socialWrapper}>
              <p>@twitter</p>
              <p>website</p>
              <p>github</p>
            </div>
            <div className={styles.btnsWrapper}>
              <Button href="/badge" buttonClass="navAccItem">
                badge
              </Button>
              <Button href="/badge" buttonClass="navAccItem">
                badge
              </Button>
            </div>
          </div>
        </div>
        <h1 className={styles.sectorTitle}>games</h1>
        <div className={styles.gamesList}>
          {authorsData.author001.map((props) => (
            <EntriesItem {...props} variant2 />
          ))}
        </div>
      </div>
    </>
  );
};

export default Author;
