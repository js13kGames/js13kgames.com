import Head from "next/head";
import {useState} from "react";
import {Button} from "../components";
import {Header} from "../layouts";
import styles from "../styles/winners.module.scss";

const headerData = {
  primaryText: "meet 2019's edition winners",
};

const Winners = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Head>
        <title>Winners</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={headerData.primaryText} />
      <nav className={styles.navWrapper}>
        <select>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
        <ul className={styles.navItems}>
          <Button buttonClass="item">overall</Button>
          <Button buttonClass="item">mobile</Button>
          <Button buttonClass="item">server</Button>
          <Button buttonClass="item">webxr</Button>
          <Button buttonClass="item">web monetization</Button>
        </ul>
      </nav>
      <div className={`${styles.middleWrapper} ${active && styles.open}`}>
        <h1>open</h1>
        <div className={`${styles.description} ${active && styles.open}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus ultricies nunc, vel laoreet enim. Quisque mattis lacus id
            dictum venenatis. Donec accumsan hendrerit ante, eget gravida nunc
            fringilla sed. Praesent ligula tortor, maximus quis vulputate a,
            pharetra et odio. Cras accumsan tincidunt dui, quis fermentum arcu
            aliquet a. Aliquam congue posuere augue, nec iaculis ex placerat
            nec. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Cras sed fringilla lorem. Maecenas
            interdum mollis velit ac sagittis. Donec vel nibh sodales, dignissim
            nisl ut, accumsan libero. Etiam finibus ex a justo ullamcorper
            accumsan. Nullam eleifend massa at justo posuere, vitae interdum
            diam vestibulum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Winners;
