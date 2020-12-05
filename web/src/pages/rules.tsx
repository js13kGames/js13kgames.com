import Head from "next/head";
import {Hero} from "../sections";

const heroData = {
  primaryText: "js13kgames rules",
};

const Rules = () => {
  return (
    <>
      <Head>
        <title>Rules</title>
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

export default Rules;
