import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, Header} from "../layouts";
import styles from "../styles/prizes.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const prizesData = {
  primaryText: "check out 2019's edition prizes",
  navigation: [
    {
      title: "desktop",
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

const Prizes = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });
  return (
    <>
      <Head>
        <title>Prizes</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={prizesData.primaryText} />
      <div className={styles.mainContainer}>
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={prizesData.navigation}
          yearOptions={prizesData.years}
          // allOnClick={() => onAllAccordionToggle()}
        />
        <div className={styles.middleWrapper}>
          {prizesData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              category="prizes"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Prizes;
