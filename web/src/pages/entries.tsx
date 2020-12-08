import Head from "next/head";
import {Header} from "../layouts";

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
      <Header primaryText={heroData.primaryText} />
    </>
  );
};

export default Entries;
