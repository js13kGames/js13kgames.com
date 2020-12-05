import Head from "next/head";
import {Hero} from "../sections";

const heroData = {
  primaryText: "our partners",
};

const Partners = () => {
  return (
    <>
      <Head>
        <title>Partners</title>
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

export default Partners;
