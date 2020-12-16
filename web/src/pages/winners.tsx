import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, Header} from "../layouts";
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
  years: [
    {
      year: "2019",
    },
    {
      year: "2018",
    },
    {
      year: "2017",
    },
    {
      year: "2016",
    },
    {
      year: "2015",
    },
    {
      year: "2014",
    },
    {
      year: "2013",
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
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={headerData.navigation}
          yearOptions={headerData.years}
          // allOnClick={() => onAllAccordionToggle()}
        />
        <div className={styles.middleWrapper}>
          {headerData.navigation.map(({title}) => (
            <Accordion
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
