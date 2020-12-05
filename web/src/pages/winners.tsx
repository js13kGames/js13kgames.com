import Head from "next/head";
import {Hero} from "../sections";

const heroData = {
  primaryText: "meet 2019's edition winners",
};

const Winners = () => {
  return (
    <>
      <Head>
        <title>Winners</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Hero
        primaryText={heroData.primaryText}
        variant2
        mainClass="containerWinners"
      />
    </>
  );
};

export default Winners;
