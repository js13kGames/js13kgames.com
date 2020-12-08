import Head from "next/head";
import {Header} from "../layouts";

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
      <Header primaryText={heroData.primaryText} />
    </>
  );
};

export default Prizes;
