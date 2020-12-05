import Head from "next/head";
import {Hero} from "../sections";

const heroData = {
  primaryText: "check out 2019's edition prizes",
};

const Prizes = () => {
  return (
    <>
      <Head>
        <title>Prizes</title>
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

export default Prizes;
