import Head from "next/head";
import {Hero} from "../sections";

const heroData = {
  primaryText: "check out 2019's edition entries",
};

const Entries = () => {
  return (
    <>
      <Head>
        <title>Entries</title>
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

export default Entries;
