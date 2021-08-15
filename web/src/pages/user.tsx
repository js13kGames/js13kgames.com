import Head from "next/head";
import {SocialIcons} from "../components";
import {InfoWrapper} from "../layouts";
import styles from "../styles/user.module.scss";

const userData = {
  user001: {
    info: {
      name: "User Name",
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
  },
};

const User = () => {
  return (
    <>
      <Head>
        <title>Rules</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <SocialIcons />
      <div className={styles.container}>
        <InfoWrapper
          image={userData.user001.info.image}
          name={userData.user001.info.name}
          description={userData.user001.info.descirption}
          socialData={userData.user001.social}
          children="budge"
          buttonHref="/budge"
        />
      </div>
    </>
  );
};

export default User;
