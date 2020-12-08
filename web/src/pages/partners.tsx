import Head from "next/head";
import {Header} from "../layouts";

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
      <Header primaryText={heroData.primaryText} />
    </>
  );
};

export default Partners;
