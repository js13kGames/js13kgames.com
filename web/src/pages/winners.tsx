import Head from "next/head";
import {Accordian, Button} from "../components";
import {Header} from "../layouts";
import styles from "../styles/winners.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const headerData = {
  primaryText: "meet 2019's edition winners",
  navigation: [
    {
      title: "overall",
    },
    {
      title: "mobile",
    },
    {
      title: "server",
    },
    {
      title: "webxr",
    },
    {
      title: "web monetization",
    },
  ],
};

const Winners = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });
  return (
    <>
      <Head>
        <title>Winners</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={headerData.primaryText} />
      <div className={styles.mainContainer}>
        <nav className={styles.navWrapper}>
          <select>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
          <ul className={styles.navItems}>
            {headerData.navigation.map(({title}) => (
              <Button
                key={title}
                isActive={isOpen[title]}
                buttonClass="item"
                onClick={() => onAccordionToggle(title)}>
                {title}
              </Button>
            ))}
          </ul>
        </nav>
        <div className={styles.middleWrapper}>
          {headerData.navigation.map(({title}) => (
            <Accordian
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              category="winners"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Winners;
