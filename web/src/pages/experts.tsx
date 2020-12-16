import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, Header} from "../layouts";
import styles from "../styles/experts.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const expertsData = {
  primaryText: "check out 2019's edition experts",
  navigation: [
    {
      title: "desktop, mobile, server",
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

const Experts = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });
  return (
    <>
      <Head>
        <title>Experts</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={expertsData.primaryText} />
      <div className={styles.mainContainer}>
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={expertsData.navigation}
          yearOptions={expertsData.years}
          // allOnClick={() => onAllAccordionToggle()}
        />
        <div className={styles.middleWrapper}>
          {expertsData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              category="experts"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experts;
