import Head from "next/head";
import {Button, SocialIcons} from "../components";
import {InfoWrapper} from "../layouts";
import styles from "../styles/game.module.scss";

const gamesData = {
  game001: {
    info: {
      gameName: "game Name",
      author: "author's name",
      image: "https://picsum.photos/600/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices suscipit mauris, sed interdum augue feugiat ac. Sed non magna a tortor molestie vestibulum. Vestibulum vel porta lorem. Integer et nunc lobortis, ultricies ligula in, ultrices arcu. Cras eu tincidunt orci, pharetra accumsan lacus. Integer ac lacinia elit, ut egestas metus. Nam varius metus eros, egestas egestas mi elementum sit amet. Sed congue tempor efficitur. Sed lacinia in massa at rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
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
    feedback: [
      {
        expertName: "expert name1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices suscipit mauris, sed interdum augue feugiat ac. Sed non magna a tortor molestie vestibulum. Vestibulum vel porta lorem. Integer et nunc lobortis, ultricies ligula in, ultrices arcu. Cras eu tincidunt orci, pharetra accumsan lacus. Integer ac lacinia elit, ut egestas metus. Nam varius metus eros, egestas egestas mi elementum sit amet.",
      },
      {
        expertName: "expert name2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices suscipit mauris, sed interdum augue feugiat ac. Sed non magna a tortor molestie vestibulum. Vestibulum vel porta lorem. Integer et nunc lobortis, ultricies ligula in, ultrices arcu. Cras eu tincidunt orci, pharetra accumsan lacus. Integer ac lacinia elit, ut egestas metus. Nam varius metus eros, egestas egestas mi elementum sit amet.",
      },
      {
        expertName: "expert name3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices suscipit mauris, sed interdum augue feugiat ac. Sed non magna a tortor molestie vestibulum. Vestibulum vel porta lorem. Integer et nunc lobortis, ultricies ligula in, ultrices arcu. Cras eu tincidunt orci, pharetra accumsan lacus. Integer ac lacinia elit, ut egestas metus. Nam varius metus eros, egestas egestas mi elementum sit amet.",
      },
    ],
  },
};

const Game = () => {
  return (
    <>
      <Head>
        <title>Rules</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <SocialIcons variant="variant2" />
      <div className={styles.container}>
        <InfoWrapper
          game
          name={gamesData.game001.info.gameName}
          image={gamesData.game001.info.image}
          author={gamesData.game001.info.author}
          socialData={gamesData.game001.social}
          children="share"
          size="imgGame"
        />
        <Button href="/gamepage" buttonClass="gamePlay">
          play the game
        </Button>
        <div>
          <p>{gamesData.game001.info.description}</p>
          <h2 className={styles.feedbackTitle}>feedback from the experts</h2>
          {gamesData.game001.feedback.map(({expertName, description}) => (
            <p className={styles.feedbackWrapper} key={expertName}>
              <span>{expertName}:</span> {description}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
