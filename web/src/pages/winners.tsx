import Head from "next/head";
import {Header} from "../layouts";

const headerData = {
  primaryText: "meet 2019's edition winners",
};

const Winners = () => {
  return (
    <>
      <Head>
        <title>Winners</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={headerData.primaryText} />
    </>
  );
};

export default Winners;
