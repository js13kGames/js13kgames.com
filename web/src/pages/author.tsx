import Head from "next/head";
import {SocialIcons} from "../components";
import {EntriesItem, InfoWrapper} from "../layouts";
import styles from "../styles/author.module.scss";

const authorsData = {
  author001: {
    info: {
      authorName: "Author Name",
      descirption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo.",
      image: "https://picsum.photos/600/300",
    },

    social: [
      {
        name: "twitter",
        url: "https://twitter.com/js13kGames",
      },
      {
        name: "website",
        url: "www.js13kgames.com",
      },
      {
        name: "github",
        url: "https://github.com/js13kGames",
      },
    ],

    games: [
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
  },
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
        <InfoWrapper
          image={authorsData.author001.info.image}
          name={authorsData.author001.info.authorName}
          description={authorsData.author001.info.descirption}
          socialData={authorsData.author001.social}
          children="budge"
          buttonHref="/budge"
        />
        <h1 className={styles.sectorTitle}>games</h1>
        <div className={styles.gamesList}>
          {authorsData.author001.games.map((props, id) => (
            <EntriesItem {...props} variant2 key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Author;
