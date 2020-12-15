import Head from "next/head";
import {useState} from "react";
import {Accordian, Button} from "../components";
import {Header} from "../layouts";
import styles from "../styles/winners.module.scss";

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

const DEFAULT_STATE = {
  title1: false,
  title2: false,
  title3: false,
};

const Winners = () => {
  const [isOpen, setIsOpen] = useState(DEFAULT_STATE);

  const onToggleAccordion = (active) => {
    const newState = {...DEFAULT_STATE};
    newState[active] = !isOpen[active];
    setIsOpen(newState);
  };

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
          {headerData.navigation.map(({title}) => (
            <Button
              key={title}
              buttonClass="item"
              onClick={() => onToggleAccordion(title)}>
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
            onClick={() => onToggleAccordion(title)}
            isOpen={isOpen}
            category="winners"
          />
        ))}
      </div>
    </>
  );
};

export default Winners;
