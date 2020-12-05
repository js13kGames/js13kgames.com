import Head from "next/head";
import {Hero} from "../sections";

const heroData = {
  primaryText: "blog lid sentence",
};

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Hero
        primaryText={heroData.primaryText}
        variant2
        mainClass="containerBlog"
      />
    </>
  );
};

export default Blog;
